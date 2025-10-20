import { Card, CardContent } from "@/components/ui/card";
import {
  Leaf,
  Recycle,
  Droplet,
  Factory,
  BookOpen,
  Globe,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const ServiciosAmbientales = () => {
  const environmentalServices = [
    {
      name: "Monitoreo Ambiental",
      icon: Leaf,
      description: "Control continuo de parámetros ambientales",
      color: "from-brand-green to-brand-green",
    },
    {
      name: "Gestión de Residuos",
      icon: Recycle,
      description: "Planes integrales de manejo",
      color: "from-brand-teal to-brand-green",
    },
    {
      name: "Control de Calidad del Agua",
      icon: Droplet,
      description: "Análisis y monitoreo de recursos hídricos",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Seguimiento de KPIs",
      icon: BarChart3,
      description: "Evaluación de indicadores ambientales clave",
      color: "from-brand-lime to-brand-green",
    },
    {
      name: "Gestión de Emisiones",
      icon: Factory,
      description: "Control y reducción de emisiones",
      color: "from-gray-500 to-gray-600",
    },
    {
      name: "Capacitación Ambiental",
      icon: BookOpen,
      description: "Formación y educación continua",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Evaluación de Impacto",
      icon: Globe,
      description: "Estudios ambientales integrales",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      name: "Planes de Contingencia",
      icon: ShieldCheck,
      description: "Protocolos de emergencia ambiental",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-teal via-brand-green to-brand-green relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
            Servicios Adicionales
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Servicios de apoyo especializados para garantizar una cobertura
            ambiental integral, gestión segura y cumplimiento normativo en todos
            sus proyectos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {environmentalServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="bg-white/95 backdrop-blur-sm border-2 border-white/50 hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center h-full flex flex-col">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-brand-teal transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiciosAmbientales;
