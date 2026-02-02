import data from "@/data/data.json";

const allProducts = data.products;
const categoryNames = data.categoryNames;

export async function generateMetadata({ params }) {
  const id = params.id;

  // Si es una categoría
  if (Object.keys(categoryNames).includes(id)) {
    const title = `${categoryNames[id]} | Sublime by Emprendev`;
    return {
      title,
      description:
        "Descubrí todos nuestros productos en la categoría " +
        categoryNames[id],
      openGraph: {
        title,
        description:
          "Descubrí todos nuestros productos en la categoría " +
          categoryNames[id],
      },
      alternates: {
        canonical: process.env.NEXT_PUBLIC_SITE_URL
          ? new URL(
              `/products/${id}`,
              process.env.NEXT_PUBLIC_SITE_URL,
            ).toString()
          : `/products/${id}`,
      },
    };
  }

  const productId = parseInt(id);
  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return {
      title: "Producto no encontrado | Sublime",
      description: "Producto no encontrado",
    };
  }

  const title = `${product.name} | Sublime by Emprendev`;
  const description = product.fullDescription || product.description || "";
  const image = product.image || null;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [image] : [],
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_SITE_URL
        ? new URL(
            `/products/${product.id}`,
            process.env.NEXT_PUBLIC_SITE_URL,
          ).toString()
        : `/products/${product.id}`,
    },
  };
}

export default function Head({ params }) {
  const id = params.id;
  const productId = parseInt(id);
  const product = allProducts.find((p) => p.id === productId);

  // JSON-LD for product (if found)
  const ld = product
    ? {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: product.name,
        description: product.fullDescription || product.description,
        image: [product.image, product.image2].filter(Boolean),
        sku: product.sku || String(product.id),
        offers: {
          "@type": "Offer",
          price: product.price
            ? String(product.price).replace(/[^0-9.,]/g, "")
            : undefined,
          priceCurrency: "ARS",
          availability: "https://schema.org/InStock",
          url: process.env.NEXT_PUBLIC_SITE_URL
            ? new URL(
                `/products/${product.id}`,
                process.env.NEXT_PUBLIC_SITE_URL,
              ).toString()
            : `/products/${product.id}`,
        },
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
    </>
  );
}
