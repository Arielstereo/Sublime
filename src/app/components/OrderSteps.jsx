"use client";
import React from "react";

const steps = [
  {
    id: 1,
    title: "Elegí tus productos",
    desc: "Navegá por la web y seleccioná tus productos.",
    color: "border-pink-500",
  },
  {
    id: 2,
    title: "Pedí presupuesto o reservá por WhatsApp",
    desc: "Enviá cantidad y detalles para recibir un presupuesto rápido.",
    color: "border-cyan-500",
  },
  {
    id: 3,
    title: "Forma de pago",
    desc: "Transferencia bancaria o efectivo al retirar/entregar. Según el pedido te podríamos solicitar una seña del 50%.",
    color: "border-yellow-500",
  },
  {
    id: 4,
    title: "Enviá tu diseño o solicitá uno personalizado",
    desc: "Adjuntá tu archivo o consultanos para diseñarlo según tu necesidad.",
    color: "border-black",
  },
  {
    id: 5,
    title: "¡Listo!",
    desc: "Recibí o retirá tu pedido.El tiempo de producción varía según el tipo de producto y cantidad.",
    color: "border-green-500",
  },
];

const OrderSteps = () => {
  return (
    <section id="pasos" className="py-16 md:py-48 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 mx-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como realizar tu pedido
          </h2>
          <p className="text-slate-600 text-base md:text-lg mx-auto max-w-2xl text-left md:text-center">
            Seguí estos simples pasos para completar tu pedido.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex flex-col items-start bg-slate-50 border-2 ${step.color} rounded-2xl p-6`}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-600 text-white font-bold mb-4">
                {step.id}
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderSteps;
