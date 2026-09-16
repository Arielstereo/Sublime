"use client";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

const orbitron = Orbitron({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const NAV_ITEMS = [
  { id: "servicios", label: "Servicios" },
  { id: "productos", label: "Productos" },
  { id: "pasos", label: "¿Cómo pedir?" },
  { id: "contacto", label: "Contacto" },
];

const Header = () => {
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border-soft backdrop-blur-xl bg-ink-800">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-6 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("inicio")}
          className="flex gap-3 items-center justify-center cursor-pointer group"
        >
          <Image
            width={200}
            height={200}
            src="/logo-sublime.png"
            alt="Sublime by Emprendev"
            className="h-10 w-auto transition-opacity group-hover:opacity-90"
          />
          <span
            className={`${orbitron.className} text-xl font-bold tracking-tight`}
          >
            Sublime
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-fg- hover:text-fg-muted cursor-pointer bg-transparent border-none transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <Link
          href="https://api.whatsapp.com/send?phone=+5491126922128&text=Hola%20Sublime:"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-150"
        >
          <i
            className="icon-[streamline-pixel--logo-whatapp] w-5 h-5"
            role="img"
            aria-hidden="true"
          ></i>
          <span>WhatsApp</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
