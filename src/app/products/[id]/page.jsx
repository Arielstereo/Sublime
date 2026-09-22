"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import data from "@/data";

const allProducts = data.products;
const categoryProducts = data.categoryProducts;
const categoryNames = data.categoryNames;

const WHATSAPP_NUMBER = "+5491126922128";
const INSTAGRAM_URL = "https://instagram.com/sublime.emprendev";
const INSTAGRAM_HANDLE = "@sublime.emprendev";

const waLink = (message) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
    message,
  )}`;

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
                <h3 className="font-semibold text-xl mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-fg-muted mb-4 line-clamp-2">
                  {product.description}
                </p>
                <span className="inline-flex items-center gap-2 text-accent-strong font-medium group-hover:gap-3 transition-all duration-200">
                  Ver producto →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-center items-center">
          <Link
            href={waLink("Necesito presupuesto para: ")}
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
          <Link
            href="/#productos"
            className="text-accent-strong hover:underline"
          >
            Volver a categorías
          </Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.image2, product.image3].filter(
    Boolean,
  );
  const currentImage = images[selectedImage] || product.image;
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

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
              {images.length > 0 && (
                <div className="flex gap-3 w-full md:w-1/2">
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
                  {images.length < 3 && (
                    <Link
                      href={waLink(
                        `Hola, quiero personalizar ${product.name} con un diseño propio. ¿Cómo envío la imagen o el diseño?`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enviar diseño propio para ${product.name}`}
                      className="flex-1 relative aspect-square rounded-lg border-2 border-dashed border-border-strong hover:border-accent hover:text-accent transition-all overflow-hidden bg-ink-800"
                    >
                      <span className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-2 text-center">
                        <i
                          className="icon-[lucide--palette] w-5 h-5 text-accent-strong"
                          role="img"
                          aria-hidden="true"
                        ></i>
                        <span className="text-xs font-semibold text-fg">
                          Tu diseño
                        </span>
                        <span className="text-[10px] text-fg-muted leading-tight">
                          Enviá tu idea
                        </span>
                      </span>
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Detalles */}
            <div className="flex flex-col">
              <div className="mt-8 mb-4">
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

              <div className="mb-6 rounded-xl bg-ink-800 border border-slate-500 p-4">
                <p className="text-sm text-fg-secondary leading-relaxed">
                  Producto 100% personalizable: el precio se ajusta a la{" "}
                  <span className="text-fg font-medium">
                    cantidad y diseño requerido.
                  </span>{" "}
                  <br />
                  Pedinos tu presupuesto sin cargo.
                </p>
              </div>

              {/* Colores disponibles */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-3">
                    Colores disponibles:
                  </h3>
                  <div className="flex gap-3 flex-wrap" aria-hidden="true">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-8 h-8 rounded-full border-2 border-border-strong shadow-sm ${color}`}
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
              <div className="flex flex-col md:flex-row gap-3">
                <Link
                  href={waLink(
                    `Hola, quiero solicitar presupuesto para: ${product.name} (${categoryNames[product.category]}).`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-center items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 active:scale-[0.97]"
                >
                  <i
                    className="icon-[streamline-pixel--logo-whatapp] w-5 h-5 text-white"
                    role="img"
                    aria-hidden="true"
                  ></i>
                  Solicitar presupuesto
                </Link>
                <Link
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-center items-center gap-3 border-2 border-border-strong text-fg-secondary hover:text-fg hover:border-accent-strong font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 active:scale-[0.97]"
                >
                  <i
                    className="icon-[lucide--instagram] w-5 h-5 text-accent-strong"
                    role="img"
                    aria-hidden="true"
                  ></i>
                  Ver más en Instagram · {INSTAGRAM_HANDLE}
                </Link>
              </div>
              <span className="text-fg-muted text-sm mt-5 leading-relaxed">
                * Al solicitar presupuesto, indica cantidad, color, y diseño. En
                el caso de enviar tu propio diseño, adjunta el archivo o imagen
                correspondiente en formato .PNG o .JPG. Consulta las opciones
                disponibles.
              </span>
            </div>
          </div>
        </div>

        {/* Productos relacionados */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 mb-10 mx-4 md:mx-10">
            <h2 className="text-2xl font-bold mb-8">
              Productos relacionados
              <span className="text-fg-muted font-normal"> · Arma tu kit</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="dark-card rounded-2xl hover:border-border-strong transition-all duration-300 p-5 group"
                >
                  <div className="relative w-full aspect-square bg-ink-800 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover p-4 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-sm text-fg-muted line-clamp-2">
                    {relatedProduct.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
