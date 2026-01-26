import Image from "next/image";
import { Orbitron } from "next/font/google";
import Link from "next/link";

const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-pink-200 md:px-8 md:py-2">
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
          <Link href="#servicios" className="hover:text-blue-400 ">
            Servicios
          </Link>
          <Link href="#productos" className="hover:text-blue-400 ">
            Productos
          </Link>
          <Link href="#contacto" className="hover:text-blue-400 ">
            Contacto
          </Link>
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
