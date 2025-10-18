const GaimanCovertura = () => {
  const areas = [
    {
      title: "Zona Urbana",
      cities: [
        "Centro Histórico",
        "Barrio Trevelin",
        "Barrio 28 de Julio",
        "Barrio Galés",
        "Barrio Belgrano",
        "Barrio San Martín",
        "Barrio Rivadavia",
        "Zona Residencial",
        "Calle Michael D. Jones",
        "Calle Tello",
      ],
    },
    {
      title: "Zona Turística",
      cities: [
        "Casas de Té Galesas",
        "Museo Histórico Regional",
        "Capilla Bethel",
        "Capilla Vieja",
        "Parque Paleontológico",
        "Túnel del Amor",
        "Primera Casa",
        "Parque El Desafío",
        "Circuito Turístico",
        "Zona de Servicios Turísticos",
      ],
    },
    {
      title: "Chacras y Zona Rural",
      cities: [
        "Chacras Norte",
        "Chacras Sur",
        "Chacras Este",
        "Chacras Oeste",
        "Establecimientos Agropecuarios",
        "Zona de Riego",
        "Campos Productivos",
        "Quintas",
        "Huertas",
        "Zona Agrícola",
      ],
    },
    {
      title: "Comercios y Servicios",
      cities: [
        "Casas de Té",
        "Restaurantes",
        "Artesanías",
        "Comercios Locales",
        "Panaderías Galesas",
        "Servicios Turísticos",
        "Alojamientos",
        "Zona Comercial Centro",
        "Locales Gastronómicos",
        "Emprendimientos Locales",
      ],
    },
    {
      title: "Patrimonio Cultural",
      cities: [
        "Capillas Históricas",
        "Museos",
        "Edificios Patrimoniales",
        "Cementerio Galés",
        "Monumentos",
        "Sitios Históricos",
        "Arquitectura Galesa",
        "Espacios Culturales",
        "Biblioteca",
        "Centro Cultural",
      ],
    },
    {
      title: "Zona de Expansión",
      cities: [
        "Nuevos Desarrollos",
        "Zona Residencial Norte",
        "Zona Residencial Sur",
        "Loteos",
        "Proyectos Turísticos",
        "Emprendimientos",
        "Área de Crecimiento",
        "Periferia Urbana",
        "Zona de Desarrollo",
        "Nuevos Barrios",
      ],
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Cobertura de Servicios Ambientales en Gaiman
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

export default GaimanCovertura;
