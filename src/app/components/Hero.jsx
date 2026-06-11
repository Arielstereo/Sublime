import Image from "next/image";
import { Orbitron } from "next/font/google";
import Link from "next/link";

const orbitron = Orbitron({
  weight: "600",
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* White Grid with Dots Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px),
        radial-gradient(circle, rgba(51,65,85,0.4) 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px, 20px 20px, 20px 20px",
          backgroundPosition: "0 0, 0 0, 0 0",
        }}
      />
      {/* Your Content/Components */}
      <section className="relative flex flex-col py-32 md:py-48 h-screen">
        <div className="relative z-10 mx-auto px-4 text-center">
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-4">
            <div className="flex flex-col gap-2">
              <h1
                className={`${orbitron.className} text-5xl md:text-7xl text-gray-800`}
              >
                Sublime
              </h1>
              <h2
                className={`${orbitron.className} text-xl md:text-2xl text-gray-800`}
              >
                by Emprendev
              </h2>
            </div>
            <Image
              width={200}
              height={200}
              src="/logo-sublime.png"
              alt="Sublime by Emprendev"
              className="object-cover w-1/5 mb-4"
            />
          </div>
          <p className="mt-4 md:text-lg text-gray-600 max-w-xl mx-auto animate-fade-in">
            Personalización de productos | Regalos empresariales | Merchandising
            corporativo
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Link
              href="/catalogo.pdf"
              target="_blank"
              className="w-64 cursor-pointer bg-black hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
            >
              Ver catálogo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
