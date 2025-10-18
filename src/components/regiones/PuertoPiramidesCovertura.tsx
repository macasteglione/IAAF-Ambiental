const PuertoPiramidesCovertura = () => {
  const areas = [
    {
      title: "Zona Costera",
      cities: [
        "Playa Principal",
        "Zona de Avistaje de Ballenas",
        "Embarcadero",
        "Playa Norte",
        "Playa Sur",
        "Costanera",
        "Frente Marítimo",
        "Zona de Buceo",
        "Área de Kayak",
        "Zona de Snorkel",
      ],
    },
    {
      title: "Zona Hotelera y Turística",
      cities: [
        "Hoteles",
        "Hosterías",
        "Cabañas",
        "Apart Hoteles",
        "Alojamientos Turísticos",
        "Campings",
        "Zona de Servicios Turísticos",
        "Restaurantes",
        "Locales Gastronómicos",
        "Emprendimientos Turísticos",
      ],
    },
    {
      title: "Zona Comercial",
      cities: [
        "Centro Comercial",
        "Comercios Locales",
        "Artesanías",
        "Tiendas de Souvenirs",
        "Servicios Turísticos",
        "Agencias de Excursiones",
        "Operadores de Avistaje",
        "Locales de Buceo",
        "Guías Turísticas",
        "Servicios Náuticos",
      ],
    },
    {
      title: "Península Valdés",
      cities: [
        "Reserva Natural",
        "Área Protegida UNESCO",
        "Zona de Conservación",
        "Hábitat de Fauna Marina",
        "Zona de Lobos Marinos",
        "Zona de Elefantes Marinos",
        "Área de Aves",
        "Zona de Pingüinos",
        "Ecosistema Costero",
        "Patrimonio Natural",
      ],
    },
    {
      title: "Zona Residencial",
      cities: [
        "Puerto Pirámides Centro",
        "Barrio Residencial",
        "Zona de Viviendas",
        "Barrio Norte",
        "Barrio Sur",
        "Área Urbana",
        "Zona Habitacional",
        "Viviendas Permanentes",
        "Residencias",
        "Barrios Locales",
      ],
    },
    {
      title: "Infraestructura y Servicios",
      cities: [
        "Servicios Públicos",
        "Planta de Tratamiento",
        "Sistema de Agua",
        "Infraestructura Urbana",
        "Terminal de Ómnibus",
        "Estación de Servicio",
        "Centro de Interpretación",
        "Museo",
        "Oficina de Turismo",
        "Servicios Sanitarios",
      ],
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Cobertura de Servicios Ambientales en Puerto Pirámides
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

export default PuertoPiramidesCovertura;
