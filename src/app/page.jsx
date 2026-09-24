import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ProductCarousel from "./components/ProductCarousel";
import Works from "./components/Works";
import OrderSteps from "./components/OrderSteps";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductCarousel />
      <Services />
      <Works />
      <OrderSteps />
      <Contact />
    </div>
  );
}
