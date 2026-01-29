import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ProductCarousel from "./components/ProductCarousel";
import Products from "./components/Products";
import OrderSteps from "./components/OrderSteps";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductCarousel />
      <Services />
      <Products />
      <OrderSteps />
      <Contact />
    </div>
  );
}
