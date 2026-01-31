"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
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
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              width={200}
              height={200}
              src="/logo.png"
              alt="Sublime by Emprendev"
              className="h-10 w-auto brightness-0 invert"
            />
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <button
              onClick={() => scrollToSection("servicios")}
              className="hover:text-pink-400 cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("productos")}
              className="hover:text-pink-400 cursor-pointer"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection("pasos")}
              className="hover:text-pink-400 cursor-pointer"
            >
              ¿Como pedir?
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="hover:text-pink-400 cursor-pointer"
            >
              Contacto
            </button>
          </nav>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center mt-8 pt-6 border-t border-background/20 text-center text-sm text-background/60">
          <p>
            © {new Date().getFullYear()} Sublime by Emprendev. Todos los
            derechos reservados.
          </p>

          <p className="text-sm text-background/60 flex items-center gap-1">
            Realizado por EmprenDev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
