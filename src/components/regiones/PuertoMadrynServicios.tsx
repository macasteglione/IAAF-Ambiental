import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Leaf, FileText, Shield } from "lucide-react";

const PuertoMadrynServicios = () => {
  const services = [
    {
      icon: FileText,
      title: "Estudios de Impacto Ambiental",
      description:
        "Evaluaciones ambientales completas para proyectos de todos los tamaños con profesionales calificados y metodologías actualizadas.",
      features: [
        "Evaluación de Impacto Ambiental",
        "Estudios de Línea de Base",
        "Análisis de Alternativas",
        "Evaluación de Riesgos",
        "Planes de Monitoreo",
        "Gestión de Permisos",
      ],
      suitableFor: [
        "Proyectos Turísticos",
        "Desarrollos Industriales",
        "Infraestructura",
        "Energía",
      ],
    },
    {
      icon: Leaf,
      title: "Gestión y Auditoría Ambiental",
      description:
        "Servicios de gestión ambiental equipados con herramientas avanzadas para un control integral de sus operaciones.",
      features: [
        "Auditorías Ambientales",
        "Sistemas de Gestión ISO 14001",
        "Planes de Gestión Ambiental",
        "Monitoreo de Cumplimiento",
        "Capacitación Ambiental",
        "Seguimiento Normativo",
      ],
      suitableFor: [
        "Grandes Empresas",
        "Zonas Remotas",
        "Proyectos Continuos",
        "Actividades de Alto Riesgo",
      ],
    },
    {
      icon: Shield,
      title: "Monitoreo y Planes de Contingencia",
      description:
        "Equipos profesionales de monitoreo y servicios de respuesta para intervención inmediata ante emergencias ambientales.",
      features: [
        "Monitoreo de Calidad Ambiental",
        "Planes de Contingencia",
        "Gestión de Incidentes",
        "Monitoreo de Fauna y Flora",
        "Control de Emisiones",
        "Asesoramiento Especializado",
      ],
      suitableFor: [
        "Proyectos Costeros",
        "Actividades Industriales",
        "Eventos Comunitarios",
        "Pequeños Emprendimientos",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Nuestros Servicios Ambientales en Puerto Madryn
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

export default PuertoMadrynServicios;
