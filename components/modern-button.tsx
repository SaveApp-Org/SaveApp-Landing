"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import SaveAppLogo from "./saveapp-logo"
import { useTheme } from "@/lib/theme-context"
import { translations } from "@/lib/translations"

interface ModernButtonProps {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  showLogo?: boolean
  className?: string
  type?: "button" | "submit"
}

export default function ModernButton({
  variant = "primary",
  size = "md",
  children,
  onClick,
  disabled = false,
  loading = false,
  showLogo = false,
  className = "",
  type = "button",
}: ModernButtonProps) {
  const { language } = useTheme()
  const t = translations[language]

  const baseClasses =
    "font-semibold transition-all duration-300 hover:scale-105 focus:scale-105 active:scale-95 border-0"

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-slate-700 hover:bg-slate-600 text-slate-200 border border-slate-600 hover:border-slate-500",
    ghost: "bg-transparent hover:bg-slate-800 text-slate-400 hover:text-slate-300",
  }

  const sizeClasses = {
    sm: "px-6 py-2 text-sm rounded-full h-10",
    md: "px-8 py-3 text-base rounded-full h-12",
    lg: "px-10 py-4 text-lg rounded-full h-14",
  }

  const disabledClasses = "opacity-50 cursor-not-allowed hover:scale-100 focus:scale-100"

  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        (disabled || loading) && disabledClasses,
        className,
      )}
    >
      <div className="flex items-center gap-2">
        {showLogo && <SaveAppLogo size="sm" showText={false} />}
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            {language === "es" ? "Cargando..." : "Loading..."}
          </>
        ) : (
          children
        )}
      </div>
    </Button>
  )
}
