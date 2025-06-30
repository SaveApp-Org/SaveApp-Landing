"use client"

import { Clock, Bell, Grid3X3, Building2, Sparkles, Zap } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Ahorra tiempo",
    description: "Encuentra todas las ofertas bancarias en segundos sin buscar en múltiples apps",
    gradient: "from-teal-500 to-cyan-500",
    delay: "0ms",
  },
  {
    icon: Bell,
    title: "Notificaciones inteligentes",
    description: "Recibe alertas personalizadas de ofertas que realmente te interesan",
    gradient: "from-blue-500 to-indigo-500",
    delay: "100ms",
  },
  {
    icon: Grid3X3,
    title: "Organización perfecta",
    description: "Navega fácilmente entre categorías: restaurantes, retail, viajes y más",
    gradient: "from-purple-500 to-pink-500",
    delay: "200ms",
  },
  {
    icon: Building2,
    title: "Múltiples bancos",
    description: "Compatible con los principales bancos del país en una sola plataforma",
    gradient: "from-orange-500 to-red-500",
    delay: "300ms",
  },
]

export default function ModernBenefits() {
  return (
    <section id="benefits" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-24">
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Beneficios que te <span className="gradient-text">encantarán</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              SaveApp revoluciona la forma en que aprovechas los descuentos bancarios, combinando inteligencia
              artificial con una experiencia de usuario excepcional.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative" style={{ animationDelay: benefit.delay }}>
                {/* Card */}
                <div className="relative glass rounded-2xl p-8 lg:p-10 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                  ></div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Floating Decoration */}
                
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          
        </div>
      </div>
    </section>
  )
}
