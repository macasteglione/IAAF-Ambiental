import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Home, Sprout, Building2 } from "lucide-react";

const GaimanServices = () => {
  const services = [
    {
      icon: Home,
      title: "Proyectos Turísticos",
      description:
        "Servicios ambientales especializados para emprendimientos turísticos respetando el patrimonio cultural galesa.",
      features: [
        "Casas de Té Galesas",
        "Alojamientos Turísticos",
        "Restaurantes y Gastronomía",
        "Circuitos Turísticos",
        "Turismo Rural",
        "Preservación Patrimonial",
      ],
      suitableFor: [
        "Casas de Té",
        "Hoteles",
        "Restaurantes",
        "Emprendimientos Turísticos",
      ],
    },
    {
      icon: Sprout,
      title: "Proyectos Agropecuarios",
      description:
        "Asesoramiento ambiental para chacras y establecimientos agropecuarios tradicionales del valle.",
      features: [
        "Chacras y Quintas",
        "Producción Agrícola",
        "Sistemas de Riego",
        "Huertas Orgánicas",
        "Gestión de Residuos Agrícolas",
        "Monitoreo de Suelos",
      ],
      suitableFor: [
        "Chacras",
        "Quintas",
        "Establecimientos Agrícolas",
        "Huertas",
      ],
    },
    {
      icon: Building2,
      title: "Patrimonio y Desarrollo",
      description:
        "Estudios ambientales para proyectos que preserven el patrimonio histórico y cultural galesa.",
      features: [
        "Estudios de Impacto Ambiental",
        "Preservación Patrimonial",
        "Desarrollos Inmobiliarios",
        "Comercios Locales",
        "Gestión de Permisos",
        "Asesoramiento Cultural",
      ],
      suitableFor: [
        "Edificios Históricos",
        "Comercios",
        "Desarrollos",
        "Proyectos Culturales",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Nuestros Servicios Ambientales en Gaiman
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-brand-lime/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-brand-green" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Características del Servicio:
                  </h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Adecuado Para:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {service.suitableFor.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-brand-lime/10 text-brand-dark text-xs px-2 py-1 rounded"
                      >
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

export default GaimanServices;
