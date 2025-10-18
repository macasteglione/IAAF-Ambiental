import { Send, Users, Briefcase, CheckCircle } from "lucide-react";

const TrabajoProcesos = () => {
  const steps = [
    {
      number: 1,
      icon: Send,
      title: "Postulate Online",
      description:
        "Enviá tu CV y carta de presentación por email o completá nuestro formulario de postulación en línea.",
      color: "from-brand-green to-brand-green",
    },
    {
      number: 2,
      icon: Users,
      title: "Entrevista y Evaluación",
      description:
        "Participá de una entrevista personal donde conversaremos sobre tu experiencia, expectativas y objetivos profesionales.",
      color: "from-brand-teal to-brand-green",
    },
    {
      number: 3,
      icon: Briefcase,
      title: "Evaluación Técnica",
      description:
        "Según el puesto, puede incluir una evaluación técnica práctica o presentación de casos de estudio.",
      color: "from-brand-lime to-brand-green",
    },
    {
      number: 4,
      icon: CheckCircle,
      title: "Bienvenida e Inducción",
      description:
        "Completá nuestro programa integral de inducción y capacitación para comenzar tu carrera en IAAF Ambiental.",
      color: "from-brand-green to-brand-teal",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Proceso de Postulación
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pasos simples y claros para unirte a nuestro equipo profesional
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="relative group">
                {/* Connecting line (hidden on mobile, last item) */}
                {step.number < 4 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-300 to-transparent z-0"></div>
                )}

                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-brand-lime/20 h-full group-hover:scale-105 z-10">
                  {/* Number badge with gradient */}
                  <div
                    className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gradient-to-br ${step.color} shadow-lg`}
                  >
                    <span className="text-white font-bold text-2xl">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center group-hover:bg-brand-lime/10 transition-colors">
                      <IconComponent className="h-6 w-6 text-brand-green" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-brand-lime/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Cuánto Tiempo Demora el Proceso?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                El proceso completo generalmente toma entre{" "}
                <strong className="text-brand-teal">2 a 4 semanas</strong> desde
                la postulación inicial hasta la oferta final. Nos comprometemos
                a mantener una comunicación fluida durante todo el proceso y te
                informaremos sobre el estado de tu postulación en cada etapa.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-green-50 rounded-lg p-4 border border-brand-lime/30">
                  <div className="text-3xl font-bold text-brand-teal mb-1">
                    24-48hs
                  </div>
                  <div className="text-sm text-gray-600">Respuesta inicial</div>
                </div>
                <div className="bg-green-50/30 rounded-lg p-4 border border-emerald-200">
                  <div className="text-3xl font-bold text-brand-teal mb-1">
                    1-2 sem
                  </div>
                  <div className="text-sm text-gray-600">
                    Proceso de entrevistas
                  </div>
                </div>
                <div className="bg-green-50/30 rounded-lg p-4 border border-teal-200">
                  <div className="text-3xl font-bold text-brand-teal mb-1">
                    1 sem
                  </div>
                  <div className="text-sm text-gray-600">Decisión final</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrabajoProcesos;
