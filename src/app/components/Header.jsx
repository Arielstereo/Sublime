"use client";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  const router = useRouter();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Si estamos en la misma página, hacemos scroll directo
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Si no estamos en la página principal, navegamos y luego hacemos scroll
      router.push("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-pink-200 md:px-8 md:py-2">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center">
          <span className={`${orbitron.className} text-xl font-semibold`}>
            Sublime
          </span>
          <Image
            width={200}
            height={200}
            src="/logo.png"
            alt="Sublime by Emprendev"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden text-base md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("servicios")}
            className="hover:text-pink-600 cursor-pointer bg-transparent border-none"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("productos")}
            className="hover:text-pink-600 cursor-pointer bg-transparent border-none"
          >
            Productos
          </button>
          <button
            onClick={() => scrollToSection("pasos")}
            className="hover:text-pink-600 cursor-pointer bg-transparent border-none"
          >
            ¿Como pedir?
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="hover:text-pink-600 cursor-pointer bg-transparent border-none"
          >
            Contacto
          </button>
        </nav>

        <Link
          href="https://api.whatsapp.com/send?phone=+5491126922128&text=Hola%20Sublime:"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full font-medium hover:scale-105 transition-transform"
        >
          <i
            className="icon-[streamline-pixel--logo-whatapp] w-5 h-5"
            role="img"
            aria-hidden="true"
          ></i>
          <span className="hidden sm:inline">WhatsApp</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
