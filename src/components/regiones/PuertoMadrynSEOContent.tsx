const PuertoMadrynSEOContent = () => {
  return (
    <>
      {/* SEO Hidden Cities List */}
      <div className="sr-only">
        <h2>Áreas de Cobertura de Servicios Ambientales</h2>
        <p>
          Brindamos servicios de consultoría ambiental, estudios de impacto
          ambiental, gestión de residuos y auditorías ambientales en Puerto
          Madryn: Centro, Barrio Pujol, Barrio Fontana, Barrio Roque González,
          Barrio Belgrano, Barrio San Miguel, Barrio Alberdi, Parque Industrial
          Puerto Madryn, Zona Franca, Puerto Comercial, Zona Industrial
          Pesquera, Polo Científico Tecnológico, Playa El Doradillo, Punta Loma,
          Punta Cuevas, Costanera Puerto Madryn, Golfo Nuevo, Ecocentro, Muelle
          Luis Piedra Buena, Aeropuerto El Tehuelche, Terminal de Ómnibus,
          Planta de Tratamiento, Vertedero Municipal, Zona Gastronómica, Bulevar
          Brown, Avenida Roca, Istmo Ameghino, Puerto Pirámides, Península
          Valdés y toda la ciudad de Puerto Madryn.
        </p>
      </div>

      {/* Event Images */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/img/puerto-madryn-region01.png"
                alt="Puerto Madryn - Costa patagónica y área de cobertura de servicios ambientales"
                className="w-full h-64 object-cover"
                loading="lazy"
                width={800}
                height={384}
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/img/puerto-madryn-region02.jpg"
                alt="Equipo de IAAF Ambiental brindando servicios ambientales en la costa de Chubut"
                className="w-full h-64 object-cover"
                loading="lazy"
                width={800}
                height={384}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PuertoMadrynSEOContent;
