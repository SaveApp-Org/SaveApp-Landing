"use client"

import { Sparkles } from "lucide-react"

interface SaveAppLogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  className?: string
}

export default function SaveAppLogo({ size = "md", showText = true, className = "" }: SaveAppLogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl lg:text-2xl",
    lg: "text-2xl lg:text-3xl",
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        <div
          className={`${sizeClasses[size]} bg-teal-500 dark:bg-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          <Sparkles className={`${size === "sm" ? "w-3 h-3" : size === "md" ? "w-4 h-4" : "w-6 h-6"} text-white`} />
        </div>
        <div
          className={`absolute -inset-1 bg-teal-500 dark:bg-teal-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
        ></div>
      </div>
      {showText && (
        <span className={`${textSizeClasses[size]} font-bold text-teal-500 dark:text-teal-400`}>SaveApp</span>
      )}
    </div>
  )
}
