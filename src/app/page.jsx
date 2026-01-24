import Background from "./components/Background";
import BackgroundHero from "./components/BackgroundHero";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <BackgroundHero>
        <Hero />
      </BackgroundHero>
      <Background>
        <Services />
        <Products />
        <Contact />
      </Background>
    </div>
  );
}
