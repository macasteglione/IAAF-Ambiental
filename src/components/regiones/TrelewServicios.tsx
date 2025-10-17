
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Sprout, FileText } from "lucide-react";

const TrelewServicios = () => {
  const services = [
    {
      icon: Factory,
      title: "Proyectos Industriales",
      description: "Servicios ambientales completos para proyectos industriales con profesionales especializados en el sector productivo.",
      features: [
        "Frigoríficos y Plantas Procesadoras",
        "Industria Textil",
        "Sector Metalúcrgico",
        "Evaluación de Riesgos",
        "Gestión de Efluentes",
        "Planes de Gestión Ambiental"
      ],
      suitableFor: ["Parque Industrial", "Plantas Procesadoras", "Industrias", "Emprendimientos Productivos"]
    },
    {
      icon: Sprout,
      title: "Proyectos Agropecuarios",
      description: "Asesoramiento ambiental especializado para actividades agropecuarias y productivas del Valle Inferior.",
      features: [
        "Chacras y Establecimientos",
        "Proyectos Ganaderos",
        "Riego y Drenaje",
        "Uso de Agroquímicos",
        "Gestión de Residuos Agrícolas",
        "Monitoreo de Suelos"
      ],
      suitableFor: ["Chacras", "Establecimientos Ganaderos", "Proyectos Agrícolas", "Actividades Rurales"]
    },
    {
      icon: FileText,
      title: "Estudios y Auditorías",
      description: "Estudios de impacto ambiental y auditorías para proyectos comerciales y de servicios.",
      features: [
        "Estudios de Impacto Ambiental",
        "Auditorías Ambientales",
        "Planes de Gestión",
        "Monitoreo Ambiental",
        "Gestión de Permisos",
        "Asesoramiento Normativo"
      ],
      suitableFor: ["Comercios", "Servicios", "Desarrollos Urbanos", "Infraestructura"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Nuestros Servicios Ambientales en Trelew
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Características del Servicio:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Adecuado Para:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.suitableFor.map((item, idx) => (
                      <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrelewServicios;
