"use client"

import { Building2, Plus } from "lucide-react"

const banks = [
  { name: "Santander", color: "bg-red-500", initial: "S" },
  { name: "Galicia", color: "bg-orange-500", initial: "G" },
  { name: "BBVA", color: "bg-blue-600", initial: "B" },
  { name: "Macro", color: "bg-yellow-500", initial: "M" },
  { name: "Nación", color: "bg-blue-800", initial: "N" },
  { name: "Uala", color: "bg-purple-500", initial: "U" },
  { name: "Naranja X", color: "bg-orange-600", initial: "X" },
  { name: "Mercado Pago", color: "bg-blue-400", initial: "MP" },
]

export default function ModernBanks() {
  return (
    <section id="banks" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-24">
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Conecta con tus <span className="gradient-text">bancos favoritos</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              SaveApp es compatible con los principales bancos de Argentina, centralizando todas tus ofertas en una sola
              aplicación.
            </p>
          </div>

          {/* Banks Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {banks.map((bank, index) => (
              <div key={index} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="glass rounded-2xl p-6 lg:p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl text-center">
                  {/* Bank Icon */}
                  <div className="relative mb-4">
                    <div
                      className={`w-16 h-16 lg:w-20 lg:h-20 ${bank.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg lg:text-xl mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {bank.initial}
                    </div>
                    <div
                      className={`absolute inset-0 ${bank.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Bank Name */}
                  <h3 className="text-white font-semibold text-lg group-hover:text-teal-300 transition-colors duration-300">
                    {bank.name}
                  </h3>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* More Banks Coming */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 glass rounded-2xl px-8 py-4 border border-slate-700/50">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center">
                <Plus className="w-6 h-6 text-slate-400" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Y muchos más</p>
                <p className="text-slate-400 text-sm">Agregamos nuevos bancos constantemente</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 lg:mt-24">
            {[
              { number: "10+", label: "Bancos integrados", color: "text-teal-400" },
              { number: "500+", label: "Ofertas activas", color: "text-blue-400" },
              { number: "24/7", label: "Monitoreo continuo", color: "text-purple-400" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
