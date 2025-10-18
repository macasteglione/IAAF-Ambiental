const ProyectosHero = () => {
  return (
    <section className="text-gray-900 h-[550px] lg:h-[550px] relative overflow-hidden flex items-center pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/img/proyectos-hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white leading-tight">
            Sectores que Apoyamos
          </h1>

          <p className="text-xl lg:text-2xl text-white mb-8 leading-relaxed max-w-3xl mx-auto">
            IAAF Ambiental brinda soluciones especializadas a diversos sectores
            productivos, desde pequeñas comunidades hasta grandes proyectos
            industriales y de infraestructura en toda la Patagonia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProyectosHero;
