import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trees, Mountain, Hotel } from "lucide-react";

const ComarcaAlercesServicios = () => {
  const services = [
    {
      icon: Trees,
      title: "Proyectos Forestales",
      description:
        "Servicios ambientales especializados para proyectos forestales y conservación de bosques nativos.",
      features: [
        "Bosques Andino-Patagónicos",
        "Conservación de Alerces",
        "Gestión Forestal Sustentable",
        "Reforestación",
        "Manejo de Bosques Nativos",
        "Proyectos de Conservación",
      ],
      suitableFor: [
        "Bosques Nativos",
        "Conservación",
        "Reforestación",
        "Gestión Forestal",
      ],
    },
    {
      icon: Mountain,
      title: "Parque Nacional y Áreas Protegidas",
      description:
        "Asesoramiento ambiental para proyectos en Parque Nacional Los Alerces y áreas protegidas.",
      features: [
        "Parque Nacional Los Alerces",
        "Turismo Sustentable",
        "Conservación de Ecosistemas",
        "Proyectos de Investigación",
        "Normativas de Área Protegida",
        "Educación Ambiental",
      ],
      suitableFor: [
        "Área Protegida",
        "Turismo",
        "Investigación",
        "Conservación",
      ],
    },
    {
      icon: Hotel,
      title: "Turismo Cordillerano",
      description:
        "Estudios ambientales para proyectos turísticos en zona de montaña y lagos.",
      features: [
        "Hoteles y Hosterías",
        "Centros de Esquí",
        "Campings y Refugios",
        "Turismo de Aventura",
        "Gastronomía Regional",
        "Infraestructura Turística",
      ],
      suitableFor: ["Hoteles", "Esquí", "Turismo", "Gastronomía"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Nuestros Servicios Ambientales en Comarca Los Alerces
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

export default ComarcaAlercesServicios;
