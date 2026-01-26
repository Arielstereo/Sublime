"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const allProducts = [
  {
    id: 1,
    category: "eventos",
    name: "Remera Personalizada",
    image: "/taza.png",
    image2: "/gorra.png",
    description: "Ideal para el agasajado o souvenir",
    fullDescription:
      "Remera 100% algodón personalizada con la foto y mensaje que desees. Perfecta para cumpleaños, despedidas y eventos especiales.",
    price: "$45.00",
    bulkPrice: "$40.00",
    features: [
      "100% algodón",
      "Personalizable",
      "Talla XS a XXL",
      "Colores variados",
    ],
  },
  {
    id: 2,
    category: "eventos",
    name: "Taza de Cumpleaños",
    image: "/gorra.png",
    image2: "/Context.png",
    description: "Con foto y mensaje especial",
    fullDescription:
      "Taza cerámica de alta calidad con tu diseño personalizado. Ideal para regalar o usar en ocasiones especiales.",
    price: "$25.00",
    bulkPrice: "$22.00",
    features: [
      "Cerámica de calidad",
      "Apto lavavajillas",
      "Diseño personalizado",
      "Capaz 350ml",
    ],
  },
  {
    id: 3,
    category: "empresas",
    name: "Remera Corporativa",
    image2: "/back-github.png",
    image: "/github-contex.png",
    description: "Con logo de tu empresa",
    fullDescription:
      "Remera corporativa de poliester blanca, sublimada con el logo de tu empresa. Perfecta para tu equipo de trabajo.",
    price: "$18.000",
    bulkPrice: "$15.000 c/u",
    features: [
      "Logo sublimado en frente y espalda, según diseño.",
      "Poliester color blanco.",
      "Para hombre y mujer.",
      "Talles S a XXL.",
    ],
  },
  {
    id: 4,
    category: "empresas",
    name: "Mousepad Personalizado",
    image: "/mouse-rectangular.png",
    image2: "/mouse-circular.png",
    description: "Ideal para merchandising",
    fullDescription:
      "Mousepad con base antideslizante y tu diseño personalizado.",
    price: "$6.500",
    bulkPrice: "$5.000 c/u",
    features: [
      "Base antideslizante.",
      "Diseño personalizado con tu logo o imagen.",
      "Medida estándar.",
      "Rectangular o circular.",
    ],
  },

  {
    id: 5,
    category: "regalos",
    name: "Remera Diseño Único",
    image: "/taza.png",
    image2: "/gorra.png",
    description: "Diseño exclusivo para regalar",
    fullDescription:
      "Remera con diseño exclusivo e único. Confeccionada en algodón premium con acabado perfecto.",
    price: "$48.00",
    bulkPrice: "$42.00",
    features: [
      "Diseño exclusivo",
      "Algodón premium",
      "Varias medidas",
      "Colores a elección",
    ],
  },
  {
    id: 6,
    category: "regalos",
    name: "Taza Personalizada",
    image: "/gorra.png",
    image2: "/Context.png",
    description: "Con el mensaje que quieras",
    fullDescription:
      "Taza de cerámica 100% personalizable con tu foto, nombre o mensaje especial.",
    price: "$28.00",
    bulkPrice: "$25.00",
    features: [
      "Personalizable",
      "Cerámica resistente",
      "Impresión de alta calidad",
      "Empaque especial",
    ],
  },
  {
    id: 7,
    category: "regalos",
    name: "Kit Regalo Especial",
    image: "/mouse.png",
    description: "Combina productos",
    fullDescription:
      "Kit regalo que combina múltiples productos personalizados. Perfecto para sorpresas especiales.",
    price: "$120.00",
    features: [
      "3-4 productos incluidos",
      "Personalizable",
      "Empaque Premium",
      "Envío incluido",
    ],
  },
  {
    id: 8,
    category: "empresas",
    name: "Taza Corporativa",
    image: "/taza-frente.png",
    image2: "/taza-frente2.png",
    description: "Ideal para merchandising",
    fullDescription: "Taza corporativa de cerámica.",
    price: "$16.000",
    bulkPrice: "$12.000 c/u",
    features: [
      "Taza corporativa de cerámica, alta calidad.",
      "Diseño personalizado con tu logo o imagen.",
      "Fondo de color.",
      "Capacidad 350ml.",
    ],
  },
];

const categoryProducts = {
  eventos: [
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
      image: "/github-contex.png",
      description: "Con logo de tu empresa",
    },
    {
      id: 4,
      name: "Mousepad Personalizado",
      image: "/mouse-rectangular.png",
      description: "Ideal para merchandising",
    },
    {
      id: 8,
      name: "Taza Corporativa",
      image: "/taza-frente.png",
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

const categoryNames = {
  empresas: "Merchandising corporativo",
  regalos: "Regalos Personalizados",
  eventos: "Eventos especiales",
};

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
            href="/#productos"
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
            href="/#productos"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-5/6 mx-auto">
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
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
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

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
            Solicitar presupuesto
          </button>
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

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Imagen */}
            <div className="flex flex-col items-center justify-start">
              <div className="bg-slate-100 rounded-lg p-8 w-full mb-6 relative">
                <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
                  Combina con otros productos para armar tu kit
                </div>
                <div className="relative w-full h-96">
                  <Image
                    src={currentImage}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Selector de imágenes */}
              <div className="flex gap-4 w-full">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-1 relative h-24 rounded-lg border-2 transition-all overflow-hidden ${
                      selectedImage === index
                        ? "border-pink-600 shadow-lg"
                        : "border-slate-300 hover:border-slate-400"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} vista ${index + 1}`}
                      fill
                      className="object-contain p-2"
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

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-3xl font-bold text-green-600">
                    {product.price}
                  </div>
                  <span className="text-sm text-slate-600 font-medium">
                    por unidad
                  </span>
                </div>
                <div className="text-sm text-slate-500 pl-0">
                  Solicitando 5+ unidades:{" "}
                  <span className="font-semibold text-slate-700">
                    {product.bulkPrice}
                  </span>
                </div>
              </div>

              {/* Características */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-slate-900">
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
              <div className="flex gap-4">
                <button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
                  Solicitar producto
                </button>
                <button className="flex-1 border-2 border-cyan-600 text-cyan-600 hover:text-white hover:bg-blue-500 font-bold py-3 px-6 rounded-lg transition duration-200">
                  Consultar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Productos relacionados */}
        <div className="mt-16 mb-12 mx-4 md:mx-16">
          <h2 className="text-2xl font-bold mb-8 text-slate-900">
            Productos relacionados | Arma tu kit
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
