
const PuertoMadrynCovertura = () => {
  const areas = [
    {
      title: "Zona Urbana",
      cities: ["Centro", "Barrio Pujol", "Barrio Fontana", "Barrio Roque González", "Barrio Belgrano", "Barrio San Miguel", "Barrio Alberdi", "Barrio Pueyrredón", "Barrio Julio A. Roca", "Barrio Gobernador Fontana"]
    },
    {
      title: "Área Industrial y Comercial",
      cities: ["Parque Industrial", "Zona Franca", "Puerto Comercial", "Zona Industrial Pesquera", "Polo Científico Tecnológico", "Zona Comercial Centro", "Avenida Roca", "Bulevar Brown", "Zona Gastronómica", "Complejo Punta Cuevas"]
    },
    {
      title: "Zona Costera", 
      cities: ["Playa El Doradillo", "Punta Loma", "Playa Paraná", "Playa Kaiser", "Playa Unión", "Punta Cuevas", "Costanera", "Muelle Luis Piedra Buena", "Golfo Nuevo", "Frente Marítimo"]
    },
    {
      title: "Atractivos Turísticos",
      cities: ["Ecocentro", "Punta Loma (Lobos Marinos)", "Playa El Doradillo (Ballenas)", "Punta Cuevas", "Museo del Hombre y el Mar", "Monumento Natural", "Istmo Ameghino", "Puerto Pirámides", "Península Valdés", "Reserva Natural"]
    },
    {
      title: "Servicios Públicos",
      cities: ["Planta de Tratamiento", "Vertedero Municipal", "Planta Potabilizadora", "Red Cloacal", "Sistema de Agua Potable", "Aeropuerto El Tehuelche", "Terminal de Ómnibus", "Puerto Madryn", "Infraestructura Urbana", "Servicios Sanitarios"]
    },
    {
      title: "Zona de Expansión",
      cities: ["Nuevos Desarrollos Urbanos", "Zona Residencial Norte", "Zona Residencial Sur", "Proyectos Turísticos", "Emprendimientos Inmobiliarios", "Barrios Privados", "Loteos", "Zona de Chacras", "Periferia Urbana", "Área de Crecimiento"]
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Cobertura de Servicios Ambientales en Puerto Madryn
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

export default PuertoMadrynCovertura;
