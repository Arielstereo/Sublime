"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const allCategories = data.categories;
  // const promoProducts = allProducts.filter((p) => p.isPromo);
  const categories = allCategories;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, categories.length - itemsPerSlide);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay, categories.length, itemsPerSlide]);

  const handleNext = () => {
    const maxIndex = Math.max(0, categories.length - itemsPerSlide);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setIsAutoPlay(false);
  };

  const handlePrev = () => {
    const maxIndex = Math.max(0, categories.length - itemsPerSlide);
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    setIsAutoPlay(false);
  };

  const visiblecategories = categories.slice(
    currentIndex,
    currentIndex + itemsPerSlide,
  );

  return (
    <section className="py-16 bg-linear-to-r from-slate-50 to-slate-100">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 mx-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Productos Destacados
          </h2>
          <p className="text-slate-600 text-base md:text-lg mx-auto max-w-2xl text-left md:text-center">
            Descubrí algunos de nuestros productos más populares.Desliza para
            ver más opciones. Consulta por otros productos y personalizaciones.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Products Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
              }}
            >
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-2 md:px-3"
                >
                  <Link
                    href={`/products/${category.id}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden aspect-square bg-slate-100">
                      <Image
                        src={category.image}
                        alt={category.id}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {category.label}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-6 flex flex-col grow">
                      <h3 className="font-bold text-lg md:text-xl mb-2 line-clamp-2">
                        {category.name}
                      </h3>
                      <p className="text-slate-600 text-sm md:text-base mb-4 line-clamp-2 grow">
                        {category.label}
                      </p>

                      {/* CTA */}
                      <span className="inline-flex items-center gap-2 text-pink-600 font-medium hover:text-pink-700 text-sm md:text-base">
                        Ver detalles →
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-pink-600 hover:bg-pink-700 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
            aria-label="Anterior"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-pink-600 hover:bg-pink-700 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
            aria-label="Siguiente"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({
              length: Math.max(1, categories.length - itemsPerSlide + 1),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlay(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-pink-600 w-8"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Ir a diapositiva ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
