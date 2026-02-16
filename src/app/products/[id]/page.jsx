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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Categoría no encontrada</h1>
          <Link
            href="/"
            className="text-pink-600 hover:text-pink-700 font-medium"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="pt-8 pb-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-start mb-12 mx-4 md:mx-16">
          <Link
            href="/"
            className="text-pink-600 hover:text-pink-700 font-medium mb-6"
          >
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {categoryName}
          </h1>
          <p className="text-slate-600 text-base md:text-lg">
            Descubrí todos nuestros productos en esta categoría. Consulta
            presupuesto por cantidades o diseños especiales.
            <br />
            También puedes combinar productos para un kit personalizado.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
            >
              <div className="relative overflow-hidden aspect-square bg-secondary/30">
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

        <div className="mt-16 flex justify-center items-center">
          <Link
            href="https://api.whatsapp.com/send?phone=+5491126922128&text=Necesito%20presupuesto%20para:%20"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-64 cursor-pointer border border-black text-black bg-white hover:bg-black hover:border-white hover:text-white font-bold py-3 px-6 rounded-lg transition duration-200"
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

  // Verificar si es una categoría
  if (isCategory(id)) {
    return <CategoryView categoryId={id} />;
  }

  const productId = parseInt(id);
  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Producto no encontrado</h1>
          <Link href="/#productos" className="text-blue-600 hover:underline">
            Volver a categorías
          </Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.image2];
  const currentImage = images[selectedImage];

  return (
    <div className="min-h-screen from-slate-50 to-slate-100 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-4 mx-4 md:mx-16">
          <Link
            href={`/products/${product.category}`}
            className="text-cyan-600 hover:text-slate-900"
          >
            ← Volver a {categoryNames[product.category]}
          </Link>
        </div>

        <div className="bg-white rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Imagen */}
            <div className="flex flex-col items-center justify-start">
              <div className="border border-cyan-500 rounded-xl p-4 md:p-8 w-full md:w-2/3 mb-6 relative">
                <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
                  {product.badgeText}
                </div>
                <div className="relative w-full h-96 md:h-110">
                  <Image
                    src={currentImage}
                    alt={product.name}
                    fill
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </div>

              {/* Selector de imágenes */}
              <div className="flex gap-4 w-1/2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-1 relative h-24 rounded-lg border-2 cursor-pointer transition-all overflow-hidden ${
                      selectedImage === index
                        ? "border-pink-600 shadow-lg"
                        : "border-slate-300 hover:border-slate-400"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} vista ${index + 1}`}
                      fill
                      className="object-cover p-4"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Detalles */}
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  {categoryNames[product.category]}
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-4 text-slate-900">
                {product.name}
              </h1>

              <p className="text-xl text-slate-600 mb-6">
                {product.fullDescription}
              </p>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-3xl font-bold text-green-600">
                    {product.price}
                  </div>
                  {product.showBulkPriceByQuantity && (
                    <span className="text-sm text-slate-600 font-medium">
                      c/u solicitando más de 5 unidades.
                    </span>
                  )}
                </div>
                {product.showBulkPriceByQuantity && (
                  <div className="text-sm text-slate-500 pl-0">
                    Precio por unidad:{" "}
                    <span className="font-semibold text-slate-700">
                      {product.bulkPrice}
                    </span>
                  </div>
                )}
              </div>

              {/* Colores disponibles */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">
                    Colores disponibles:
                  </h3>
                  <div className="flex gap-3 flex-wrap">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-8 h-8 rounded-full border-2 border-slate-300 hover:border-slate-600 transition-all cursor-pointer shadow-sm hover:shadow-md ${color}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Características */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold mb-4 text-slate-900">
                  Características:
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-slate-700"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botones */}
              <div className="flex flex-col md:flex-row gap-4">
                <Link
                  href={`https://api.whatsapp.com/send?phone=+5491126922128&text=Quiero%20solicitar%20${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
                >
                  Solicitar producto
                </Link>
                <Link
                  href={`https://api.whatsapp.com/send?phone=+5491126922128&text=Quiero%20consultar%20sobre%20${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center border-2 border-cyan-600 text-cyan-600 hover:text-white hover:bg-blue-500 font-bold py-3 px-6 rounded-lg transition duration-200"
                >
                  Consultar
                </Link>
              </div>
              <span className="text-slate-600 text-sm mt-4">
                * Al solicitar este producto, indica cantidad, color, y diseño.
                En el caso de enviar tu propio diseño, adjunta el archivo o
                imagen correspondiente en formato .PNG o .JPG. Consulta las
                opciones disponibles.
              </span>
            </div>
          </div>
        </div>

        {/* Productos relacionados */}
        <div className="mt-16 mb-12 mx-4 md:mx-16">
          <h2 className="text-2xl font-bold mb-8 text-slate-900">
            Productos relacionados |
            <br />
            Arma tu kit
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
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-4 cursor-pointer group"
                >
                  <div className="relative w-full h-48 bg-slate-100 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-sm text-slate-600">
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
