"use client"

import ModernWaitlist from "@/components/modern-waitlist"
import ModernHeader from "@/components/modern-header"
import ModernFooter from "@/components/modern-footer"

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ModernHeader />
      <ModernWaitlist />
      <ModernFooter />
    </div>
  )
} 