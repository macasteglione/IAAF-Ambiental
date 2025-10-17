const ContactoHero = () => {
  return (
    <section className="bg-[#33B779] text-white py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Contáctese con IAAF Ambiental
          </h1>

          <p className="text-xl lg:text-2xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto">
            Solicite una consultoría sin cargo. Nuestro equipo de expertos está
            listo para analizar sus necesidades ambientales y brindar soluciones
            personalizadas para su proyecto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactoHero;
