"use client";
import Link from "next/link";
import CircularText from "./CircularText";

const socials = [
  {
    name: "Instagram",
    handle: "sublime.emprendev",
    href: "https://instagram.com/sublime.emprendev",
    icon: "icon-[lucide--instagram]",
    color: "bg-accent",
  },
  {
    name: "Facebook",
    handle: "Sublime By Emprendev",
    href: "https://www.facebook.com/profile.php?id=61587309211928",
    icon: "icon-[uil--facebook-f]",
    color: "bg-accent",
  },
  {
    name: "Email",
    handle: "sublime.emprendev@gmail.com",
    href: "mailto:sublime.emprendev@gmail.com",
    icon: "icon-[entypo--email]",
    color: "bg-accent",
  },
];

const Contact = () => {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-ink-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-14 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Contactanos
          </h2>
          <p className="text-fg-secondary text-base md:text-lg max-w-2xl text-pretty">
            ¿Tenés alguna consulta o querés solicitar un presupuesto? ¡Estamos
            aquí para ayudarte! No dudes en contactarnos a través de nuestras
            redes sociales o por correo electrónico.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="flex-1">
            <CircularText
              text="SUBLIME*BY*EMPRENDEV*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-auto">
            <div className="dark-card rounded-2xl p-8 w-full max-w-sm">
              <h3 className="font-bold text-2xl mb-6 text-center">
                Seguinos en Redes
              </h3>
              <div className="space-y-3">
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-ink-800 transition-colors duration-200 group"
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${social.color}`}
                    >
                      <i
                        className={`${social.icon} w-6 h-6 text-white`}
                        role="img"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div>
                      <p className="font-medium">{social.name}</p>
                      <p className="text-fg-muted text-sm">{social.handle}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
