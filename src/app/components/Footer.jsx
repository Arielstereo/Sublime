"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  };

  const nav = [
    { id: "servicios", label: "Servicios" },
    { id: "productos", label: "Productos" },
    { id: "pasos", label: "¿Cómo pedir?" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <footer className="bg-ink-900 text-fg py-14 border-t border-border-soft">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              width={200}
              height={200}
              src="/logo.png"
              alt="Sublime by Emprendev"
              className="h-10 w-auto brightness-0 invert opacity-90"
            />
          </div>

          <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-fg-secondary hover:text-accent-strong cursor-pointer transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center mt-10 pt-6 border-t border-border-soft text-center text-sm text-fg-muted">
          <p>
            © {new Date().getFullYear()} Sublime by Emprendev. Todos los
            derechos reservados.
          </p>

          <p className="text-fg-muted flex items-center gap-1">
            Realizado por EmprenDev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
