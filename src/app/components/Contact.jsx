import Image from "next/image";

const Contact = () => {
  return (
    <section id="contacto" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-gradient-graffiti mb-4">
            ¡Contactanos!
          </h2>
          <p className="text-slate-600 text-base md:text-lg mx-auto">
            Estamos para ayudarte a crear productos únicos. ¡Escribinos y hacé
            tu pedido!
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
                  href="https://facebook.com/sublimebyemprendev"
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
                      Sublime by Emprendev
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
