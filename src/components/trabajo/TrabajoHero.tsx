const TrabajoHero = () => {
  return (
    <section 
      className="text-white min-h-[550px] sm:min-h-[500px] lg:min-h-[550px] relative overflow-hidden flex items-center pt-16 sm:pt-20 pb-8 sm:pb-12 bg-gradient-to-br from-brand-teal via-brand-green to-brand-lime"
    >
      {/* Patrón decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 60%, rgba(255,255,255,0.15) 0%, transparent 50%),
                           radial-gradient(circle at 75% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            Trabajá con Nosotros
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/95 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
            Formá parte de un equipo comprometido con el medio ambiente y el desarrollo
            sustentable en la Patagonia. Descubrí nuestras oportunidades laborales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrabajoHero;