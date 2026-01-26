import Image from "next/image";

const services = [
  {
    title: "Diseños Personalizados",
    description:
      "El logo de tu empresa o el diseño que quieras en una amplia variedad de productos.",
    color: "border-pink-500",
  },
  {
    title: "Sublimación Premium",
    description:
      "Colores vibrantes y duraderos. Calidad garantizada en cada producto.",
    color: "border-cyan-500",
  },
  {
    title: "Regalos Únicos",
    description:
      "Regalos empresariales o eventos especiales que dejarán una impresión duradera.",
    color: "border-yellow-500",
  },
  {
    title: "Pedidos Corporativos",
    description:
      "Merchandising para tu empresa, emprendimiento o evento. Mayorista y minorista.",
    color: "border-black",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-32 md:py-48 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 mx-16">
          <h2 className="text-4xl md:text-5xl mb-4">Nuestros Servicios</h2>
          <p className="text-slate-600 text-base md:text-lg">
            Realizamos productos personalizados para empresas, negocios y
            eventos especiales.
          </p>
          <hr />
          <p className="text-slate-600 text-base md:text-lg">
            Trabajamos con sublimación de alta calidad en distintos productos
            para satisfacer todas tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-16 md:mx-32">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-white border-2 ${service.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Image src="/logo.png" alt="Logo" width={96} height={96} />
              </div>
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
