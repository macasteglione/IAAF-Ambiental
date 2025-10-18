import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Binoculars, TreePine } from "lucide-react";

const PeninsulaValdesServicios = () => {
  const services = [
    {
      icon: Shield,
      title: "Conservación y Patrimonio UNESCO",
      description:
        "Servicios ambientales especializados para proyectos en Patrimonio de la Humanidad UNESCO.",
      features: [
        "Patrimonio UNESCO",
        "Área Natural Protegida",
        "Conservación de Fauna",
        "Normativas Internacionales",
        "Gestión de Área Protegida",
        "Planes de Conservación",
      ],
      suitableFor: [
        "Proyectos UNESCO",
        "Conservación",
        "Área Protegida",
        "Investigación",
      ],
    },
    {
      icon: Binoculars,
      title: "Monitoreo de Fauna Marina",
      description:
        "Estudios y monitoreo de fauna marina protegida en la Península Valdés.",
      features: [
        "Ballenas Francas",
        "Orcas y Lobos Marinos",
        "Elefantes Marinos",
        "Pingüinos de Magallanes",
        "Monitoreo de Especies",
        "Estudios de Población",
      ],
      suitableFor: [
        "Monitoreo",
        "Investigación",
        "Conservación",
        "Fauna Marina",
      ],
    },
    {
      icon: TreePine,
      title: "Turismo Sustentable",
      description:
        "Asesoramiento ambiental para proyectos de turismo sustentable en área protegida.",
      features: [
        "Turismo Responsable",
        "Infraestructura Sustentable",
        "Avistaje de Fauna",
        "Emprendimientos Turísticos",
        "Educación Ambiental",
        "Gestión de Visitantes",
      ],
      suitableFor: ["Turismo", "Avistaje", "Emprendimientos", "Educación"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Nuestros Servicios Ambientales en Península Valdés
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
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
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
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
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
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

export default PeninsulaValdesServicios;
