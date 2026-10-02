import data from "@/data";
import ProductDetailClient from "./ProductDetailClient";

const allProducts = data.products;
const categoryNames = data.categoryNames;

const isCategory = (id) => {
  return Object.keys(categoryNames).includes(id);
};

export async function generateMetadata({ params }) {
  const { id } = await params;

  const canonical = process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(`/products/${id}`, process.env.NEXT_PUBLIC_SITE_URL).toString()
    : `/products/${id}`;

  if (isCategory(id)) {
    const name = categoryNames[id];
    return {
      title: `${name} | Sublime by Emprendev`,
      description: `Descubrí nuestros ${name.toLowerCase()} personalizados. Consultá presupuesto por cantidades o diseños especiales.`,
      openGraph: {
        title: `${name} | Sublime by Emprendev`,
        description: `Descubrí todos nuestros productos en la categoría ${name}`,
      },
      alternates: {
        canonical,
      },
    };
  }

  const product = allProducts.find((p) => p.id === parseInt(id));

  if (product) {
    return {
      title: `${product.name} | Sublime by Emprendev`,
      description: product.description,
      openGraph: {
        title: `${product.name} | Sublime by Emprendev`,
        description: product.fullDescription || product.description,
        images: product.image ? [product.image] : [],
      },
      twitter: {
        title: `${product.name} | Sublime by Emprendev`,
        description: product.fullDescription || product.description,
      },
      alternates: {
        canonical,
      },
    };
  }

  return {
    title: "Página no encontrada | Sublime by Emprendev",
    description: "La página que buscas no existe.",
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const productId = parseInt(id);
  const product = allProducts.find((p) => p.id === productId);

  const ld = product
    ? {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: product.name,
        description: product.fullDescription || product.description,
        image: [product.image, product.image2, product.image3].filter(Boolean),
        sku: product.sku || String(product.id),
        url: process.env.NEXT_PUBLIC_SITE_URL
          ? new URL(`/products/${product.id}`, process.env.NEXT_PUBLIC_SITE_URL).toString()
          : `/products/${product.id}`,
      }
    : null;

  return (
    <>
      {ld && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      )}
      <ProductDetailClient />
    </>
  );
}
