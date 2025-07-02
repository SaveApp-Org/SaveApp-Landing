"use client";

import { Input } from "@/components/ui/input";
import DownloadButtons from "./download-buttons";

import type React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  CheckCircle,
  Star,
  Smartphone,
  MapPin,
  Building2,
  TrendingUp,
  Gift,
  AlertCircle,
  Sparkles,
  Check,
} from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { translations } from "@/lib/translations";
import ModernButton from "./modern-button";
import {
  joinWaitlist,
  submitWaitlistSurvey,
  getWaitlistQuestions,
  getWaitlistSignup,
} from "@/lib/utils/waitlist-service";

type WaitlistStep = "initial" | "complete";

// Bancos mostrados en la landing + 'Otros'
const LANDING_BANKS = [
  "Uala",
  "Brubank",
  "Naranja X",
  "Macro",
  "Santander",
  "Galicia",
  "Otros",
];

// Componente personalizado para radio buttons
const CustomRadioGroup = ({
  options,
  value,
  onChange,
  name,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  name: string;
}) => {
  return (
    <div className="grid grid-cols-1 gap-3 mt-3">
      {options.map((option) => (
        <label
          key={option}
          className={`
            relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all
            ${
              value === option
                ? "border-teal-500 bg-teal-500/10"
                : "border-slate-600 bg-slate-800/30 hover:border-slate-500 hover:bg-slate-800/50"
            }
          `}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={(e) => onChange(e.target.value)}
            className="sr-only"
          />
          <div
            className={`
            w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-all
            ${value === option ? "border-teal-500 bg-teal-500" : "border-slate-400"}
          `}>
            {value === option && <div className="w-2 h-2 rounded-full bg-white" />}
          </div>
          <span className="text-white font-medium">{option}</span>
        </label>
      ))}
    </div>
  );
};

// Componente personalizado para checkboxes múltiples (para bancos)
const CustomCheckboxGroup = ({
  options,
  values,
  onChange,
}: {
  options: string[];
  values: string[];
  onChange: (values: string[]) => void;
}) => {
  const handleOptionChange = (option: string, checked: boolean) => {
    if (checked) {
      onChange([...values, option]);
    } else {
      onChange(values.filter((v) => v !== option));
    }
  };

  return (
    <div className="grid grid-cols-3 gap-3 mt-3">
      {options.map((option) => (
        <label
          key={option}
          className={`
            relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all
            ${
              values.includes(option)
                ? "border-teal-500 bg-teal-500/10"
                : "border-slate-600 bg-slate-800/30 hover:border-slate-500 hover:bg-slate-800/50"
            }
          `}>
          <input
            type="checkbox"
            value={option}
            checked={values.includes(option)}
            onChange={(e) => handleOptionChange(option, e.target.checked)}
            className="sr-only"
          />
          <div
            className={`
            w-5 h-5 rounded border-2 mr-3 flex items-center justify-center transition-all
            ${
              values.includes(option)
                ? "border-teal-500 bg-teal-500"
                : "border-slate-400"
            }
          `}>
            {values.includes(option) && <Check className="w-3 h-3 text-white" />}
          </div>
          <span className="text-white font-medium">{option}</span>
        </label>
      ))}
    </div>
  );
};

// Componente personalizado para select
const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mt-3">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full p-4 rounded-xl border-2 text-left transition-all
          ${
            value
              ? "border-teal-500 bg-teal-500/10 text-white"
              : "border-slate-600 bg-slate-800/30 text-slate-400 hover:border-slate-500"
          }
        `}>
        {value || placeholder}
      </button>
      {isOpen && (
        <div className="absolute top-full mt-1 w-full bg-slate-800 border-2 border-slate-600 rounded-xl z-50 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="w-full p-3 text-left text-white hover:bg-slate-700 transition-colors">
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

function useWaitlistQuestions() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getWaitlistQuestions()
      .then(setQuestions)
      .catch(() => setError("No se pudieron cargar las preguntas"))
      .finally(() => setLoading(false));
  }, []);

  return { questions, loading, error };
}

export default function ModernWaitlist() {
  const t = translations.es;
  const [step, setStep] = useState<WaitlistStep>("initial");
  const [email, setEmail] = useState("");
  const [selectedBanks, setSelectedBanks] = useState<string[]>([]);
  const [shareLocation, setShareLocation] = useState("");
  const [device, setDevice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSurveyPopup, setShowSurveyPopup] = useState(false);
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [alreadyInWaitlistMsg, setAlreadyInWaitlistMsg] = useState<string | null>(null);

  const {
    questions: surveyQuestions,
    loading: loadingQuestions,
    error: errorQuestions,
  } = useWaitlistQuestions();
  const [answers, setAnswers] = useState<any[]>([]);

  useEffect(() => {
    if (surveyQuestions.length > 0) {
      setAnswers(surveyQuestions.map(() => ""));
    }
  }, [surveyQuestions]);

  const handleDynamicAnswerChange = (idx: number, value: any) => {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[idx] = value;
      return copy;
    });
  };

  const handleDynamicSurveySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      // Formatear respuestas para el backend
      const formattedAnswers = surveyQuestions.map((q, idx) => {
        let answerValue = answers[idx];

        // Si es una pregunta sobre bancos y hay múltiples valores, unirlos con coma
        if (
          q.question_value.toLowerCase().includes("banco") &&
          Array.isArray(answerValue)
        ) {
          answerValue = answerValue.join(", ");
        }

        return {
          question_value: q.question_value,
          optional: q.optional,
          answer_value: answerValue,
        };
      });
      await submitWaitlistSurvey(email, formattedAnswers);
      setSurveyCompleted(true);
      setShowSurveyPopup(false);
    } catch (error) {
      setError("Error de conexión. Por favor intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInitialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError(null);
    setAlreadyInWaitlistMsg(null);

    try {
      let alreadyInWaitlist = false;
      const existing = await getWaitlistSignup(email);
      if (existing) {
        alreadyInWaitlist = true;
      }

      if (alreadyInWaitlist) {
        setStep("initial");
        setAlreadyInWaitlistMsg("Ya estás en la waitlist con este email.");
        setError(null);
        return;
      }
      await joinWaitlist(email);
      setStep("complete");
    } catch (error) {
      console.error("Error joining waitlist:", error);
      setError("Error de conexión. Por favor intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSurveySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const answers = [
        {
          question_value: "¿Qué bancos utilizas actualmente?",
          optional: false,
          answer_value: selectedBanks.join(", "), // Enviar separado por comas
        },
        {
          question_value:
            "¿Compartirías tu ubicación para recomendaciones personalizadas?",
          optional: false,
          answer_value: shareLocation,
        },
        {
          question_value: "¿Cuál es tu plataforma preferida?",
          optional: false,
          answer_value: device,
        },
      ];
      await submitWaitlistSurvey(email, answers);
      setSurveyCompleted(true);
      setShowSurveyPopup(false);
    } catch (error) {
      console.error("Error completing survey:", error);
      setError("Error de conexión. Por favor intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSkipSurvey = () => {
    setShowSurveyPopup(false);
  };

  const handleBankChange = (bank: string, checked: boolean) => {
    if (checked) {
      setSelectedBanks([...selectedBanks, bank]);
    } else {
      setSelectedBanks(selectedBanks.filter((b) => b !== bank));
    }
  };

  if (step === "complete") {
    return (
      <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center bg-slate-950 relative overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}></div>
        </div>
        <div className="z-10 w-full max-w-2xl mx-auto text-center px-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-8 animate-glow">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {surveyCompleted
              ? "¡Excelente! Posición prioritaria asegurada"
              : "¡Bienvenido a la waitlist!"}
          </h2>
          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            {surveyCompleted
              ? "Has avanzado significativamente en la lista y serás de los primeros en acceder a SaveApp."
              : "Te hemos agregado a nuestra lista de espera. Te notificaremos cuando la beta esté lista."}
          </p>
          {/* BOTÓN ELIMINADO: Solo mostrar si NO se completó la encuesta */}
          {!surveyCompleted && (
            <button
              type="button"
              onClick={() => setShowSurveyPopup(true)}
              className="mt-2 mx-auto block text-lg font-semibold relative shimmer-text text-white/90 hover:text-white transition-colors"
              style={{
                outline: "none",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}>
              <span className="inline-block shimmer-text-inner">
                Avanzar en la lista respondiendo 3 preguntas &gt;&gt;
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
                  <DialogTitle className="text-2xl font-bold text-white">
                    {t.advanceInWaitlist}
                  </DialogTitle>
                  <DialogDescription className="text-slate-300 mt-1">
                    {t.completeSurvey}
                  </DialogDescription>
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
            {alreadyInWaitlistMsg && (
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-6">
                <div className="flex items-center gap-2 text-blue-400">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">{alreadyInWaitlistMsg}</span>
                </div>
              </div>
            )}

            {!loadingQuestions && surveyQuestions.length > 0 && (
              <form onSubmit={handleDynamicSurveySubmit} className="space-y-6">
                {surveyQuestions.map((q, idx) => {
                  // Debug: Log para ver la estructura de la pregunta
                  console.log(
                    "Pregunta:",
                    q.question_value,
                    "answer_value:",
                    q.answer_value,
                    "tipo:",
                    typeof q.answer_value
                  );

                  // Detectar si es pregunta de bancos de forma más robusta
                  const isBankQuestion = q.question_value
                    .toLowerCase()
                    .includes("banco");

                  return (
                    <div key={q.question_value}>
                      <Label className="text-lg font-semibold text-white mb-2 block">
                        {q.question_value}
                      </Label>
                      {isBankQuestion ? (
                        // SIEMPRE usar CustomCheckboxGroup para preguntas de bancos
                        <CustomCheckboxGroup
                          options={LANDING_BANKS}
                          values={Array.isArray(answers[idx]) ? answers[idx] : []}
                          onChange={(values) => handleDynamicAnswerChange(idx, values)}
                        />
                      ) : Array.isArray(q.answer_value) ? (
                        q.answer_value.length > 3 ? (
                          // Si hay muchas opciones, usar select personalizado
                          <CustomSelect
                            options={q.answer_value}
                            value={answers[idx]}
                            onChange={(value) => handleDynamicAnswerChange(idx, value)}
                            placeholder="Selecciona una opción"
                          />
                        ) : (
                          // Si hay pocas opciones, usar radio personalizado
                          <CustomRadioGroup
                            options={q.answer_value}
                            value={answers[idx]}
                            onChange={(value) => handleDynamicAnswerChange(idx, value)}
                            name={`question-${idx}`}
                          />
                        )
                      ) : (
                        // Input de texto personalizado
                        <input
                          className="w-full p-4 mt-3 bg-slate-800/30 border-2 border-slate-600 text-white rounded-xl focus:border-teal-500 focus:ring-0 transition-all placeholder-slate-400"
                          type="text"
                          value={answers[idx]}
                          onChange={(e) =>
                            handleDynamicAnswerChange(idx, e.target.value)
                          }
                          required={!q.optional}
                          placeholder="Escribe tu respuesta..."
                        />
                      )}
                    </div>
                  );
                })}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <ModernButton
                    type="button"
                    variant="ghost"
                    onClick={handleSkipSurvey}
                    className="flex-1 hover:text-teal-400 !bg-transparent !border-none !shadow-none transition-none focus:ring-0 focus:outline-none"
                    disabled={isLoading}>
                    {t.maybeLater}
                  </ModernButton>
                  <ModernButton
                    type="submit"
                    disabled={
                      isLoading ||
                      answers.some((a, i) => {
                        const question = surveyQuestions[i];
                        if (question.optional) return false;
                        if (Array.isArray(a)) return a.length === 0;
                        return !a;
                      })
                    }
                    className="flex-1"
                    loading={isLoading}>
                    {t.getPriorityAccess}
                  </ModernButton>
                </div>
              </form>
            )}
            {loadingQuestions && (
              <div className="text-slate-400">Cargando preguntas...</div>
            )}
            {errorQuestions && <div className="text-red-400">{errorQuestions}</div>}
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center bg-slate-950 relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t.waitlistTitle}
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {t.waitlistSubtitle}
            </p>
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
                {alreadyInWaitlistMsg && (
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-6">
                    <div className="flex items-center gap-2 text-blue-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">{alreadyInWaitlistMsg}</span>
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
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 h-14">
                    {t.joinWaitlistButton}
                  </ModernButton>
                </form>
                {/* Download Section - Coming Soon */}
                {/*
                <div className="mt-12 text-center">
                  <p className="text-slate-400 mb-6 font-medium">{t.availableSoon}</p>
                  <DownloadButtons size="md" disabled={true} />
                </div>
                */}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
