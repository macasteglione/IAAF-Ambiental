
const TrelewCoverageAreas = () => {
  const areas = [
    {
      title: "Zona Urbana Central",
      cities: ["Centro", "Barrio Centenario", "Barrio Don Bosco", "Barrio Moreira", "Barrio Belgrano", "Barrio San Martín", "Barrio Planta de Gas", "Barrio Inta", "Barrio Menfa", "Barrio Progreso"]
    },
    {
      title: "Parque Industrial",
      cities: ["Parque Industrial Trelew", "Zona Industrial Pesquera", "Frigoríficos", "Plantas Procesadoras", "Industria Textil", "Sector Metalúrgico", "Zona Franca", "Empresas Productivas", "Talleres Industriales", "Depósitos"]
    },
    {
      title: "Zona Comercial", 
      cities: ["Avenida Fontana", "Calle 25 de Mayo", "Calle San Martín", "Calle Belgrano", "Zona Comercial Centro", "Galerías Comerciales", "Supermercados", "Locales Comerciales", "Oficinas", "Bancos"]
    },
    {
      title: "Chacras y Zona Rural",
      cities: ["Chacras Norte", "Chacras Sur", "Chacras Este", "Chacras Oeste", "Establecimientos Agropecuarios", "Zona de Riego", "Campos Productivos", "Quintas", "Huertas", "Zona Agrícola"]
    },
    {
      title: "Servicios Públicos",
      cities: ["Planta de Tratamiento", "Vertedero Municipal", "Planta Potabilizadora", "Red Cloacal", "Sistema de Agua", "Aeropuerto Trelew", "Terminal de Ómnibus", "Estación de Servicio", "Infraestructura Urbana", "Servicios Sanitarios"]
    },
    {
      title: "Zona de Expansión",
      cities: ["Nuevos Barrios", "Zona Residencial Norte", "Zona Residencial Sur", "Desarrollos Inmobiliarios", "Loteos Nuevos", "Barrios en Construcción", "Zona de Crecimiento", "Periferia Urbana", "Área de Desarrollo", "Proyectos Urbanos"]
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Cobertura de Servicios Ambientales en Trelew
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

export default TrelewCoverageAreas;
