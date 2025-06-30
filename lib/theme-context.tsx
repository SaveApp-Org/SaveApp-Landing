"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

// Solo contexto de tema

type Theme = "dark" | "light"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    // Load saved theme preference
    const savedTheme = localStorage.getItem("saveapp-theme") as Theme
    if (savedTheme) setTheme(savedTheme)
  }, [])

  useEffect(() => {
    // Save theme preference
    localStorage.setItem("saveapp-theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
