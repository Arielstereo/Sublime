"use client";
import React from "react";

const steps = [
  {
    id: 1,
    title: "Elegí tus productos",
    desc: "Navegá por la web y seleccioná tus productos.",
  },
  {
    id: 2,
    title: "Pedí presupuesto o reservá por WhatsApp",
    desc: "Enviá cantidad y detalles para recibir un presupuesto rápido.",
  },
  {
    id: 3,
    title: "Forma de pago",
    desc: "Transferencia bancaria o efectivo al retirar/entregar. Según el pedido te podríamos solicitar una seña del 50%.",
  },
  {
    id: 4,
    title: "Enviá tu diseño o solicitá uno personalizado",
    desc: "Adjuntá tu archivo o consultanos para diseñarlo según tu necesidad.",
  },
  {
    id: 5,
    title: "¡Listo!",
    desc: "Recibí o retirá tu pedido. El tiempo de producción varía según el tipo de producto y cantidad.",
  },
];

const OrderSteps = () => {
  return (
    <section id="pasos" className="relative w-full bg-ink-900 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 dot-grid opacity-40" />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-14 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Cómo realizar tu pedido
          </h2>
          <p className="text-fg-secondary text-base md:text-lg max-w-2xl text-pretty">
            Seguí estos simples pasos para completar tu pedido.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((step) => (
            <div
              key={step.id}
              className="dark-card flex flex-col items-start rounded-2xl p-6 hover:border-border-strong transition-colors duration-300"
            >
              <div className="mb-4 flex items-center justify-center h-11 w-11 rounded-full bg-accent text-white font-bold">
                {step.id}
              </div>
              <h3 className="font-semibold text-base mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-fg-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderSteps;
