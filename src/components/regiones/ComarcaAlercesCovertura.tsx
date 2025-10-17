
const ComarcaAlercesCovertura = () => {
  const areas = [
    {
      title: "Esquel",
      cities: ["Esquel Centro", "Barrio Norte", "Barrio Sur", "La Hoya", "Zona Comercial", "Zona Residencial", "Zona Industrial", "Barrios Periféricos", "Zona de Servicios", "Área Urbana"]
    },
    {
      title: "Trevelin",
      cities: ["Trevelin Centro", "Zona Galesa", "Molino Nant Fach", "Zona Rural", "Chacras", "Zona de Producción", "Barrios", "Zona Turística", "Área Histórica", "Zona de Servicios"]
    },
    {
      title: "Parque Nacional Los Alerces", 
      cities: ["Parque Nacional", "Lago Futalaufquen", "Lago Verde", "Lago Menéndez", "Río Arrayanes", "Bosques de Alerces", "Zona de Conservación", "Área Protegida", "Senderos", "Zona de Camping"]
    },
    {
      title: "Zona Norte",
      cities: ["Lago Puelo", "El Hoyo", "Epuyén", "Cholila", "El Maitén", "Zona de Lagos", "Zona de Montaña", "Valles", "Zona Rural Norte", "Área Cordillerana Norte"]
    },
    {
      title: "Zona Sur",
      cities: ["Corcovado", "Carrenleufú", "Aldea Epulef", "Lago Rosario", "Zona Rural Sur", "Zona de Montaña Sur", "Valles del Sur", "Área Cordillerana Sur", "Zona Fronteriza", "Zona de Producción"]
    },
    {
      title: "Zona Cordillerana",
      cities: ["Cordillera de los Andes", "Bosques Andino-Patagónicos", "Lagos Cordilleranos", "Ríos de Montaña", "Zona de Nieve", "Centros de Esquí", "Zona de Trekking", "Áreas Naturales", "Zona de Conservación", "Ecosistema Cordillerano"]
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Cobertura de Servicios Ambientales en Comarca Los Alerces
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

export default ComarcaAlercesCovertura;
