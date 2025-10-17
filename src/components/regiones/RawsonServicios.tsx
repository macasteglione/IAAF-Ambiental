
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Waves, FileText } from "lucide-react";

const RawsonServicios = () => {
  const services = [
    {
      icon: Building2,
      title: "Proyectos Gubernamentales",
      description: "Servicios ambientales especializados para proyectos del gobierno provincial y organismos del estado.",
      features: [
        "Edificios Públicos",
        "Infraestructura Provincial",
        "Ministerios y Organismos",
        "Obras de Desarrollo Urbano",
        "Proyectos de Infraestructura",
        "Gestión de Permisos"
      ],
      suitableFor: ["Gobierno Provincial", "Municipalidad", "Organismos Públicos", "Obras Públicas"]
    },
    {
      icon: Waves,
      title: "Proyectos Costeros y Turísticos",
      description: "Asesoramiento ambiental para proyectos turísticos en Playa Unión, Puerto Rawson y zona costera.",
      features: [
        "Hoteles y Alojamientos",
        "Restaurantes Costeros",
        "Balnearios y Playas",
        "Puerto Rawson",
        "Emprendimientos Turísticos",
        "Desarrollo Costero"
      ],
      suitableFor: ["Playa Unión", "Puerto Rawson", "Hoteles", "Gastronomía"]
    },
    {
      icon: FileText,
      title: "Estudios y Auditorías",
      description: "Estudios de impacto ambiental y auditorías para proyectos comerciales y de servicios en la capital.",
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
          Nuestros Servicios Ambientales en Rawson
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

export default RawsonServicios;
