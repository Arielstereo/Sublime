import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-pink-200 md:px-8 md:py-2">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center justify-center">
          <span className="text-2xl font-semibold">Sublime</span>
          <Image
            width={200}
            height={200}
            src="/logo.png"
            alt="Sublime by Emprendev"
            className="h-10 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#servicios"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Servicios
          </a>
          <a
            href="#productos"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Productos
          </a>
          <a
            href="#contacto"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Contacto
          </a>
        </nav>

        <a
          href="https://wa.me/5491100000000"
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
        </a>
      </div>
    </header>
  );
};

export default Header;
