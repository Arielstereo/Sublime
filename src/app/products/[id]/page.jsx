import data from "@/data";
import ProductDetailClient from "./ProductDetailClient";

const allProducts = data.products;
const categoryNames = data.categoryNames;

const isCategory = (id) => {
  return Object.keys(categoryNames).includes(id);
};

export async function generateMetadata({ params }) {
  const { id } = await params;

  if (isCategory(id)) {
    const name = categoryNames[id];
    return {
      title: `${name} | Sublime by Emprendev`,
      description: `Descubrí nuestros ${name.toLowerCase()} personalizados. Consultá presupuesto por cantidades o diseños especiales.`,
      alternates: {
        canonical: `/products/${id}`,
      },
    };
  }

  const product = allProducts.find((p) => p.id === parseInt(id));

  if (product) {
    return {
      title: `${product.name} | Sublime by Emprendev`,
      description: product.description,
      alternates: {
        canonical: `/products/${id}`,
      },
    };
  }

  return {
    title: "Página no encontrada | Sublime by Emprendev",
    description: "La página que buscas no existe.",
  };
}

export default function ProductDetailPage() {
  return <ProductDetailClient />;
}
