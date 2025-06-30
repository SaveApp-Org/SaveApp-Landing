"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Language = "en" | "es"

interface ThemeContextType {
  language: Language
  toggleLanguage: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem("saveapp-language") as Language
    if (savedLanguage) setLanguage(savedLanguage)
  }, [])

  useEffect(() => {
    // Save language preference
    localStorage.setItem("saveapp-language", language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"))
  }

  return <ThemeContext.Provider value={{ language, toggleLanguage }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
