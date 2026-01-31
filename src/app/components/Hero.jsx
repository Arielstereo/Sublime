import Image from "next/image";
import { Orbitron } from "next/font/google";
import Link from "next/link";

const orbitron = Orbitron({
  weight: "600",
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <section className="relative flex flex-col py-16 md:py-32 h-screen overflow-hidden bg-black">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/background-hero.png')",
          opacity: 0.19,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-4 text-center">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="flex flex-col gap-2">
            <h1
              className={`${orbitron.className} text-5xl md:text-7xl text-gray-100`}
            >
              Sublime
            </h1>
            <h2
              className={`${orbitron.className} text-xl md:text-2xl text-gray-100`}
            >
              by Emprendev
            </h2>
          </div>
          <Image
            width={300}
            height={300}
            src="/logo.png"
            alt="Sublime by Emprendev"
            className="mx-auto object-cover"
          />
        </div>

        <p className="mt-4 md:text-lg text-gray-100 max-w-xl mx-auto animate-fade-in">
          Personalización de productos | Regalos empresariales | Merchandising
          corporativo
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <Link
            href="#productos"
            className="w-64 cursor-pointer bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            Nuestros Productos
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=+5491126922128&text=Necesito%20presupuesto%20para%20personalizar%20productos"
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
};

export default Hero;
