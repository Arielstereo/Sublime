import Image from "next/image";
import Link from "next/link";

const works = [
  {
    badge: "Expo Equo",
    title: "Merchandising para expo",
    text: "Producción completa para la expo de Equo en Bruselas: remeras, totebags, anotadores y llaveros con la identidad de la empresa.",
    image: "/ej2.jpeg",
    instagram:
      "https://www.instagram.com/p/DXpnkcVGv5J/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    badge: "Tredi Argentina",
    title: "Regalos corporativos",
    text: "Tazas, mate y totebags personalizadas para la empresa Tredi Argentina, con logo y colores de marca.",
    image: "/tredi.png",
    instagram:
      "https://www.instagram.com/p/DZIZu5ZltQQ/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    badge: "Evento Infantil",
    title: "Souvenirs para cumpleaños",
    text: "Productos personalizados para eventos infantiles: kits, souvenirs y regalos con el diseño del agasajado.",
    image: "/cumple.jpeg",
    instagram:
      "https://www.instagram.com/p/DYfjJLwmlMg/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
];

const Works = () => {
  return (
    <section id="trabajos" className="py-20 md:py-32 bg-ink-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-14 md:mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Nuestros trabajos
          </h2>
          <p className="text-fg-secondary text-base md:text-lg max-w-2xl text-pretty">
            Cada pedido es una producción personalizada. Mirá algunos trabajos
            reales: empresas, oficinas y eventos para los que sublimamos sus
            productos.
          </p>
        </div>

        <div className="flex flex-col gap-14 md:gap-24 w-full md:w-5/6 mx-auto">
          {works.map((work, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={work.badge}
                className="grid md:grid-cols-2 gap-6 md:gap-12 items-center"
              >
                <div
                  className={`group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border-soft bg-ink-700 ${
                    reversed ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={work.image}
                    alt={`${work.title} · ${work.badge}`}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent"></div>
                  <span className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-ink-950/70 backdrop-blur-md border border-border-strong text-sm font-semibold">
                    {work.badge}
                  </span>
                </div>

                <div className={reversed ? "md:order-1" : ""}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                    {work.title}
                  </h3>
                  <p className="text-fg-secondary text-base md:text-lg text-pretty mb-6">
                    {work.text}
                  </p>
                  <Link
                    href={work.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent-strong font-semibold group/link hover:gap-3 transition-all duration-200"
                  >
                    Ver en Instagram
                    <span
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent-soft group-hover/link:bg-accent group-hover/link:text-white transition-colors duration-200"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="mt-16 md:mt-24 text-center">
          <Link
            href={waLink(
              "Hola, quiero que mi empresa o evento sea el próximo trabajo. ¿Cómo armamos una propuesta personalizada?",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-72 cursor-pointer justify-center border border-accent/60 hover:bg-accent-soft text-accent-strong font-semibold py-3 px-6 rounded-xl transition duration-200 active:scale-[0.97]"
          >
            Tu empresa puede ser el próximo
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Works;
