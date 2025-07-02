"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion"
import React from "react"

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
]

export default function ModernFaq() {
  return (
    <section id="faq" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Preguntas <span className="gradient-text">frecuentes</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Resuelve tus dudas sobre SaveApp, seguridad y bancos disponibles.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={String(idx)} className="relative group rounded-xl border border-slate-700/40 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-slate-600/50">
                {/* Fondo animado en hover solo para este item */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>
                <AccordionTrigger className="text-lg font-semibold text-white px-6 py-4 relative z-10">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 px-6 pb-6 relative z-10">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
} 