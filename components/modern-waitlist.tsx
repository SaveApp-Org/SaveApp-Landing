"use client"

import { Input } from "@/components/ui/input"
import DownloadButtons from "./download-buttons"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { CheckCircle, Star, Smartphone, MapPin, Building2, TrendingUp, Gift, AlertCircle, Sparkles } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { translations } from "@/lib/translations"
import ModernButton from "./modern-button"

type WaitlistStep = "initial" | "complete"

const banks = ["Santander", "Galicia", "BBVA", "Macro", "Nación", "Uala", "Naranja X", "Mercado Pago", "Otros"]

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

  const handleInitialSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
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
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
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

            <form onSubmit={handleSurveySubmit} className="space-y-6">
              {/* Banks Question */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-teal-400" />
                  <Label className="text-lg font-semibold text-white">{t.banksQuestion}</Label>
                  <span className="text-sm text-slate-400">{t.selectAllApply}</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {banks.map((bank) => (
                    <div key={bank} className="flex items-center space-x-2">
                      <Checkbox
                        id={bank}
                        checked={selectedBanks.includes(bank)}
                        onCheckedChange={(checked) => handleBankChange(bank, checked as boolean)}
                        className="border-slate-600 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500 rounded-sm"
                      />
                      <Label htmlFor={bank} className="text-slate-300 cursor-pointer text-sm">
                        {bank}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Question */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-teal-400" />
                  <Label className="text-lg font-semibold text-white">{t.locationQuestion}</Label>
                </div>
                <div className="glass rounded-lg p-3 mb-4 border border-slate-700">
                  <p className="text-sm text-slate-300">
                    <strong className="text-teal-400">{t.whyUseful}</strong> {t.locationExplanation}
                  </p>
                </div>
                <RadioGroup value={shareLocation} onValueChange={setShareLocation}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="location-yes" className="border-slate-600 text-teal-500" />
                    <Label htmlFor="location-yes" className="text-slate-300 cursor-pointer">
                      {t.yesLocation}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="maybe" id="location-maybe" className="border-slate-600 text-teal-500" />
                    <Label htmlFor="location-maybe" className="text-slate-300 cursor-pointer">
                      {t.maybeLocation}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="location-no" className="border-slate-600 text-teal-500" />
                    <Label htmlFor="location-no" className="text-slate-300 cursor-pointer">
                      {t.noLocation}
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Device Question */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Smartphone className="w-5 h-5 text-teal-400" />
                  <Label className="text-lg font-semibold text-white">{t.deviceQuestion}</Label>
                </div>
                <RadioGroup value={device} onValueChange={setDevice}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ios" id="device-ios" className="border-slate-600 text-teal-500" />
                    <Label htmlFor="device-ios" className="text-slate-300 cursor-pointer flex items-center gap-2">
                      <span>📱</span> iPhone (iOS)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="android" id="device-android" className="border-slate-600 text-teal-500" />
                    <Label htmlFor="device-android" className="text-slate-300 cursor-pointer flex items-center gap-2">
                      <span>🤖</span> Android
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="device-both" className="border-slate-600 text-teal-500" />
                    <Label htmlFor="device-both" className="text-slate-300 cursor-pointer flex items-center gap-2">
                      <span>📱🤖</span> Uso ambos sistemas
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Action Buttons */}
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
                  disabled={isLoading || selectedBanks.length === 0 || !shareLocation || !device}
                  className="flex-1"
                  loading={isLoading}
                >
                  <Star className="w-4 h-4 mr-2" />
                  {t.getPriorityAccess}
                </ModernButton>
              </div>
            </form>

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
              {t.waitlistTitle} <span className="gradient-text">{t.upToSavings}</span>
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
