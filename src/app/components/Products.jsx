"use client";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: "empresas",
    label: "Merchandising corporativo",
    image: "/Context.png",
  },
  {
    id: "regalos",
    label: "Regalos Personalizados",
    image: "/gorra.png",
  },
  {
    id: "eventos",
    label: "Eventos especiales",
    image: "/taza.png",
  },
];

const Products = () => {
  return (
    <section id="productos" className="py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 mx-16">
          <h2 className="text-4xl md:text-5xl mb-4">Nuestros Productos</h2>
          <p className="text-slate-600 text-base md:text-lg mx-auto">
            Explorá por categoría y encontrá el producto perfecto según tu
            necesidad.
          </p>
          <hr />
          <p className="text-slate-600 text-base md:text-lg mx-auto">
            Solicitá tu diseño o presupuesto sin compromiso.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-16">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/products/${category.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square bg-secondary/30">
                <Image
                  width={300}
                  height={300}
                  src={category.image}
                  alt={category.label}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{category.label}</h3>
                <span className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                  Ver categoría →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
