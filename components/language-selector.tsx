"use client"

import { ChevronDown } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

export default function LanguageSelector() {
  const { language, toggleLanguage } = useTheme()

  return (
    <button
      onClick={toggleLanguage}
      className="language-selector"
      aria-label={`Switch to ${language === "es" ? "English" : "Spanish"}`}
    >
      <span className="language-text">{language === "es" ? "ES" : "EN"}</span>
      <ChevronDown className="language-chevron" />
    </button>
  )
}
