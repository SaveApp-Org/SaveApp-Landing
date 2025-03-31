import React from 'react';
import logo from './assets/logo.png'; // Asegúrate de que la ruta sea correcta
// Importa los logos de los bancos (imágenes locales)
import banco1 from './assets/banco1.png';
import banco2 from './assets/banco2.png';
import banco3 from './assets/banco3.png';
import banco4 from './assets/banco4.png';
import banco5 from './assets/banco5.png';
import banco6 from './assets/banco6.png';
import pedidosya from './assets/pedidosya.png';
import dia from './assets/dia.jpg';
import jumbo from './assets/jumbo.png';

import {
  Bell,
  DollarSign,
  Clock,
  Tags,
  Building2,
  ChevronDown,
  Download,
  Menu,
  X,
  Search,
  CreditCard,
  Star,
  HelpCircle,
  Plus
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const benefits = [
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Ahorra tiempo",
      description: "Encuentra todas las ofertas bancarias en segundos"
    },
    {
      icon: <Bell className="w-12 h-12 text-primary" />,
      title: "Notificaciones personalizadas",
      description: "Recibe alertas de las ofertas que más te interesan"
    },
    {
      icon: <Tags className="w-12 h-12 text-primary" />,
      title: "Organización por categorías",
      description: "Navega fácilmente entre restaurantes, retail, viajes y más"
    },
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Múltiples bancos",
      description: "Compatible con los principales bancos del país"
    }
  ];

  const mockOffers = [
    {
      logo: pedidosya,
      title: "45% de reintegro en PedidosYA",
      bank: "Amex Patagonia",
      expires: "En 5 días"
    },
    {
      logo: dia,
      title: "25% de reintegro en tiendas DIA",
      bank: "Santander MODO",
      expires: "En 2 días"
    },
    {
      logo: jumbo,
      title: "30% OFF en Jumbo y Disco",
      bank: "Galicia MODO",
      expires: "Hoy"
    }
  ];

  const faqs = [
    {
      question: "¿Cómo funciona SaveApp?",
      answer: "SaveApp recopila automáticamente todas las ofertas y promociones de tus tarjetas bancarias y las presenta de forma organizada en una sola aplicación. Recibirás notificaciones personalizadas según tus preferencias."
    },
    {
      question: "¿Es seguro conectar mis tarjetas?",
      answer: "Absolutamente. Utilizamos encriptación de nivel bancario y nunca almacenamos tus datos sensibles. Solo accedemos a la información de ofertas y promociones."
    },
    {
      question: "¿Qué bancos están disponibles?",
      answer: "Actualmente trabajamos con los 10 principales bancos del país. Continuamente agregamos nuevas instituciones para ampliar nuestra cobertura."
    }
  ];

  // Array con los logos de los bancos usando imágenes locales (sin nombres)
  const bankLogos = [banco1, banco2, banco3, banco4, banco5, banco6];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="bg-gray-950/50 backdrop-blur-lg fixed w-full z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src={logo} alt="Logo SaveApp" className="h-8 w-auto" />
            </div>
            
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-8">
              <a href="#beneficios" className="text-gray-300 hover:text-white">Beneficios</a>
              <a href="#bancos" className="text-gray-300 hover:text-white">Bancos disponibles</a>
              <a href="#faq" className="text-gray-300 hover:text-white">FAQ</a>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#beneficios" className="block px-3 py-2 text-gray-300 hover:text-white">Beneficios</a>
              <a href="#bancos" className="block px-3 py-2 text-gray-300 hover:text-white">Bancos disponibles</a>
              <a href="#faq" className="block px-3 py-2 text-gray-300 hover:text-white">FAQ</a>
              <a
                href="https://forms.gle/6kvgUmG5HpzsjoJt7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2 bg-primary text-gray-900 px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Unirse a la waitlist
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Todos los
                <br />
                <span className="text-primary">descuentos</span> en
                <br />
                un solo lugar
              </h1>
              <p className="mt-6 text-xl text-gray-400">
                Descubre y aprovecha todas las promociones de tus tarjetas bancarias de forma fácil y organizada.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://forms.gle/6kvgUmG5HpzsjoJt7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center"
                >
                  Unirse a la waitlist
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-3xl -z-10"></div>
              <div className="relative animate-float">
                <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl border border-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-semibold">SaveApp</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Search className="h-5 w-5 text-gray-400" />
                      <Plus className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    {mockOffers.map((offer, index) => (
                      <div key={index} className="bg-gray-800/50 p-4 rounded-xl card-gradient">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <img src={offer.logo} alt="" className="w-10 h-10 rounded-full" />
                            <div>
                              <h3 className="font-medium">{offer.title}</h3>
                              <p className="text-sm text-gray-400">{offer.bank}</p>
                            </div>
                          </div>
                          <span className="text-xs text-primary">{offer.expires}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-around mt-6 pt-4 border-t border-gray-800">
                    <Star className="h-6 w-6 text-primary" />
                    <Search className="h-6 w-6 text-gray-500" />
                    <CreditCard className="h-6 w-6 text-gray-500" />
                    <HelpCircle className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Beneficios que te encantarán
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-primary/50 transition-colors">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Bancos Disponibles: Logos en una sola fila */}
      <section id="bancos" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Bancos disponibles</h2>
          <div className="flex flex-nowrap justify-center items-center gap-8 overflow-x-auto">
            {bankLogos.map((logoImg, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={logoImg}
                  alt={`Banco ${index + 1}`}
                  className="w-24 h-24 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-800 rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center bg-gray-900/50"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-left">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-900/30">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Comienza a ahorrar hoy mismo
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Únete a miles de usuarios que ya están aprovechando al máximo sus tarjetas
          </p>
          <a
            href="https://forms.gle/6kvgUmG5HpzsjoJt7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors inline-flex items-center"
          >
            Unirse a la waitlist
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 py-12 border-t mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 SaveApp. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;