"use client"

import ModernHeader from "@/components/modern-header"
import ModernHero from "@/components/modern-hero"
import ModernBenefits from "@/components/modern-benefits"
import ModernHowItWorks from "@/components/modern-how-it-works"
import ModernBanks from "@/components/modern-banks"
import ModernFaq from "@/components/modern-faq"
import ModernFooter from "@/components/modern-footer"
import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const section = localStorage.getItem("scrollToSection")
      if (section) {
        const el = document.getElementById(section)
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" })
          }, 300)
        }
        localStorage.removeItem("scrollToSection")
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-950">
      <ModernHeader />
      <main className="pt-20 md:pt-24">
        <ModernHero />
        <ModernBenefits />
        <ModernHowItWorks />
        <ModernBanks />
        <ModernFaq />
      </main>
      <ModernFooter />
    </div>
  )
}
