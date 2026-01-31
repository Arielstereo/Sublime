import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="contacto"
      className="py-32 bg-linear-to-r from-slate-50 to-slate-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 mx-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contactanos</h2>
          <p className="text-slate-600 text-base md:text-lg mx-auto max-w-2xl text-left md:text-center">
            ¿Tenés alguna consulta o querés solicitar un presupuesto? ¡Estamos
            aquí para ayudarte! No dudes en contactarnos a través de nuestras
            redes sociales o por correo electrónico.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="hidden sm:block">
            <Image
              src="/sublime.png"
              alt="Contacto"
              width={800}
              height={400}
              className="mx-auto mb-8"
            />
          </div>
          <div className="flex justify-center items-center px-8">
            {/* Social Links */}
            <div className="rounded-2xl p-8 shadow-lg bg-white border-2 border-cyan-400">
              <h3 className="font-bold text-2xl mb-6 text-center">
                Seguinos en Redes
              </h3>
              <div className="space-y-4">
                <a
                  href="https://instagram.com/sublime.emprendev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-graffiti-pink/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center">
                    <i
                      className="icon-[lucide--instagram] w-6 h-6 text-white"
                      role="img"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-muted-foreground text-sm">
                      sublime.emprendev
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61587309211928"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-graffiti-cyan/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center">
                    <i
                      className="icon-[uil--facebook-f] w-6 h-6 text-white"
                      role="img"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <p className="font-medium">Facebook</p>
                    <p className="text-muted-foreground text-sm">
                      Sublime By Emprendev
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:sublime.emprendev@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-graffiti-yellow/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                    <i
                      className="icon-[entypo--email] w-6 h-6 text-white"
                      role="img"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground text-sm">
                      sublime.emprendev@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
