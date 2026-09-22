"use client";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { categoryNames } from "@/data";

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
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id) => {
    setMobileOpen(false);
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
          {NAV_ITEMS.map((item) =>
            item.id === "productos" ? (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                onFocus={() => setProductsOpen(true)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setProductsOpen(false);
                  }
                }}
              >
                <button
                  onClick={() => setProductsOpen((open) => !open)}
                  aria-haspopup="menu"
                  aria-expanded={productsOpen}
                  className="flex items-center gap-1.5 text-fg hover:text-fg-muted z-50 cursor-pointer bg-transparent border-none transition-colors duration-200"
                >
                  {item.label}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`absolute left-1/2 -translate-x-1/2 pt-3 transition-all duration-150 ${
                    productsOpen
                      ? "visible opacity-100 translate-y-0"
                      : "invisible opacity-0 -translate-y-1 pointer-events-none"
                  }`}
                >
                  <ul
                    aria-label="Categorías de productos"
                    className="dark-card rounded-xl p-1.5 w-56 shadow-lg shadow-black/30"
                  >
                    {Object.entries(categoryNames).map(([id, name]) => (
                      <li key={id}>
                        <Link
                          href={`/products/${id}`}
                          className="block px-3 py-2 rounded-lg text-fg-secondary hover:text-fg hover:bg-ink-700 transition-colors duration-150"
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-fg hover:text-fg-muted cursor-pointer bg-transparent border-none transition-colors duration-200"
              >
                {item.label}
              </button>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="https://api.whatsapp.com/send?phone=+5491126922128&text=Hola%20Sublime:"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 text-white px-3.5 sm:px-4 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-150"
          >
            <i
              className="icon-[streamline-pixel--logo-whatapp] w-5 h-5"
              role="img"
              aria-hidden="true"
            ></i>
            <span className="hidden sm:inline">WhatsApp</span>
          </Link>

          <button
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="menu-mobile"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border border-border-strong text-fg hover:bg-ink-700 transition-colors duration-200 cursor-pointer"
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="menu-mobile"
        className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-out ${
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden min-h-0">
          <nav
            aria-label="Navegación principal"
            className="px-4 pb-6 pt-2 border-t border-border-soft"
          >
            <ul className="divide-y divide-border-soft">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  {item.id === "productos" ? (
                    <>
                      <button
                        onClick={() => setMobileProductsOpen((open) => !open)}
                        aria-expanded={mobileProductsOpen}
                        className="flex w-full items-center justify-between py-4 text-base font-medium text-fg cursor-pointer bg-transparent border-none transition-colors duration-200"
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileProductsOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`grid transition-[grid-template-rows] duration-200 ${
                          mobileProductsOpen
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden min-h-0">
                          <ul aria-label="Categorías de productos">
                            <li>
                              <button
                                onClick={() => scrollToSection("productos")}
                                className="w-full text-left py-3 pl-4 text-fg-secondary hover:text-fg cursor-pointer bg-transparent border-none transition-colors duration-200"
                              >
                                Ver todos los productos
                              </button>
                            </li>
                            {Object.entries(categoryNames).map(([id, name]) => (
                              <li key={id}>
                                <Link
                                  href={`/products/${id}`}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-3 pl-4 text-fg-secondary hover:text-fg transition-colors duration-200"
                                >
                                  {name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="w-full py-4 text-left text-base font-medium text-fg hover:text-fg-muted cursor-pointer bg-transparent border-none transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
