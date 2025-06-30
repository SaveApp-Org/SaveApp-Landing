"use client"

import ModernHeader from "@/components/modern-header"
import ModernHero from "@/components/modern-hero"
import ModernBenefits from "@/components/modern-benefits"
import ModernHowItWorks from "@/components/modern-how-it-works"
import ModernBanks from "@/components/modern-banks"
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
      <main>
        <ModernHero />
        <ModernBenefits />
        <ModernHowItWorks />
        <ModernBanks />
      </main>
    </div>
  )
}
