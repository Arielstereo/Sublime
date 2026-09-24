"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data";
import CurvedLoop from "./CurvedLoop";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const categories = data.categories;

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
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!isAutoPlay || isPaused || reduceMotion) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, categories.length - itemsPerSlide);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay, isPaused, reduceMotion, categories.length, itemsPerSlide]);

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

  return (
    <section className="py-20 md:py-28 bg-ink-800">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Productos Destacados
          </h2>
          <p className="text-fg-secondary text-base md:text-lg max-w-2xl text-pretty">
            Descubrí algunos de nuestros productos más populares. Deslizá para
            ver más opciones. Consulta por otros productos y personalizaciones.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          {/* Products Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
              }}
            >
              {categories.map((category) => {
                const productCount =
                  data.categoryProducts[category.id]?.length ?? 0;
                return (
                  <div
                    key={category.id}
                    className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-2 md:px-3"
                  >
                    <Link
                      href={`/products/${category.id}`}
                      className="group dark-card rounded-2xl overflow-hidden hover:border-border-strong transition-all duration-300 h-full flex flex-col"
                    >
                      {/* Image Container */}
                      <div className="relative overflow-hidden aspect-square bg-ink-800">
                        <Image
                          src={category.image}
                          alt={category.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Category Badge */}
                        <span className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {category.label}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-5 md:p-6 flex flex-col grow">
                        <h3 className="font-semibold text-lg md:text-xl mb-2 line-clamp-2">
                          {category.name}
                        </h3>
                        <p className="text-fg-muted text-sm md:text-base mb-4 grow">
                          {productCount}{" "}
                          {productCount === 1 ? "producto" : "productos"}
                        </p>

                        <span className="inline-flex items-center gap-2 text-accent-strong font-medium text-sm md:text-base group-hover:gap-3 transition-all duration-200">
                          Ver detalles →
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-ink-800 hover:bg-ink-700 border border-border-base text-fg w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-ink-800 hover:bg-ink-700 border border-border-base text-fg w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95"
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
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-accent"
                    : "w-2 bg-ink-700 hover:bg-ink-600"
                }`}
                aria-label={`Ir a diapositiva ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <CurvedLoop
          marqueeText="Tazas ✦ Remeras ✦ Totebags ✦ Llaveros ✦ Gorras ✦ Stickers ✦ Termos ✦ Mates ✦ Buzos ✦"
          speed={2}
          curveAmount={0}
          direction="right"
          interactive={false}
          className="text-6xl md:text-2xl"
        />
      </div>
    </section>
  );
};

export default ProductCarousel;
