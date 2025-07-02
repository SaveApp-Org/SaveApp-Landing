"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { translations } from "@/lib/translations"
import ModernButton from "./modern-button"
import { useRouter, usePathname } from "next/navigation"

export default function ModernHeader() {
  const t = translations.es
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter();
  const pathname = usePathname();

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

  const handleNavClick = (sectionId: string) => {
    if (pathname !== "/") {
      // Guardar la sección objetivo y navegar a home
      if (typeof window !== "undefined") {
        localStorage.setItem("scrollToSection", sectionId);
      }
      router.push("/");
      setIsMenuOpen(false);
    } else {
      scrollToSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: t.benefits, id: "benefits" },
    { label: t.howItWorks, id: "how-it-works" },
    { label: t.banks, id: "banks" },
    { label: "FAQ", id: "faq" },
  ]

  return (
    <div className="raycast-header-container">
      <div className={`raycast-header-glass ${isScrolled ? "scrolled" : ""}`}>
        <div className="flex items-center justify-between w-full relative">
          {/* Logo */}
          <div className="flex items-center z-10 cursor-pointer" onClick={() => router.push("/")}>
            <img src="/saveapp-name-logo.png" alt="SaveApp Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 mx-auto">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => handleNavClick(item.id)} className="raycast-nav-link">
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center z-10">
            <ModernButton 
              onClick={() => router.push("/waitlist")}
              size="sm"
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 h-10"
            >
              {t.joinWaitlistButton}
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
                <button key={item.id} onClick={() => handleNavClick(item.id)} className="raycast-mobile-nav-link">
                  {item.label}
                </button>
              ))}
              <div className="px-4 py-2 border-t border-white/10 mt-2">
                <div className="mt-3">
                  <ModernButton
                    onClick={() => router.push("/waitlist")}
                    size="sm"
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 h-10"
                  >
                    {t.joinWaitlistButton}
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
