"use client";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: "empresas",
    label: "Merchandising corporativo",
    image: "/remera-intel.jpeg",
    color: "border-cyan-500",
  },
  {
    id: "regalos",
    label: "Regalos Personalizados",
    image: "/magic.png",
    color: "border-pink-500",
  },
  {
    id: "eventos",
    label: "Eventos especiales",
    image: "/taza.png",
    color: "border-yellow-500",
  },
];

const Products = () => {
  return (
    <section id="productos" className="py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 mx-4">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-3/4 mx-auto">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.id}`}
              className={`group bg-white border-2 ${category.color} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in`}
            >
              <div className="relative overflow-hidden aspect-square">
                <Image
                  width={300}
                  height={300}
                  src={category.image}
                  alt={category.label}
                  className="w-full h-full object-cover p-4 group-hover:scale-110 transition-transform duration-500"
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
