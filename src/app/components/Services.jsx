import Image from "next/image";

const services = [
  {
    title: "Diseños Personalizados",
    description:
      "El logo de tu empresa o el diseño que quieras en una amplia variedad de productos.",
    icon: "icon-[lucide--palette]",
  },
  {
    title: "Sublimación Premium",
    description:
      "Colores vibrantes y duraderos. Calidad garantizada en cada producto.",
    icon: "icon-[lucide--sparkles]",
  },
  {
    title: "Regalos Únicos",
    description:
      "Regalos empresariales o eventos especiales que dejarán una impresión duradera.",
    icon: "icon-[lucide--gift]",
  },
  {
    title: "Pedidos Corporativos",
    description:
      "Merchandising para tu empresa, emprendimiento o evento. Mayorista y minorista.",
    icon: "icon-[lucide--building-2]",
  },
];

const Services = () => {
  return (
    <section
      id="servicios"
      className="relative w-full py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 dot-grid opacity-40" />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-14 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Nuestros Servicios Exclusivos
          </h2>
          <p className="text-fg-secondary text-base md:text-lg max-w-2xl text-pretty">
            Trabajamos con sublimación de alta calidad para ofrecerte productos
            personalizados que destacan. Ya sea para tu empresa, negocio o
            evento, tenemos la solución perfecta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="dark-card group rounded-2xl p-6 hover:border-border-strong hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/50 text-sky-100 group-hover:scale-110 transition-transform duration-300">
                <i
                  className={`${service.icon} w-6 h-6`}
                  role="img"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-fg-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
