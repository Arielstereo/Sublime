const services = [
  {
    title: "Diseños Personalizados",
    description:
      "Creamos el diseño que soñás o sublimamos el tuyo. ¡Tu imaginación, nuestra impresión!",
    color: "bg-graffiti-pink",
  },
  {
    title: "Sublimación Premium",
    description:
      "Colores vibrantes y duraderos que no se destiñen. Calidad que se nota.",
    color: "bg-graffiti-cyan",
  },
  {
    title: "Regalos Únicos",
    description:
      "Sorprendé con algo especial. Perfectos para cumples, eventos y fechas importantes.",
    color: "bg-graffiti-orange",
  },
  {
    title: "Pedidos Corporativos",
    description:
      "Merchandising para tu empresa, emprendimiento o evento. Mayorista y minorista.",
    color: "bg-graffiti-purple",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-48 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-gradient-graffiti mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Todo lo que necesitás para personalizar tus productos con la mejor
            calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mx-32">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white border-2 border-cyan-400 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div> */}
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
