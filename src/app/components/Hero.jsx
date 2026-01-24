import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden border-b border-slate-300 py-20">
      <div className="container mx-auto px-4 text-center relative z-10">
        <Image
          width={800}
          height={400}
          src="/sublime.png"
          alt="Sublime by Emprendev"
          className="mx-auto max-w-full h-auto max-h-[50vh] object-contain animate-fade-in drop-shadow-2xl"
        />

        <h1 className="text-xl md:text-2xl text-black font-semibold max-w-2xl mx-auto animate-fade-in">
          Personalizamos tus ideas con productos de alta calidad
        </h1>

        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in">
          Diseños únicos para cada ocasión
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <button className="w-64 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
            Ver productos
          </button>
          <button className="w-64 border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-100 bg-white hover:text-cyan-700 font-bold py-3 px-6 rounded-lg transition duration-200">
            Contactanos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
