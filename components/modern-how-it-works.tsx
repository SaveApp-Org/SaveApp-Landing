"use client"

import { Search, Brain, Bell, TrendingUp, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Web Scraping Inteligente",
    description: "Recopilamos automáticamente ofertas de todos los bancos y comercios en tiempo real",
    gradient: "from-teal-500 to-cyan-500",
    number: "01",
  },
  {
    icon: Brain,
    title: "Análisis con IA",
    description: "Nuestra inteligencia artificial analiza términos y condiciones para extraer información clave",
    gradient: "from-blue-500 to-indigo-500",
    number: "02",
  },
  {
    icon: Bell,
    title: "Notificaciones Personalizadas",
    description: "Te alertamos cuando hay ofertas relevantes cerca de tu ubicación",
    gradient: "from-purple-500 to-pink-500",
    number: "03",
  },
  {
    icon: TrendingUp,
    title: "Seguimiento de Reintegros",
    description: "Monitoreamos tus compras y te recordamos verificar que recibiste todos los beneficios",
    gradient: "from-orange-500 to-red-500",
    number: "04",
  },
]

export default function ModernHowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Cómo <span className="gradient-text">funciona</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Tecnología de vanguardia que trabaja para ti las 24 horas del día, asegurándote que nunca pierdas una
              oportunidad de ahorro.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-20">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center space-x-4">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-xl text-white font-bold text-lg`}
                      >
                        {step.number}
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent"></div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-white">{step.title}</h3>

                    <p className="text-lg text-slate-400 leading-relaxed">{step.description}</p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {index === 0 && (
                        <>
                          <div className="flex items-center space-x-2 text-slate-300">
                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                            <span>Monitoreo 24/7 de sitios bancarios</span>
                          </div>
                          <div className="flex items-center space-x-2 text-slate-300">
                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                            <span>Actualización en tiempo real</span>
                          </div>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <div className="flex items-center space-x-2 text-slate-300">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span>Procesamiento de lenguaje natural</span>
                          </div>
                          <div className="flex items-center space-x-2 text-slate-300">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span>Extracción de datos clave</span>
                          </div>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <div className="flex items-center space-x-2 text-slate-300">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                            <span>Geolocalización inteligente</span>
                          </div>
                          <div className="flex items-center space-x-2 text-slate-300">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                            <span>Filtros personalizados</span>
                          </div>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <div className="flex items-center space-x-2 text-slate-300">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                            <span>Recordatorios automáticos</span>
                          </div>
                          <div className="flex items-center space-x-2 text-slate-300">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                            <span>Historial de ahorros</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="relative">
                      {/* Main Circle */}
                      <div
                        className={`w-64 h-64 lg:w-80 lg:h-80 mx-auto bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center relative overflow-hidden group`}
                      >
                        <step.icon className="w-24 h-24 lg:w-32 lg:h-32 text-white group-hover:scale-110 transition-transform duration-300" />

                        {/* Animated Rings */}
                        <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"></div>
                        <div className="absolute inset-4 rounded-full border border-white/30"></div>
                      </div>

                      {/* Floating Elements */}
                      <div
                        className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full opacity-60 animate-float`}
                      ></div>
                      <div
                        className={`absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-full opacity-40 animate-float`}
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-12 lg:mt-20">
                    <ArrowRight className="w-8 h-8 text-slate-600 animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
