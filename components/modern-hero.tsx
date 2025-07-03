"use client"

import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { translations } from "@/lib/translations"
import ModernButton from "./modern-button"
import { useRouter } from "next/navigation"

export default function ModernHero() {
  const t = translations.es
  const router = useRouter();

  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8 z-10">
              {/* Badge */}
              

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  {<>Todos los <span className="gradient-text">descuentos</span><br />en un solo lugar</>}
                </h1>
                <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-2xl">{t.heroSubtitle}</p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 py-4">
                {[
                  { icon: TrendingUp, label: t.upToSavings, color: "text-green-400" },
                  { icon: Shield, label: t.banksCount, color: "text-blue-400" },
                  { icon: Zap, label: t.alerts247, color: "text-teal-400" },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    <span className="text-slate-300 font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <ModernButton
                  onClick={() => router.push("/waitlist")}
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 h-14"
                >
                  {t.joinWaitlistButton}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </ModernButton>
              </div>
            </div>
            {/* Right Content - App Mockup (espacio vacío para mantener el grid) */}
            <div className="hidden lg:block"></div>
            {/* Imagen mockup sobresaliendo del grid en desktop */}
            <img 
              src="/mockup.png" 
              alt="App Mockup" 
              className="absolute right-12 top-1/2 translate-x-1/4 -translate-y-1/2 max-w-[70vw] max-h-[90vh] object-contain z-0 pointer-events-none select-none hidden lg:block"
              style={{minWidth: '600px'}}
            />
            {/* Disclaimer debajo de la imagen en desktop */}
            <p className="hidden lg:block absolute left-[77%] top-[calc(50%+40vh)] -translate-x-1/2 text-xs text-slate-500 text-center w-[300px] max-w-[70vw] z-10 pointer-events-none select-none">
              Imagen a modo representativo. Las ofertas que se muestran pueden no ser reales.
            </p>
            {/* Imagen mockup debajo del contenido en mobile */}
            <img 
              src="/mockup.png" 
              alt="App Mockup" 
              className="block mx-auto mt-8 w-full object-contain lg:hidden"
            />
            {/* Disclaimer debajo de la imagen en mobile */}
            <p className="block lg:hidden text-xs text-center text-slate-500 mt-1 mx-auto w-full max-w-md">
              Imagen a modo representativo. Las ofertas que se muestran pueden no ser reales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
