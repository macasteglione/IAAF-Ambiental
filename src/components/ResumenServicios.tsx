import { useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Leaf,
  TrendingUp,
  Clock,
  Award,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = useMemo(() => [
    {
      icon: Shield,
      title: "Proteger",
      description:
        "Protegemos el medio ambiente mediante evaluaciones rigurosas y planes de gestión que minimizan el impacto ambiental de proyectos y operaciones.",
      color: "from-brand-green to-brand-teal",
    },
    {
      icon: Leaf,
      title: "Conservar",
      description:
        "Desarrollamos estrategias de conservación y uso sustentable de recursos naturales, promoviendo prácticas que benefician al ambiente y la comunidad.",
      color: "from-brand-teal to-brand-lime",
    },
    {
      icon: TrendingUp,
      title: "Desarrollar",
      description:
        "Impulsamos el desarrollo sustentable mediante soluciones innovadoras que equilibran el crecimiento económico con la responsabilidad ambiental.",
      color: "from-brand-lime to-brand-green",
    },
  ], []);

  const features = useMemo(() => [
    {
      icon: Clock,
      title: "Respuesta Rápida",
      description:
        "Atención y respuesta a consultas dentro de 24-48 horas hábiles para todos sus proyectos ambientales.",
    },
    {
      icon: Award,
      title: "Experiencia Comprobada",
      description:
        "Contamos con un equipo de expertos ambientales con amplia experiencia brindando soluciones exitosas en toda la región patagónica",
    },
    {
      icon: MapPin,
      title: "Cobertura Patagónica",
      description:
        "Servicios integrales en Puerto Madryn, Trelew, Rawson y toda la provincia de Chubut.",
    },
  ], []);

  return (
    <section
      aria-labelledby="services-heading"
      className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-green-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Nuestra Misión
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En IAAF Ambiental trabajamos para{" "}
            <strong className="text-brand-green">
              proteger, conservar y desarrollar
            </strong>{" "}
            soluciones ambientales que permitan el crecimiento económico en
            armonía con la naturaleza patagónica, asegurando un futuro
            sustentable para las próximas generaciones.
          </p>
        </div>

        {/* Main Services Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 border-t-4 border-t-brand-teal hover:scale-105 group bg-white"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4" aria-hidden="true">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-3 group-hover:text-brand-teal transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border-2 border-brand-lime/20">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-brand-teal rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-green transition-colors shadow-lg">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
