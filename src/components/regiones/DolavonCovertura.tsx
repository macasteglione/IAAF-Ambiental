
const DolavonCovertura = () => {
  const areas = [
    {
      title: "Zona Histórica",
      cities: ["Molino Harinero Andes", "Molino Harinero Viejo", "Molino Harinero Central", "Centro Histórico", "Edificios Patrimoniales", "Museo Regional", "Capilla Galesa", "Arquitectura Histórica", "Monumentos", "Sitios Patrimoniales"]
    },
    {
      title: "Zona Urbana",
      cities: ["Dolavon Centro", "Barrio Histórico", "Barrio Norte", "Barrio Sur", "Barrio Este", "Barrio Oeste", "Zona Residencial", "Barrios Periféricos", "Zona de Viviendas", "Área Urbana"]
    },
    {
      title: "Chacras y Zona Rural", 
      cities: ["Chacras Norte", "Chacras Sur", "Chacras Este", "Chacras Oeste", "Establecimientos Agropecuarios", "Zona de Riego", "Campos Productivos", "Quintas", "Huertas", "Zona Agrícola"]
    },
    {
      title: "Zona Turística",
      cities: ["Circuito de Molinos", "Paseo Turístico", "Zona de Servicios Turísticos", "Alojamientos", "Restaurantes", "Artesanías", "Emprendimientos Turísticos", "Casas de Té", "Guías Turísticas", "Atractivos Culturales"]
    },
    {
      title: "Comercios y Servicios",
      cities: ["Centro Comercial", "Comercios Locales", "Servicios", "Locales Gastronómicos", "Panaderías", "Almacenes", "Emprendimientos", "Oficinas", "Servicios Turísticos", "Negocios Locales"]
    },
    {
      title: "Zona de Expansión",
      cities: ["Nuevos Desarrollos", "Zona Residencial Norte", "Zona Residencial Sur", "Loteos", "Proyectos Inmobiliarios", "Barrios en Construcción", "Área de Crecimiento", "Periferia Urbana", "Zona de Desarrollo", "Emprendimientos Nuevos"]
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Cobertura de Servicios Ambientales en Dolavon
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

export default DolavonCovertura;
