"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import data from "@/data/data.json";

const allProducts = data.products;
const categoryProducts = data.categoryProducts;
const categoryNames = data.categoryNames;

const isCategory = (id) => {
  return Object.keys(categoryNames).includes(id);
};

function CategoryView({ categoryId }) {
  const products = categoryProducts[categoryId] || [];
  const categoryName = categoryNames[categoryId] || "Categoría";

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ink-950">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold mb-4">Categoría no encontrada</h1>
          <Link
            href="/"
            className="text-accent-strong hover:text-accent font-medium"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="pt-8 pb-32 bg-ink-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-12 mx-4 md:mx-16">
          <Link
            href="/"
            className="text-accent-strong hover:text-accent font-medium mb-6"
          >
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {categoryName}
          </h1>
          <p className="text-fg-secondary text-base md:text-lg max-w-2xl text-pretty">
            Descubrí todos nuestros productos en esta categoría. Consulta
            presupuesto por cantidades o diseños especiales.
            <br />
            También puedes combinar productos para un kit personalizado.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-4/5 mx-auto">
          {products.map((product) => (
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
                <h3 className="font-semibold text-xl mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-fg-muted mb-4 line-clamp-2">
                  {product.description}
                </p>
                <span className="inline-flex items-center justify-center gap-2 w-full cursor-pointer border border-border-strong bg-ink-800 hover:bg-accent hover:border-accent text-fg hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 active:scale-[0.98]">
                  <span>Solicitar presupuesto</span>
                  <i
                    className="icon-[streamline-pixel--logo-whatapp] w-5 h-5"
                    role="img"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-center items-center">
          <Link
            href="https://api.whatsapp.com/send?phone=+5491126922128&text=Necesito%20presupuesto%20para:%20"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-72 cursor-pointer border border-border-strong bg-ink-800 hover:bg-accent hover:border-accent text-fg hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 active:scale-[0.98]"
          >
            <span>Solicitar presupuesto</span>
            <i
              className="icon-[streamline-pixel--logo-whatapp] w-5 h-5"
              role="img"
              aria-hidden="true"
            ></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductDetail() {
  const params = useParams();
  const id = params.id;
  const [selectedImage, setSelectedImage] = useState(0);

  if (isCategory(id)) {
    return <CategoryView categoryId={id} />;
  }

  const productId = parseInt(id);
  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ink-950">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Producto no encontrado</h1>
          <Link href="/#productos" className="text-accent-strong hover:underline">
            Volver a categorías
          </Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.image2].filter(Boolean);
  const currentImage = images[selectedImage] || product.image;

  return (
    <div className="min-h-screen bg-ink-950 py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 mx-4 md:mx-10">
          <Link
            href={`/products/${product.category}`}
            className="text-accent-strong hover:text-accent font-medium"
          >
            ← Volver a {categoryNames[product.category]}
          </Link>
        </div>

        <div className="dark-card rounded-2xl overflow-hidden border-border-base">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
            {/* Imagen */}
            <div className="flex flex-col items-center justify-start">
              <div className="dark-card rounded-xl p-4 md:p-8 w-full mb-6 relative border-border-base">
                {product.badgeText && (
                  <span className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
                    {product.badgeText}
                  </span>
                )}
                <div className="relative w-full aspect-square">
                  <Image
                    src={currentImage}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Selector de imágenes */}
              {images.length > 1 && (
                <div className="flex gap-4 w-1/2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-1 relative aspect-square rounded-lg border-2 cursor-pointer transition-all overflow-hidden ${
                        selectedImage === index
                          ? "border-accent shadow-[0_0_0_3px_rgba(236,72,153,0.2)]"
                          : "border-border-soft hover:border-border-strong"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} vista ${index + 1}`}
                        fill
                        className="object-cover p-3"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Detalles */}
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-accent-soft text-accent-strong rounded-full text-sm font-semibold">
                  {categoryNames[product.category]}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                {product.name}
              </h1>

              <p className="text-lg text-fg-secondary mb-6 text-pretty">
                {product.fullDescription}
              </p>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-3xl font-bold text-accent-strong tabular-nums">
                    {product.price}
                  </div>
                </div>
                {product.showBulkPriceByQuantity && (
                  <div className="text-lg text-fg-secondary pl-0">
                    + 5 unidades:{" "}
                    <span className="font-semibold text-accent-strong text-lg">
                      {product.bulkPrice}
                    </span>
                    {"  "}c/u
                  </div>
                )}
              </div>

              {/* Colores disponibles */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-3">
                    Colores disponibles:
                  </h3>
                  <div className="flex gap-3 flex-wrap">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-8 h-8 rounded-full border-2 border-border-strong hover:scale-110 transition-all cursor-pointer shadow-sm ${color}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Características */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold mb-4">Características:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start text-fg-secondary"
                    >
                      <span className="mt-2 mr-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`https://api.whatsapp.com/send?phone=+5491126922128&text=Quiero%20solicitar%20${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center bg-accent hover:bg-accent-strong text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 active:scale-[0.97]"
                >
                  Solicitar producto
                </Link>
                <Link
                  href={`https://api.whatsapp.com/send?phone=+5491126922128&text=Quiero%20consultar%20sobre%20${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center border-2 border-border-strong text-fg-secondary hover:text-fg hover:border-border-base font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 active:scale-[0.97]"
                >
                  Consultar
                </Link>
              </div>
              <span className="text-fg-muted text-sm mt-5 leading-relaxed">
                * Al solicitar este producto, indica cantidad, color, y diseño.
                En el caso de enviar tu propio diseño, adjunta el archivo o
                imagen correspondiente en formato .PNG o .JPG. Consulta las
                opciones disponibles.
              </span>
            </div>
          </div>
        </div>

        {/* Productos relacionados */}
        <div className="mt-16 mb-10 mx-4 md:mx-10">
          <h2 className="text-2xl font-bold mb-8">
            Productos relacionados
            <span className="text-fg-muted font-normal"> · Arma tu kit</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allProducts
              .filter(
                (p) => p.category === product.category && p.id !== product.id,
              )
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="dark-card rounded-2xl hover:border-border-strong transition-all duration-300 p-5 cursor-pointer group"
                >
                  <div className="relative w-full aspect-square bg-ink-800 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover p-4 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-1">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-sm text-fg-muted line-clamp-2">
                    {relatedProduct.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
