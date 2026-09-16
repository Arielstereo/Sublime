import Image from "next/image";
import { Orbitron } from "next/font/google";
import Link from "next/link";

const orbitron = Orbitron({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-center px-4 py-16 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          <Image
            width={200}
            height={200}
            src="/logo-sublime.png"
            alt="Sublime by Emprendev"
            className="h-24 w-auto md:h-32 drop-shadow-[0_8px_30px_rgba(236,72,153,0.25)]"
          />
          <div className="flex flex-col gap-1 items-center md:items-start">
            <h1
              className={`${orbitron.className} text-5xl md:text-6xl text-fg font-bold tracking-tight`}
            >
              Sublime
            </h1>
            <h2
              className={`${orbitron.className} text-xl md:text-2xl text-fg-secondary font-semibold tracking-tight`}
            >
              by Emprendev
            </h2>
          </div>
        </div>

        <p className="mt-2 max-w-2xl text-base md:text-lg text-fg-secondary text-pretty">
          Personalización de productos | Regalos empresariales | Merchandising
          corporativo
        </p>

        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <Link
            href="/catalogo.pdf"
            target="_blank"
            className="inline-flex items-center justify-center w-64 cursor-pointer bg-accent hover:bg-accent-strong text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 active:scale-[0.97]"
          >
            Ver catálogo
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
