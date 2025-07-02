"use client"

import { Input } from "@/components/ui/input"
import DownloadButtons from "./download-buttons"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { CheckCircle, Star, Smartphone, MapPin, Building2, TrendingUp, Gift, AlertCircle, Sparkles } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { translations } from "@/lib/translations"
import ModernButton from "./modern-button"
import { joinWaitlist, submitWaitlistSurvey, getWaitlistQuestions } from "@/lib/utils/waitlist-service"

type WaitlistStep = "initial" | "complete"

const banks = ["Santander", "Galicia", "BBVA", "Macro", "Nación", "Uala", "Naranja X", "Mercado Pago", "Otros"]

function useWaitlistQuestions() {
  const [questions, setQuestions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getWaitlistQuestions()
      .then(setQuestions)
      .catch(() => setError("No se pudieron cargar las preguntas"))
      .finally(() => setLoading(false))
  }, [])

  return { questions, loading, error }
}

export default function ModernWaitlist() {
  const t = translations.es
  const [step, setStep] = useState<WaitlistStep>("initial")
  const [email, setEmail] = useState("")
  const [selectedBanks, setSelectedBanks] = useState<string[]>([])
  const [shareLocation, setShareLocation] = useState("")
  const [device, setDevice] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showSurveyPopup, setShowSurveyPopup] = useState(false)
  const [surveyCompleted, setSurveyCompleted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { questions: surveyQuestions, loading: loadingQuestions, error: errorQuestions } = useWaitlistQuestions()
  const [answers, setAnswers] = useState<any[]>([])

  useEffect(() => {
    if (surveyQuestions.length > 0) {
      setAnswers(surveyQuestions.map(() => ""))
    }
  }, [surveyQuestions])

  const handleDynamicAnswerChange = (idx: number, value: any) => {
    setAnswers((prev) => {
      const copy = [...prev]
      copy[idx] = value
      return copy
    })
  }

  const handleDynamicSurveySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    try {
      // Formatear respuestas para el backend
      const formattedAnswers = surveyQuestions.map((q, idx) => ({
        question_value: q.question_value,
        optional: q.optional,
        answer_value: answers[idx],
      }))
      await submitWaitlistSurvey(email, formattedAnswers)
      setSurveyCompleted(true)
      setShowSurveyPopup(false)
    } catch (error) {
      setError("Error de conexión. Por favor intenta nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInitialSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setError(null)

    try {
      await joinWaitlist(email)
      setStep("complete")
    } catch (error) {
      console.error("Error joining waitlist:", error)
      setError("Error de conexión. Por favor intenta nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSurveySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const answers = [
        {
          question_value: "¿Qué bancos utilizas actualmente?",
          optional: false,
          answer_value: selectedBanks,
        },
        {
          question_value: "¿Compartirías tu ubicación para recomendaciones personalizadas?",
          optional: false,
          answer_value: shareLocation,
        },
        {
          question_value: "¿Cuál es tu plataforma preferida?",
          optional: false,
          answer_value: device,
        },
      ]
      await submitWaitlistSurvey(email, answers)
      setSurveyCompleted(true)
      setShowSurveyPopup(false)
    } catch (error) {
      console.error("Error completing survey:", error)
      setError("Error de conexión. Por favor intenta nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSkipSurvey = () => {
    setShowSurveyPopup(false)
  }

  const handleBankChange = (bank: string, checked: boolean) => {
    if (checked) {
      setSelectedBanks([...selectedBanks, bank])
    } else {
      setSelectedBanks(selectedBanks.filter((b) => b !== bank))
    }
  }

  if (step === "complete") {
    return (
      <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center bg-slate-950 relative overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>
        <div className="z-10 w-full max-w-2xl mx-auto text-center px-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-8 animate-glow">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {surveyCompleted ? "¡Excelente! Posición prioritaria asegurada" : "¡Bienvenido a la waitlist!"}
          </h2>
          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            {surveyCompleted
              ? "Has avanzado significativamente en la lista y serás de los primeros en acceder a SaveApp."
              : "Te hemos agregado a nuestra lista de espera. Te notificaremos cuando la beta esté lista."}
          </p>
          <div className="mb-8">
            {surveyCompleted ? (
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg animate-glow">
                <Star className="w-5 h-5 fill-current" />
                <span>Posición prioritaria</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 glass border border-slate-700/50 text-teal-400 px-6 py-3 rounded-full font-semibold">
                <Sparkles className="w-5 h-5" />
                <span>En lista de espera</span>
              </div>
            )}
          </div>
          {/* Texto shimmer para avanzar en la lista */}
          {!surveyCompleted && (
            <button
              type="button"
              onClick={() => setShowSurveyPopup(true)}
              className="mt-2 mx-auto block text-lg font-semibold relative shimmer-text text-white/90 hover:text-white transition-colors"
              style={{ outline: "none", border: "none", background: "none", cursor: "pointer" }}
            >
              <span className="inline-block shimmer-text-inner">
                Avanzar en la lista respondiendo 3 preguntas &gt; &gt;
              </span>
            </button>
          )}
        </div>
        {/* Survey Popup Modal */}
        <Dialog open={showSurveyPopup} onOpenChange={setShowSurveyPopup}>
          <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div>
                  <DialogTitle className="text-2xl font-bold text-white">{t.advanceInWaitlist}</DialogTitle>
                  <DialogDescription className="text-slate-300 mt-1">{t.completeSurvey}</DialogDescription>
                </div>
              </div>
            </DialogHeader>

            {/* Error Display */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-4">
                <div className="flex items-center gap-2 text-red-400">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{error}</span>
                </div>
              </div>
            )}

            {!loadingQuestions && surveyQuestions.length > 0 && (
              <form onSubmit={handleDynamicSurveySubmit} className="space-y-6">
                {surveyQuestions.map((q, idx) => (
                  <div key={q.question_value}>
                    <Label className="text-lg font-semibold text-white mb-2 block">{q.question_value}</Label>
                    {Array.isArray(q.answer_value) ? (
                      q.answer_value.length > 3 ? (
                        // Si hay muchas opciones, usar select
                        <select
                          className="bg-slate-800/50 border-slate-600 text-white rounded-xl p-2 mt-2"
                          value={answers[idx]}
                          onChange={e => handleDynamicAnswerChange(idx, e.target.value)}
                          required={!q.optional}
                        >
                          <option value="">Selecciona una opción</option>
                          {q.answer_value.map((opt: string) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        // Si hay pocas opciones, usar radio
                        <div className="flex gap-4 mt-2">
                          {q.answer_value.map((opt: string) => (
                            <label key={opt} className="flex items-center gap-2 text-slate-300">
                              <input
                                type="radio"
                                name={`question-${idx}`}
                                value={opt}
                                checked={answers[idx] === opt}
                                onChange={() => handleDynamicAnswerChange(idx, opt)}
                                required={!q.optional}
                              />
                              {opt}
                            </label>
                          ))}
                        </div>
                      )
                    ) : (
                      <input
                        className="bg-slate-800/50 border-slate-600 text-white rounded-xl p-2 mt-2"
                        type="text"
                        value={answers[idx]}
                        onChange={e => handleDynamicAnswerChange(idx, e.target.value)}
                        required={!q.optional}
                      />
                    )}
                  </div>
                ))}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <ModernButton
                    type="button"
                    variant="ghost"
                    onClick={handleSkipSurvey}
                    className="flex-1"
                    disabled={isLoading}
                  >
                    {t.maybeLater}
                  </ModernButton>
                  <ModernButton
                    type="submit"
                    disabled={isLoading || answers.some((a, i) => !surveyQuestions[i].optional && !a)}
                    className="flex-1"
                    loading={isLoading}
                  >
                    <Star className="w-4 h-4 mr-2" />
                    {t.getPriorityAccess}
                  </ModernButton>
                </div>
              </form>
            )}
            {loadingQuestions && <div className="text-slate-400">Cargando preguntas...</div>}
            {errorQuestions && <div className="text-red-400">{errorQuestions}</div>}

            {/* Privacy Note */}
            <div className="text-xs text-slate-400 text-center mt-4 p-3 bg-slate-800/30 rounded-lg">
              🔒 Tu información está segura. Solo la usamos para mejorar tu experiencia con SaveApp.
            </div>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center bg-slate-950 relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t.waitlistTitle}
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">{t.waitlistSubtitle}</p>
          </div>
          {/* Waitlist Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="glass border-slate-700/50">
              <CardContent className="p-8 lg:p-12">
                {/* Error Display */}
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6">
                    <div className="flex items-center gap-2 text-red-400">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm">{error}</span>
                    </div>
                  </div>
                )}
                <form onSubmit={handleInitialSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="email"
                      placeholder={t.emailPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 h-14 text-lg focus:border-teal-500 focus:ring-teal-500 rounded-xl"
                    />
                  </div>
                  <ModernButton
                    type="submit"
                    disabled={isLoading || !email}
                    size="lg"
                    loading={isLoading}
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 h-14"
                  >
                    {t.joinWaitlistButton}
                  </ModernButton>
                </form>
                {/* Download Section - Coming Soon */}
                <div className="mt-12 text-center">
                  <p className="text-slate-400 mb-6 font-medium">{t.availableSoon}</p>
                  <DownloadButtons size="md" disabled={true} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
