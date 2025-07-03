"use client"

import { Building2, Plus } from "lucide-react"

const banks = [
  { name: "Ualá", logo: "/bank-logos/uala.jpeg", url: "https://www.uala.com.ar" },
  { name: "Brubank", logo: "/bank-logos/brubank.jpeg", url: "https://www.brubank.com" },
  { name: "Naranja X", logo: "/bank-logos/naranjax.jpeg", url: "https://www.naranjax.com" },
  { name: "Macro", logo: "/bank-logos/macro.jpeg", url: "https://www.macro.com.ar" },
  { name: "Santander", logo: "/bank-logos/santander.png", url: "https://www.santander.com.ar" },
  { name: "Galicia", logo: "/bank-logos/galicia.png", url: "https://www.galicia.ar" },
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {banks.map((bank, index) => (
              <a 
                key={index} 
                href={bank.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass rounded-2xl p-6 lg:p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl text-center cursor-pointer">
                  {/* Bank Logo + Blur */}
                  <div className="relative mb-4 flex justify-center">
                    <img
                      src={bank.logo}
                      alt={bank.name + ' logo'}
                      className="w-16 h-16 lg:w-20 lg:h-20 object-contain rounded-2xl bg-white p-2 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10"
                    />
                    <div
                      className="absolute inset-0 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 z-0 bg-gradient-to-br from-teal-400 via-blue-400 to-purple-400"
                    ></div>
                  </div>
                  {/* Bank Name */}
                  <h3 className="text-white font-semibold text-lg group-hover:text-teal-300 transition-colors duration-300">
                    {bank.name}
                  </h3>
                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </a>
            ))}
          </div>

          {/* More Banks Coming */}
          <div className="text-center">
            <div className="group relative inline-flex items-center glass rounded-2xl px-8 py-4 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg p-2 mr-4">
                <Plus className="w-6 h-6 text-slate-400 group-hover:text-teal-300 transition-colors duration-300" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold group-hover:text-teal-300 transition-colors duration-300">Y muchos más</p>
                <p className="text-slate-400 text-sm">Agregamos nuevos bancos constantemente</p>
              </div>
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
