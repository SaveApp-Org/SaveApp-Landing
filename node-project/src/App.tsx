import { useState, useEffect } from "react";
import logo from "./assets/logo.png"; // Asegúrate de que la ruta sea correcta
// Importa los logos de los bancos (imágenes locales)
import banco1 from "./assets/banco1.png";
import banco2 from "./assets/banco2.png";
import banco3 from "./assets/banco3.png";
import banco4 from "./assets/banco4.png";
import banco5 from "./assets/banco5.png";
import banco6 from "./assets/banco6.png";
import pedidosya from "./assets/pedidosya.png";
import dia from "./assets/dia.jpg";
import jumbo from "./assets/jumbo.png";

import {
  Bell,
  Clock,
  Tags,
  Building2,
  ChevronDown,
  Menu,
  X,
  Search,
  CreditCard,
  Star,
  HelpCircle,
  Plus,
  Loader2
} from "lucide-react";

function App() {
  const appsScriptsUrl =
    "https://script.google.com/macros/s/AKfycbx-tk1p1iMK_49VUOPlzbOUKwSGPxikZsag9DcMwX8OAlyKA2w0-ycLBFae5bh8xhRB/exec";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [cardCount, setCardCount] = useState("");
  const [banks, setBanks] = useState("");
  const [location, setLocation] = useState("");
  const [wouldUseApp, setWouldUseApp] = useState("");
  const [features, setfeatures] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [animateClass, setAnimateClass] = useState("");

  useEffect(() => {
    if (submissionSuccess) {
      setAnimateClass("slide-in");
      const exitTimer = setTimeout(() => {
        setAnimateClass("slide-out");
      }, 2500);
      const hideTimer = setTimeout(() => {
        setSubmissionSuccess(false);
      }, 3000);
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [submissionSuccess]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = {
      email,
      cardCount,
      banks,
      location,
      wouldUseApp,
      features,
    };
    fetch(appsScriptsUrl, {
      redirect: "follow",
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        setSubmissionSuccess(true);
        setIsWaitlistOpen(false);
        setIsSubmitting(false);
      })
      .catch((err) => {
        console.error(err);
        setIsSubmitting(false);
      });
  };

  const benefits = [
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Ahorra tiempo",
      description: "Encuentra todas las ofertas bancarias en segundos",
    },
    {
      icon: <Bell className="w-12 h-12 text-primary" />,
      title: "Notificaciones personalizadas",
      description: "Recibe alertas de las ofertas que más te interesan",
    },
    {
      icon: <Tags className="w-12 h-12 text-primary" />,
      title: "Organización por categorías",
      description: "Navega fácilmente entre restaurantes, retail, viajes y más",
    },
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Múltiples bancos",
      description: "Compatible con los principales bancos del país",
    },
  ];

  const mockOffers = [
    {
      logo: pedidosya,
      title: "45% de reintegro en PedidosYA",
      bank: "Amex Patagonia",
      expires: "En 5 días",
    },
    {
      logo: dia,
      title: "25% de reintegro en tiendas DIA",
      bank: "Santander MODO",
      expires: "En 2 días",
    },
    {
      logo: jumbo,
      title: "30% OFF en Jumbo y Disco",
      bank: "Galicia MODO",
      expires: "Hoy",
    },
  ];

  const faqs = [
    {
      question: "¿Cómo funciona SaveApp?",
      answer:
        "SaveApp recopila automáticamente todas las ofertas y promociones de tus tarjetas bancarias y las presenta de forma organizada en una sola aplicación. Recibirás notificaciones personalizadas según tus preferencias.",
    },
    {
      question: "¿Es seguro conectar mis tarjetas?",
      answer:
        "Absolutamente. Utilizamos encriptación de nivel bancario y nunca almacenamos tus datos sensibles. Solo accedemos a la información de ofertas y promociones.",
    },
    {
      question: "¿Qué bancos están disponibles?",
      answer:
        "Actualmente trabajamos con los 10 principales bancos del país. Continuamente agregamos nuevas instituciones para ampliar nuestra cobertura.",
    },
  ];

  // Array con los logos de los bancos usando imágenes locales (sin nombres)
  const bankLogos = [banco1, banco2, banco3, banco4, banco5, banco6];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <style>{`
  @keyframes slideIn {
    from { transform: translateY(-100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-100%); opacity: 0; }
  }
  .slide-in {
    animation: slideIn 0.5s forwards;
  }
  .slide-out {
    animation: slideOut 0.5s forwards;
  }
`}</style>
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
                className="text-gray-400 hover:text-white">
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-8">
              <a href="#beneficios" className="text-gray-300 hover:text-white">
                Beneficios
              </a>
              <a href="#bancos" className="text-gray-300 hover:text-white">
                Bancos disponibles
              </a>
              <a href="#faq" className="text-gray-300 hover:text-white">
                FAQ
              </a>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#beneficios"
                className="block px-3 py-2 text-gray-300 hover:text-white">
                Beneficios
              </a>
              <a
                href="#bancos"
                className="block px-3 py-2 text-gray-300 hover:text-white">
                Bancos disponibles
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 text-gray-300 hover:text-white">
                FAQ
              </a>
              <button
                onClick={() => setIsWaitlistOpen(true)}
                className="w-full mt-2 bg-primary text-gray-900 px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                Unirse a la waitlist
              </button>
            </div>
          </div>
        )}
      </nav>

      {submissionSuccess && (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-primary text-black p-4 rounded shadow-lg z-50 ${animateClass}`}>
          ¡Gracias por unirte a la waitlist!
        </div>
      )}

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
                Descubre y aprovecha todas las promociones de tus tarjetas
                bancarias de forma fácil y organizada.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsWaitlistOpen(true)}
                  className="bg-primary text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center">
                  Unirse a la waitlist
                </button>
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
                      <div
                        key={index}
                        className="bg-gray-800/50 p-4 rounded-xl card-gradient">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <img
                              src={offer.logo}
                              alt=""
                              className="w-10 h-10 rounded-full"
                            />
                            <div>
                              <h3 className="font-medium">{offer.title}</h3>
                              <p className="text-sm text-gray-400">
                                {offer.bank}
                              </p>
                            </div>
                          </div>
                          <span className="text-xs text-primary">
                            {offer.expires}
                          </span>
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
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-primary/50 transition-colors">
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
              <div
                key={index}
                className="border border-gray-800 rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center bg-gray-900/50"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <span className="font-semibold text-left">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transform transition-transform ${openFaq === index ? "rotate-180" : ""
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
            Únete a miles de usuarios que ya están aprovechando al máximo sus
            tarjetas
          </p>
          <button
            onClick={() => setIsWaitlistOpen(true)}
            className="bg-primary text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors inline-flex items-center">
            Unirse a la waitlist
          </button>
        </div>
      </section>

      {/* Waitlist Modal */}
      {isWaitlistOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setIsWaitlistOpen(false)}></div>
          <div className="bg-gray-900 rounded-xl p-6 z-10 w-full max-w-md mx-4 max-h-screen overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Unirse a la waitlist</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-1" htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1" htmlFor="cardCount">
                  Cantidad de tarjetas (débito, crédito o billeteras virtuales) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="cardCount"
                  value={cardCount}
                  onChange={(e) => setCardCount(e.target.value)}
                  required
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1" htmlFor="banks">
                  Banco o bancos que utilizas (separalos con coma) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="banks"
                  value={banks}
                  onChange={(e) => setBanks(e.target.value)}
                  required
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">
                  ¿Permitirías a la app acceder a tu ubicación?<span className="text-red-500"> *</span>
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="location"
                      value="yes"
                      checked={location === "yes"}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                      className="mr-2"
                    />
                    Sí
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="location"
                      value="no"
                      checked={location === "no"}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-1">
                  ¿Abrirías una cueta en otro banco (de manera gratuita) para
                  acceder a un buen descuento?<span className="text-red-500"> *</span>
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="wouldUseApp"
                      value="yes"
                      checked={wouldUseApp === "yes"}
                      onChange={() => setWouldUseApp("yes")}
                      required
                      className="mr-2"
                    />
                    Sí
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="wouldUseApp"
                      value="no"
                      checked={wouldUseApp === "no"}
                      onChange={() => setWouldUseApp("no")}
                      required
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-1" htmlFor="features">
                  ¿Qué funcionalidades te gustaría que incluya la app?
                </label>
                <textarea
                  id="features"
                  value={features}
                  onChange={(e) => setfeatures(e.target.value)}
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsWaitlistOpen(false)}
                  className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-primary text-gray-900 rounded hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5" /> Enviando...
                    </>
                  ) : (
                    "Enviar"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900/50 py-12 border-t mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2025 SaveApp. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
