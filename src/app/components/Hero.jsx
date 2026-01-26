import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <section className="flex flex-col my-16 md:my-48">
      <div className="mx-auto px-4 text-center">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="flex flex-col gap-2">
            <h1
              className={`${orbitron.className} text-5xl md:text-7xl font-bold text-gray-900`}
            >
              Sublime
            </h1>
            <h2
              className={`${orbitron.className} text-xl md:text-2xl font-bold text-gray-900`}
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

        <p className="mt-4 md:text-lg text-gray-600 max-w-xl mx-auto animate-fade-in">
          Personalización de productos | Regalos empresariales | Merchandising
          corporativo
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <button className="w-64 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
            Ver productos
          </button>
          <button className="w-64 border-2 border-cyan-600 text-cyan-600 bg-white hover:bg-cyan-700 hover:text-white font-bold py-3 px-6 rounded-lg transition duration-200">
            Contacto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
