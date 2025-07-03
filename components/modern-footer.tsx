"use client"

import { translations } from "@/lib/translations"
import { useRouter } from "next/navigation"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "./ui/dialog"

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
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="footer-link block text-left w-full">
                      Términos y Condiciones
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-slate-900 border-slate-700">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-white mb-6">
                        Términos y Condiciones de SaveApp
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 text-slate-300 leading-relaxed">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">1. Aceptación de los Términos</h3>
                        <p>
                          Al acceder y utilizar SaveApp, aceptas estar sujeto a estos términos y condiciones. 
                          Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestra aplicación.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">2. Descripción del Servicio</h3>
                        <p>
                          SaveApp es una aplicación móvil que centraliza y organiza ofertas y promociones 
                          de bancos y comercios. Recopilamos información de fuentes públicas y la presentamos 
                          de manera organizada para facilitar el acceso a descuentos y beneficios.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">3. Uso Aceptable</h3>
                        <p>
                          Te comprometes a usar SaveApp únicamente para fines legales y de acuerdo con 
                          estos términos. No debes usar la aplicación para:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                          <li>Actividades fraudulentas o ilegales</li>
                          <li>Interferir con el funcionamiento de la aplicación</li>
                          <li>Intentar acceder a datos no autorizados</li>
                          <li>Transmitir malware o contenido dañino</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">4. Limitación de Responsabilidad</h3>
                        <p>
                          SaveApp proporciona información de terceros y no garantiza la exactitud, 
                          completitud o actualidad de las ofertas mostradas. No somos responsables por:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                          <li>Cambios en ofertas por parte de bancos o comercios</li>
                          <li>Problemas con transacciones realizadas por el usuario</li>
                          <li>Pérdidas financieras derivadas del uso de la información</li>
                          <li>Interrupciones del servicio</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">5. Propiedad Intelectual</h3>
                        <p>
                          SaveApp y todo su contenido, incluyendo pero no limitado a textos, gráficos, 
                          logos y software, son propiedad de SaveApp o sus licenciantes y están protegidos 
                          por leyes de propiedad intelectual.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">6. Modificaciones</h3>
                        <p>
                          Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                          Los cambios entrarán en vigor inmediatamente después de su publicación. 
                          El uso continuado de la aplicación constituye aceptación de los nuevos términos.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">7. Terminación</h3>
                        <p>
                          Podemos suspender o terminar tu acceso a SaveApp en cualquier momento, 
                          con o sin causa, sin previo aviso. También puedes dejar de usar la aplicación 
                          en cualquier momento.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">8. Ley Aplicable</h3>
                        <p>
                          Estos términos se rigen por las leyes de Argentina. Cualquier disputa será 
                          resuelta en los tribunales competentes de la Ciudad Autónoma de Buenos Aires.
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-700">
                        <p className="text-sm text-slate-400">
                          <strong>Última actualización:</strong> Enero 2025
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <button className="footer-link block text-left w-full">
                      Política de Privacidad
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-slate-900 border-slate-700">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-white mb-6">
                        Política de Privacidad de SaveApp
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 text-slate-300 leading-relaxed">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">1. Información que Recopilamos</h3>
                        <p className="mb-3">
                          Recopilamos la siguiente información para proporcionar nuestros servicios:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Información de registro:</strong> Email, nombre y preferencias de bancos</li>
                          <li><strong>Datos de uso:</strong> Cómo interactúas con la aplicación</li>
                          <li><strong>Información del dispositivo:</strong> Tipo de dispositivo y sistema operativo</li>
                          <li><strong>Datos de ubicación:</strong> Solo si lo autorizas para ofertas geolocalizadas</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">2. Cómo Usamos tu Información</h3>
                        <p className="mb-3">
                          Utilizamos tu información para:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Proporcionar y mejorar nuestros servicios</li>
                          <li>Personalizar las ofertas que te mostramos</li>
                          <li>Enviar notificaciones relevantes</li>
                          <li>Analizar el uso de la aplicación</li>
                          <li>Cumplir con obligaciones legales</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">3. Compartir Información</h3>
                        <p>
                          <strong>No vendemos, alquilamos ni compartimos tu información personal</strong> con terceros, 
                          excepto en las siguientes circunstancias:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                          <li>Con tu consentimiento explícito</li>
                          <li>Para cumplir con obligaciones legales</li>
                          <li>Con proveedores de servicios que nos ayudan a operar la aplicación</li>
                          <li>En caso de fusión o adquisición empresarial</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">4. Seguridad de Datos</h3>
                        <p>
                          Implementamos medidas de seguridad técnicas y organizativas para proteger tu información:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                          <li>Encriptación de datos en tránsito y en reposo</li>
                          <li>Acceso restringido a información personal</li>
                          <li>Monitoreo regular de seguridad</li>
                          <li>Actualizaciones regulares de seguridad</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">5. Tus Derechos</h3>
                        <p>
                          Tienes derecho a:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                          <li>Acceder a tu información personal</li>
                          <li>Corregir datos inexactos</li>
                          <li>Solicitar la eliminación de tus datos</li>
                          <li>Oponerte al procesamiento de datos</li>
                          <li>Portabilidad de datos</li>
                          <li>Retirar consentimiento en cualquier momento</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">6. Cookies y Tecnologías Similares</h3>
                        <p>
                          Utilizamos cookies y tecnologías similares para mejorar tu experiencia, 
                          analizar el uso de la aplicación y personalizar contenido. Puedes controlar 
                          el uso de cookies a través de la configuración de tu dispositivo.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">7. Retención de Datos</h3>
                        <p>
                          Conservamos tu información personal solo durante el tiempo necesario para 
                          cumplir con los propósitos descritos en esta política, o según lo requiera la ley. 
                          Cuando ya no necesitemos tu información, la eliminaremos de forma segura.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">8. Menores de Edad</h3>
                        <p>
                          SaveApp no está dirigida a menores de 18 años. No recopilamos intencionalmente 
                          información personal de menores. Si eres padre o tutor y crees que tu hijo 
                          nos ha proporcionado información, contáctanos inmediatamente.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">9. Cambios en esta Política</h3>
                        <p>
                          Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos 
                          sobre cambios significativos por email o a través de la aplicación. 
                          El uso continuado de SaveApp después de los cambios constituye aceptación 
                          de la nueva política.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">10. Contacto</h3>
                        <p>
                          Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos 
                          tu información, contáctanos en:
                        </p>
                        <p className="mt-2">
                          <strong>Email:</strong> privacidad@saveapp.com<br />
                          <strong>Dirección:</strong> SaveApp, Buenos Aires, Argentina
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-700">
                        <p className="text-sm text-slate-400">
                          <strong>Última actualización:</strong> Enero 2025
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

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
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="footer-bottom-link">
                      Términos y Condiciones
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-slate-900 border-slate-700">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-white mb-6">
                        Términos y Condiciones de SaveApp
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 text-slate-300 leading-relaxed">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">1. Aceptación de los Términos</h3>
                        <p>
                          Al acceder y utilizar SaveApp, aceptas estar sujeto a estos términos y condiciones. 
                          Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestra aplicación.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">2. Descripción del Servicio</h3>
                        <p>
                          SaveApp es una aplicación móvil que centraliza y organiza ofertas y promociones 
                          de bancos y comercios. Recopilamos información de fuentes públicas y la presentamos 
                          de manera organizada para facilitar el acceso a descuentos y beneficios.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">3. Uso Aceptable</h3>
                        <p>
                          Te comprometes a usar SaveApp únicamente para fines legales y de acuerdo con 
                          estos términos. No debes usar la aplicación para:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                          <li>Actividades fraudulentas o ilegales</li>
                          <li>Interferir con el funcionamiento de la aplicación</li>
                          <li>Intentar acceder a datos no autorizados</li>
                          <li>Transmitir malware o contenido dañino</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">4. Limitación de Responsabilidad</h3>
                        <p>
                          SaveApp proporciona información de terceros y no garantiza la exactitud, 
                          completitud o actualidad de las ofertas mostradas. No somos responsables por:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                          <li>Cambios en ofertas por parte de bancos o comercios</li>
                          <li>Problemas con transacciones realizadas por el usuario</li>
                          <li>Pérdidas financieras derivadas del uso de la información</li>
                          <li>Interrupciones del servicio</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">5. Propiedad Intelectual</h3>
                        <p>
                          SaveApp y todo su contenido, incluyendo pero no limitado a textos, gráficos, 
                          logos y software, son propiedad de SaveApp o sus licenciantes y están protegidos 
                          por leyes de propiedad intelectual.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">6. Modificaciones</h3>
                        <p>
                          Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                          Los cambios entrarán en vigor inmediatamente después de su publicación. 
                          El uso continuado de la aplicación constituye aceptación de los nuevos términos.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">7. Terminación</h3>
                        <p>
                          Podemos suspender o terminar tu acceso a SaveApp en cualquier momento, 
                          con o sin causa, sin previo aviso. También puedes dejar de usar la aplicación 
                          en cualquier momento.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">8. Ley Aplicable</h3>
                        <p>
                          Estos términos se rigen por las leyes de Argentina. Cualquier disputa será 
                          resuelta en los tribunales competentes de la Ciudad Autónoma de Buenos Aires.
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-700">
                        <p className="text-sm text-slate-400">
                          <strong>Última actualización:</strong> Enero 2025
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <button className="footer-bottom-link">
                      Política de Privacidad
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-slate-900 border-slate-700">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-white mb-6">
                        Política de Privacidad de SaveApp
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 text-slate-300 leading-relaxed">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">1. Información que Recopilamos</h3>
                        <p className="mb-3">
                          Recopilamos la siguiente información para proporcionar nuestros servicios:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Información de registro:</strong> Email, nombre y preferencias de bancos</li>
                          <li><strong>Datos de uso:</strong> Cómo interactúas con la aplicación</li>
                          <li><strong>Información del dispositivo:</strong> Tipo de dispositivo y sistema operativo</li>
                          <li><strong>Datos de ubicación:</strong> Solo si lo autorizas para ofertas geolocalizadas</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">2. Cómo Usamos tu Información</h3>
                        <p className="mb-3">
                          Utilizamos tu información para:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Proporcionar y mejorar nuestros servicios</li>
                          <li>Personalizar las ofertas que te mostramos</li>
                          <li>Enviar notificaciones relevantes</li>
                          <li>Analizar el uso de la aplicación</li>
                          <li>Cumplir con obligaciones legales</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">3. Compartir Información</h3>
                        <p>
                          <strong>No vendemos, alquilamos ni compartimos tu información personal</strong> con terceros, 
                          excepto en las siguientes circunstancias:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                          <li>Con tu consentimiento explícito</li>
                          <li>Para cumplir con obligaciones legales</li>
                          <li>Con proveedores de servicios que nos ayudan a operar la aplicación</li>
                          <li>En caso de fusión o adquisición empresarial</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">4. Seguridad de Datos</h3>
                        <p>
                          Implementamos medidas de seguridad técnicas y organizativas para proteger tu información:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                          <li>Encriptación de datos en tránsito y en reposo</li>
                          <li>Acceso restringido a información personal</li>
                          <li>Monitoreo regular de seguridad</li>
                          <li>Actualizaciones regulares de seguridad</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">5. Tus Derechos</h3>
                        <p>
                          Tienes derecho a:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                          <li>Acceder a tu información personal</li>
                          <li>Corregir datos inexactos</li>
                          <li>Solicitar la eliminación de tus datos</li>
                          <li>Oponerte al procesamiento de datos</li>
                          <li>Portabilidad de datos</li>
                          <li>Retirar consentimiento en cualquier momento</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">6. Cookies y Tecnologías Similares</h3>
                        <p>
                          Utilizamos cookies y tecnologías similares para mejorar tu experiencia, 
                          analizar el uso de la aplicación y personalizar contenido. Puedes controlar 
                          el uso de cookies a través de la configuración de tu dispositivo.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">7. Retención de Datos</h3>
                        <p>
                          Conservamos tu información personal solo durante el tiempo necesario para 
                          cumplir con los propósitos descritos en esta política, o según lo requiera la ley. 
                          Cuando ya no necesitemos tu información, la eliminaremos de forma segura.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">8. Menores de Edad</h3>
                        <p>
                          SaveApp no está dirigida a menores de 18 años. No recopilamos intencionalmente 
                          información personal de menores. Si eres padre o tutor y crees que tu hijo 
                          nos ha proporcionado información, contáctanos inmediatamente.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">9. Cambios en esta Política</h3>
                        <p>
                          Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos 
                          sobre cambios significativos por email o a través de la aplicación. 
                          El uso continuado de SaveApp después de los cambios constituye aceptación 
                          de la nueva política.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">10. Contacto</h3>
                        <p>
                          Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos 
                          tu información, contáctanos en:
                        </p>
                        <p className="mt-2">
                          <strong>Email:</strong> privacidad@saveapp.com<br />
                          <strong>Dirección:</strong> SaveApp, Buenos Aires, Argentina
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-700">
                        <p className="text-sm text-slate-400">
                          <strong>Última actualización:</strong> Enero 2025
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 