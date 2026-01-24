"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = [
  {
    id: "cumpleanos",
    label: "Eventos y Cumpleaños",
    color: "bg-pink-400",
  },
  { id: "empresas", label: "Empresas y Negocios", color: "bg-cyan-500" },
  {
    id: "regalos",
    label: "Regalos Personalizados",
    color: "bg-black",
  },
];

const products = {
  cumpleanos: [
    {
      id: 1,
      name: "Remera Personalizada",
      image: "/taza.png",
      description: "Ideal para el agasajado o souvenir",
    },
    {
      id: 2,
      name: "Taza de Cumpleaños",
      image: "/gorra.png",
      description: "Con foto y mensaje especial",
    },
  ],
  empresas: [
    {
      id: 3,
      name: "Remera Corporativa",
      image: "/Context.png",
      description: "Con logo de tu empresa",
    },
    {
      id: 4,
      name: "Mousepad Personalizado",
      image: "/mouse.png",
      description: "Ideal para merchandising",
    },
  ],
  regalos: [
    {
      id: 5,
      name: "Remera Diseño Único",
      image: "/taza.png",
      description: "Diseño exclusivo para regalar",
    },
    {
      id: 6,
      name: "Taza Personalizada",
      image: "/gorra.png",
      description: "Con el mensaje que quieras",
    },
    {
      id: 7,
      name: "Kit Regalo Especial",
      image: "/mouse.png",
      description: "Combina productos",
    },
  ],
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("cumpleanos");

  return (
    <section id="productos" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-gradient-graffiti mb-4">
            Nuestros Productos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explorá por categoría y encontrá el producto perfecto para cada
            ocasión
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === category.id
                  ? `${category.color} text-white bg-black shadow-lg scale-105`
                  : "bg-white text-slate-800 border-2 border-slate-500 "
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-16">
          {products[activeCategory].map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square bg-secondary/30">
                <Image
                  width={200}
                  height={200}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                  Ver detalles →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="flex-1 w-64 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
            Ver más productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
