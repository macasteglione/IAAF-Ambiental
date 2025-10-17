import { Card, CardContent } from "@/components/ui/card";
import { Target, Layers, Shield, Search, Wrench, Users } from "lucide-react";

const ProyectosPorque = () => {
  const features = [
    {
      icon: Target,
      title: "Experiencia Sectorial",
      description: "Profundo conocimiento de los retos y necesidades ambientales específicos de cada sector y tipo de proyecto en la región patagónica.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Layers,
      title: "Escalabilidad Flexible",
      description: "Desde pequeños proyectos comunitarios hasta grandes desarrollos industriales, adaptamos nuestros servicios al tamaño y complejidad de cada iniciativa.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Shield,
      title: "Cumplimiento Normativo",
      description: "Total cumplimiento de regulaciones ambientales argentinas, estándares de sostenibilidad y requisitos legales aplicables a cada proyecto.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Search,
      title: "Evaluación Integral",
      description: "Análisis exhaustivo de riesgos e impactos ambientales adaptados a los desafíos y necesidades específicas de cada proyecto o sector.",
      color: "from-green-600 to-green-700"
    },
    {
      icon: Wrench,
      title: "Herramientas Especializadas",
      description: "Equipamiento técnico y metodologías avanzadas diseñadas para abordar los desafíos ambientales particulares de cada tipo de proyecto.",
      color: "from-emerald-600 to-emerald-700"
    },
    {
      icon: Users,
      title: "Equipo Multidisciplinario",
      description: "Profesionales certificados con formación y experiencia especializada en diferentes sectores, garantizando soluciones óptimas y personalizadas.",
      color: "from-teal-600 to-teal-700"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-white to-green-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            Por Qué Nuestros Clientes Nos Eligen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestra experiencia específica por sector asegura que cada proyecto reciba 
            la gestión ambiental más adecuada según sus características, riesgos y 
            oportunidades de mejora continua.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-white border-2 border-gray-200 hover:border-green-300 hover:shadow-2xl transition-all duration-300 group h-full"
              >
                <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {feature.description}
                  </p>

                  {/* Decorative element */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-green-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>Servicio garantizado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProyectosPorque;