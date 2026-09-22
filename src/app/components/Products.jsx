"use client";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data";
import { useState } from "react";

const MOBILE_INITIAL = 6;

const Products = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = !showAll
    ? products.slice(0, MOBILE_INITIAL)
    : products;
  const hasMore = !showAll && products.length > MOBILE_INITIAL;
  return (
    <section id="productos" className="py-20 md:py-32 bg-ink-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Nuestros Productos
          </h2>
          <p className="text-fg-secondary text-base md:text-lg max-w-2xl text-pretty">
            Ofrecemos productos personalizados para tu empresa, negocio o
            evento. Personalizamos una amplia variedad de productos según tus
            necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-4/5 mx-auto">
          {visibleProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group dark-card rounded-2xl overflow-hidden hover:border-border-strong transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-square bg-ink-800">
                <Image
                  width={300}
                  height={300}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover p-6 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-3 line-clamp-2">
                  {product.name}
                </h3>
                <span className="inline-flex items-center gap-2 text-accent-strong font-medium group-hover:gap-3 transition-all duration-200">
                  Ver producto →
                </span>
              </div>
            </Link>
          ))}
        </div>
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex w-64 cursor-pointer justify-center border border-accent/60 hover:bg-accent-soft text-accent-strong font-semibold py-3 px-6 rounded-xl transition duration-200 active:scale-[0.97]"
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
