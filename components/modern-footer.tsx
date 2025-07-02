"use client"

import { translations } from "@/lib/translations"
import { useRouter } from "next/navigation"

export default function ModernFooter() {
  const t = translations.es
  const router = useRouter()

  const handleNavClick = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname
      if (currentPath !== '/') {
        localStorage.setItem('scrollToSection', sectionId)
        router.push('/')
      } else {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <div className="raycast-footer-container">
      <div className="raycast-footer-glass">
        <div className="w-full">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Logo and About Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <img src="/saveapp-name-logo.png" alt="SaveApp" className="h-8 w-auto" />
              </div>
              <div className="space-y-3">
                <button 
                  onClick={() => handleNavClick('about')}
                  className="footer-link block text-left w-full"
                >
                  Sobre SaveApp
                </button>
                <button 
                  onClick={() => handleNavClick('benefits')}
                  className="footer-link block text-left w-full"
                >
                  Beneficios
                </button>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="footer-link block text-left w-full"
                >
                  Contacto
                </button>
              </div>
            </div>

            {/* Facilidades Column */}
            <div>
              <h3 className="footer-heading">Facilidades</h3>
              <div className="space-y-3">
                <a href="#" className="footer-link block">Promociones</a>
                <a href="#" className="footer-link block">Tarjetas</a>
                <a href="#" className="footer-link block">Billetera digital</a>
                <a href="#" className="footer-link block">Seguros</a>
              </div>
            </div>

            {/* Información Column */}
            <div>
              <h3 className="footer-heading">Información</h3>
              <div className="space-y-3">
                <a href="#" className="footer-link block">Términos y Condiciones</a>
                <a href="#" className="footer-link block">Política de Privacidad</a>
                <button 
                  onClick={() => handleNavClick('faq')}
                  className="footer-link block text-left w-full"
                >
                  Preguntas frecuentes
                </button>
                <a href="#" className="footer-link block">Ayuda</a>
              </div>
            </div>

            {/* Download Buttons Column */}
            <div>
              <h3 className="footer-heading">Descarga la app</h3>
              <div className="space-y-4">
                <a href="#" className="footer-download-button disabled">
                  <div className="flex items-center space-x-3">
                    <div className="store-icon">
                      <svg viewBox="0 0 24 24" className="w-6 h-6">
                        <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="store-subtitle">Disponible en</div>
                      <div className="store-title">App Store</div>
                    </div>
                  </div>
                  <div className="coming-soon-overlay">
                    <span>Próximamente</span>
                  </div>
                </a>

                <a href="#" className="footer-download-button disabled">
                  <div className="flex items-center space-x-3">
                    <div className="store-icon">
                      <svg viewBox="0 0 24 24" className="w-6 h-6">
                        <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="store-subtitle">Disponible en</div>
                      <div className="store-title">Google Play</div>
                    </div>
                  </div>
                  <div className="coming-soon-overlay">
                    <span>Próximamente</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="footer-copyright">
                © SaveApp, 2025. Todos los derechos reservados.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="footer-bottom-link">Términos y Condiciones</a>
                <a href="#" className="footer-bottom-link">Política de Privacidad</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 