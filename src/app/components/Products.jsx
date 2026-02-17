"use client";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/data.json";
import { useState } from "react";

const MOBILE_INITIAL = 6;

const Products = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = !showAll
    ? products.slice(0, MOBILE_INITIAL)
    : products;
  const hasMore = !showAll && products.length > MOBILE_INITIAL;
  return (
    <section
      id="productos"
      className="py-32 bg-linear-to-r from-slate-50 to-slate-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 mx-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros Productos
          </h2>
          <p className="text-slate-600 text-base md:text-lg mx-auto max-w-2xl text-left md:text-center">
            Ofrecemos productos personalizados para tu empresa, negocio o
            evento. Personalizamos una amplia variedad de productos según tus
            necesidades.
          </p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-3/4 mx-auto">
          {visibleProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className={`group bg-white border-2 ${product.color} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in`}
            >
              <div className="relative overflow-hidden aspect-square">
                <Image
                  width={300}
                  height={300}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover p-4 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                <span className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                  Ver producto →
                </span>
              </div>
            </Link>
          ))}
        </div>
        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="w-64 cursor-pointer border border-pink-600 hover:bg-pink-50 text-pink-600 font-bold py-3 px-6 rounded-lg transition duration-200"
            >
              Cargar más productos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
