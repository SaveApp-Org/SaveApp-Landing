"use client"

import ModernHeader from "@/components/modern-header"
import ModernHero from "@/components/modern-hero"
import ModernBenefits from "@/components/modern-benefits"
import ModernHowItWorks from "@/components/modern-how-it-works"
import ModernBanks from "@/components/modern-banks"
import ModernWaitlist from "@/components/modern-waitlist"

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ModernHeader />
      <main>
        <ModernHero />
        <ModernBenefits />
        <ModernHowItWorks />
        <ModernBanks />
        <ModernWaitlist />
      </main>
    </div>
  )
}
