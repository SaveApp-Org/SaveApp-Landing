"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun, Globe } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

export default function ThemeToggle() {
  const { theme, language, toggleTheme, toggleLanguage } = useTheme()

  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm" onClick={toggleTheme} className="w-9 h-9 p-0">
        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
      <Button variant="ghost" size="sm" onClick={toggleLanguage} className="w-9 h-9 p-0">
        <Globe className="h-4 w-4" />
        <span className="ml-1 text-xs font-medium">{language.toUpperCase()}</span>
      </Button>
    </div>
  )
}
