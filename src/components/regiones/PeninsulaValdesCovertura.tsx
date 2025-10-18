const PeninsulaValdesCovertura = () => {
  const areas = [
    {
      title: "Zona Norte",
      cities: [
        "Punta Norte",
        "Caleta Valdés",
        "Punta Cantor",
        "Zona de Orcas",
        "Lobería Punta Norte",
        "Zona de Elefantes Marinos",
        "Pingüinera",
        "Área de Avistaje",
        "Mirador Norte",
        "Zona Costera Norte",
      ],
    },
    {
      title: "Zona Sur",
      cities: [
        "Punta Delgada",
        "Faro Punta Delgada",
        "Lobería Punta Delgada",
        "Zona de Elefantes Marinos Sur",
        "Mirador Sur",
        "Playa Sur",
        "Área de Conservación",
        "Zona Costera Sur",
        "Punta Pirámide",
        "Zona de Fauna",
      ],
    },
    {
      title: "Puerto Pirámides",
      cities: [
        "Puerto Pirámides Centro",
        "Zona de Avistaje de Ballenas",
        "Playa Principal",
        "Zona Hotelera",
        "Zona Comercial",
        "Embarcadero",
        "Zona Turística",
        "Alojamientos",
        "Restaurantes",
        "Servicios Turísticos",
      ],
    },
    {
      title: "Istmo Ameghino",
      cities: [
        "Istmo Carlos Ameghino",
        "Puerta de Acceso",
        "Centro de Interpretación",
        "Zona de Ingreso",
        "Área de Control",
        "Mirador del Istmo",
        "Zona de Información",
        "Acceso Principal",
        "Área de Servicios",
        "Zona de Recepción",
      ],
    },
    {
      title: "Golfos y Costas",
      cities: [
        "Golfo Nuevo",
        "Golfo San José",
        "Costa Atlántica",
        "Playas Protegidas",
        "Zona de Mareas",
        "Costas Rocosas",
        "Bahías",
        "Zona Intermareal",
        "Área Marina",
        "Ecosistema Costero",
      ],
    },
    {
      title: "Área Protegida",
      cities: [
        "Reserva Natural",
        "Patrimonio UNESCO",
        "Zona de Conservación",
        "Hábitat de Fauna",
        "Área de Protección",
        "Zona Intangible",
        "Ecosistema Único",
        "Fauna Marina Protegida",
        "Zona de Investigación",
        "Área de Monitoreo",
      ],
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Cobertura de Servicios Ambientales en Península Valdés
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

export default PeninsulaValdesCovertura;
