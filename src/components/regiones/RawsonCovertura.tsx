const RawsonCovertura = () => {
  const areas = [
    {
      title: "Zona Administrativa",
      cities: [
        "Casa de Gobierno",
        "Legislatura Provincial",
        "Ministerios",
        "Tribunales",
        "Municipalidad",
        "Organismos Provinciales",
        "Oficinas Públicas",
        "Edificios Gubernamentales",
        "Centro Cívico",
        "Instituciones Provinciales",
      ],
    },
    {
      title: "Zona Urbana",
      cities: [
        "Rawson Centro",
        "Barrio Playa Magagna",
        "Barrio Don Bosco",
        "Barrio Belgrano",
        "Barrio San Martín",
        "Barrio Rawson Norte",
        "Barrio Rawson Sur",
        "Zona Residencial",
        "Barrios Periféricos",
        "Zona de Viviendas",
      ],
    },
    {
      title: "Zona Costera",
      cities: [
        "Playa Unión",
        "Puerto Rawson",
        "Playa Magagna",
        "Costanera",
        "Zona Portuaria",
        "Balnearios",
        "Frente Marítimo",
        "Zona de Playas",
        "Paseo Costero",
        "Área Recreativa Costera",
      ],
    },
    {
      title: "Zona Comercial y Servicios",
      cities: [
        "Centro Comercial",
        "Zona de Servicios",
        "Comercios Locales",
        "Restaurantes",
        "Hoteles",
        "Servicios Turísticos",
        "Locales Gastronómicos",
        "Emprendimientos",
        "Oficinas",
        "Bancos",
      ],
    },
    {
      title: "Infraestructura y Servicios Públicos",
      cities: [
        "Planta de Tratamiento",
        "Sistema Cloacal",
        "Red de Agua Potable",
        "Infraestructura Urbana",
        "Servicios Sanitarios",
        "Vertedero",
        "Planta Potabilizadora",
        "Terminal de Ómnibus",
        "Servicios Públicos",
        "Infraestructura Provincial",
      ],
    },
    {
      title: "Zona de Expansión",
      cities: [
        "Nuevos Desarrollos",
        "Zona Residencial Norte",
        "Zona Residencial Sur",
        "Loteos",
        "Proyectos Inmobiliarios",
        "Barrios en Construcción",
        "Área de Crecimiento",
        "Periferia Urbana",
        "Zona de Desarrollo",
        "Emprendimientos Nuevos",
      ],
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Cobertura de Servicios Ambientales en Rawson
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {areas.map((area, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-3">{area.title}</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {area.cities.map((city, cityIndex) => (
                  <li key={cityIndex}>{city}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RawsonCovertura;
