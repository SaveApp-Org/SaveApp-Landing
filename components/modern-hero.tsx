"use client"

import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { translations } from "@/lib/translations"
import ModernButton from "./modern-button"

export default function ModernHero() {
  const { language } = useTheme()
  const t = translations[language]

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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  {language === "es" ? (
                    <>
                      Todos los <span className="gradient-text">descuentos</span>
                      <br />
                      en un solo lugar
                    </>
                  ) : (
                    <>
                      All <span className="gradient-text">discounts</span>
                      <br />
                      in one place
                    </>
                  )}
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
                  onClick={scrollToWaitlist}
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group border-0"
                >
                  {t.joinWaitlist}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </ModernButton>
              </div>
            </div>

            {/* Right Content - Transparent Placeholder */}
            <div className="relative">
              <div className="relative mx-auto max-w-sm">
                {/* Transparent Placeholder maintaining layout structure */}
                <div className="relative bg-transparent rounded-[2.5rem] p-2 h-[600px] w-[300px] mx-auto">
                  {/* Subtle border to indicate placeholder area */}
                  <div className="w-full h-full rounded-[2rem] border border-slate-700/30 bg-slate-900/10 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center space-y-4 opacity-30">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-2xl mx-auto flex items-center justify-center">
                        <Zap className="w-8 h-8 text-teal-400" />
                      </div>
                      <p className="text-slate-500 text-sm font-medium">App Preview</p>
                      <p className="text-slate-600 text-xs">Coming Soon</p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-400/10 to-blue-500/10 rounded-full blur-xl animate-float"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-xl animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
