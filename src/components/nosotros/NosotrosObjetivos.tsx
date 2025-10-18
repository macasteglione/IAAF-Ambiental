import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Clock, Target, Handshake } from "lucide-react";

const NosotrosObjetivos = () => {
  const values = [
    {
      icon: Shield,
      title: "Compromiso Ambiental",
      description:
        "Priorizamos la protección del medio ambiente y el desarrollo sostenible en cada proyecto que emprendemos en la Patagonia.",
      color: "from-brand-green to-brand-green",
    },
    {
      icon: Award,
      title: "Excelencia Profesional",
      description:
        "Nuestro equipo de consultores ambientales mantiene los más altos estándares de calidad, profesionalismo y actualización continua.",
      color: "from-brand-teal to-brand-green",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description:
        "Colaboramos estrechamente con nuestros clientes para desarrollar soluciones ambientales efectivas, personalizadas e innovadoras.",
      color: "from-brand-lime to-brand-green",
    },
    {
      icon: Clock,
      title: "Respuesta Eficiente",
      description:
        "Ofrecemos soluciones ágiles y efectivas para cumplir con los plazos y requerimientos normativos de cada proyecto ambiental.",
      color: "from-brand-green to-brand-teal",
    },
    {
      icon: Target,
      title: "Soluciones Integrales",
      description:
        "Brindamos servicios ambientales completos, desde evaluaciones de impacto hasta gestión de residuos, auditorías y certificaciones.",
      color: "from-brand-teal to-brand-green",
    },
    {
      icon: Handshake,
      title: "Responsabilidad Social",
      description:
        "Nos comprometemos con el desarrollo sostenible de la comunidad patagónica y el bienestar de las generaciones futuras.",
      color: "from-brand-teal to-brand-green",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-white to-green-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-teal rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Objetivos y Valores
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estos principios fundamentales guían todo lo que hacemos y aseguran
            que brindemos el más alto estándar en consultoría ambiental para la
            Patagonia.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card
                key={index}
                className="bg-white border-2 border-gray-200 hover:border-green-300 hover:shadow-2xl transition-all duration-300 group h-full"
              >
                <CardContent className="p-6 lg:p-8 text-center h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all`}
                  >
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-teal transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {value.description}
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

export default NosotrosObjetivos;
