const ProyectosHero = () => {
  return (
    <section
      className="text-white py-16 lg:py-20 relative overflow-hidden"
      style={{ backgroundColor: "#006400" }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Sectores que Apoyamos
          </h1>

          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
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
