import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Products />
      <Contact />
    </div>
  );
}
