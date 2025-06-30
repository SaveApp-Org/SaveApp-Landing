"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { translations } from "@/lib/translations"
import SaveAppLogo from "./saveapp-logo"
import ModernButton from "./modern-button"

export default function ModernHeader() {
  const t = translations.es
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { label: t.benefits, id: "benefits" },
    { label: t.howItWorks, id: "how-it-works" },
    { label: "FAQ", id: "faq" },
  ]

  return (
    <div className="raycast-header-container">
      <div className={`raycast-header-glass ${isScrolled ? "scrolled" : ""}`}>
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <SaveAppLogo size="md" className="group cursor-pointer" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="raycast-nav-link">
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <ModernButton onClick={() => scrollToSection("waitlist")} size="sm" className="raycast-waitlist-button">
              Waitlist
            </ModernButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="raycast-mobile-menu-button">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="raycast-mobile-menu">
            <nav className="flex flex-col space-y-1 py-4">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => scrollToSection(item.id)} className="raycast-mobile-nav-link">
                  {item.label}
                </button>
              ))}
              <div className="px-4 py-2 border-t border-white/10 mt-2">
                <div className="mt-3">
                  <ModernButton
                    onClick={() => scrollToSection("waitlist")}
                    size="sm"
                    className="w-full raycast-waitlist-button"
                  >
                    Waitlist
                  </ModernButton>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}
