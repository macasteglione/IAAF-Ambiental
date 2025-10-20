import { Leaf, Users, GraduationCap, MapPin, TrendingUp, Heart } from "lucide-react";

const TrabajoPorque = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "Impacto Real",
      description: "Contribuí al cuidado del medio ambiente y al desarrollo sustentable de la Patagonia con proyectos que generan un cambio positivo."
    },
    {
      icon: Users,
      title: "Equipo Profesional",
      description: "Formá parte de un equipo multidisciplinario de profesionales comprometidos que trabajan en un ambiente colaborativo."
    },
    {
      icon: GraduationCap,
      title: "Desarrollo Continuo",
      description: "Accedé a capacitaciones permanentes, cursos especializados y oportunidades de crecimiento profesional en el área ambiental."
    },
    {
      icon: MapPin,
      title: "Proyectos Diversos",
      description: "Participá en proyectos variados en toda la región patagónica, desde estudios ambientales hasta auditorías en diferentes sectores."
    }
  ];

  const perks = [
    {
      icon: TrendingUp,
      text: "Crecimiento profesional"
    },
    {
      icon: MapPin,
      text: "Trabajo en toda la Patagonia"
    },
    {
      icon: Users,
      text: "Ambiente laboral positivo"
    },
    {
      icon: GraduationCap,
      text: "Capacitación continua"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por Qué Trabajar en IAAF Ambiental?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubrí lo que hace especial a nuestro equipo y por qué los profesionales ambientales 
            eligen desarrollar su carrera con nosotros.
          </p>
        </div>

        {/* Featured Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto border border-brand-lime/20">
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 lg:p-12">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Formá Parte del Cambio Ambiental
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Trabajá en proyectos que contribuyen al desarrollo sustentable de la Patagonia 
                  junto a un equipo de profesionales comprometidos con el medio ambiente.
                </p>
                <div className="space-y-3">
                  {perks.map((perk, index) => {
                    const IconComponent = perk.icon;
                    return (
                      <div key={index} className="flex items-center text-gray-700">
                        <div className="flex-shrink-0 w-10 h-10 bg-brand-green rounded-full flex items-center justify-center mr-3">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-medium">{perk.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl overflow-hidden shadow-lg">
                  {/* Placeholder for image - replace with actual team photo */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-12 w-12 text-white" />
                      </div>
                      <p className="text-gray-700 font-semibold text-lg">
                        Equipo IAAF Ambiental
                      </p>
                      <p className="text-gray-600 text-sm mt-2">
                        Profesionales comprometidos con el ambiente
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrabajoPorque;