const ServiciosHero = () => {
  return (
    <section className="bg-gradient-to-br from-[#5AB75B] via-[#33B779] to-[#B0C933] text-gray-900 py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B0C933]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white leading-tight">
            Servicios Ambientales
          </h1>

          <p className="text-xl lg:text-2xl text-white mb-10 leading-relaxed">
            Ofrecemos soluciones ambientales completas y personalizadas para
            empresas, organismos públicos y comunidades en toda la Patagonia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiciosHero;
