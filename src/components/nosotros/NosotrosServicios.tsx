import { Card, CardContent } from "@/components/ui/card";
import { Shield, Recycle, Award, FileCheck, Droplet, Leaf } from "lucide-react";

const NosotrosServicios = () => {
  const services = [
    {
      icon: Shield,
      title: "Evaluación de Impacto Ambiental",
      description:
        "Estudios de impacto ambiental completos, incluyendo diagnóstico, evaluación de riesgos y planes de gestión ambiental para proyectos de todas las escalas.",
      color: "from-brand-green to-brand-green",
    },
    {
      icon: Recycle,
      title: "Gestión de Residuos",
      description:
        "Asesoramiento integral en gestión de residuos sólidos urbanos e industriales, incluyendo programas de reducción, reciclaje y disposición final responsable.",
      color: "from-brand-teal to-brand-green",
    },
    {
      icon: Award,
      title: "Auditorías Ambientales",
      description:
        "Auditorías ambientales exhaustivas para evaluar el cumplimiento normativo, identificar no conformidades y proponer planes de acción correctiva.",
      color: "from-brand-lime to-brand-green",
    },
    {
      icon: FileCheck,
      title: "Certificación ISO-IRAM 14001",
      description:
        "Asesoramiento para la implementación y certificación de sistemas de gestión ambiental según norma ISO-IRAM 14001",
      color: "from-brand-green to-brand-teal",
    },
    {
      icon: Droplet,
      title: "Monitoreo Ambiental",
      description:
        "Monitoreo continuo de calidad de aire, agua y suelo. Análisis de emisiones atmosféricas y control de efluentes líquidos con tecnología de punta.",
      color: "from-brand-teal to-brand-green",
    },
    {
      icon: Leaf,
      title: "Planes de Gestión",
      description:
        "Desarrollo de planes de gestión ambiental integral, programas de educación ambiental y estrategias de desarrollo sustentable.",
      color: "from-brand-teal to-brand-green",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Servicios Integrales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desde pequeñas empresas hasta grandes industrias, brindamos
            soluciones ambientales completas y personalizadas en toda la
            Patagonia
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="bg-white border-2 border-gray-200 hover:border-green-300 hover:shadow-2xl transition-all duration-300 group h-full"
              >
                <CardContent className="p-6 lg:p-8 text-center h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${service.color} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-teal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
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

export default NosotrosServicios;
