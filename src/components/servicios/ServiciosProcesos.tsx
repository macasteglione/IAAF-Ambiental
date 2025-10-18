import { ClipboardList, Search, FileText, CheckCircle } from "lucide-react";

const ServiciosProcesos = () => {
  const processes = [
    {
      step: "1",
      icon: ClipboardList,
      title: "Diagnóstico Inicial",
      description:
        "Reunión inicial para comprender las necesidades específicas, objetivos ambientales y características particulares del proyecto o empresa.",
      color: "from-brand-green to-brand-green",
    },
    {
      step: "2",
      icon: Search,
      title: "Evaluación Ambiental",
      description:
        "Análisis detallado de impactos potenciales, identificación de riesgos ambientales y evaluación de oportunidades de mejora continua.",
      color: "from-brand-teal to-brand-green",
    },
    {
      step: "3",
      icon: FileText,
      title: "Planificación Estratégica",
      description:
        "Diseño de un plan ambiental personalizado con medidas de mitigación, protocolos de monitoreo y estrategias de cumplimiento normativo.",
      color: "from-brand-lime to-brand-green",
    },
    {
      step: "4",
      icon: CheckCircle,
      title: "Implementación y Seguimiento",
      description:
        "Ejecución del plan con acciones sostenibles, evaluación continua de resultados, ajustes necesarios y mejoras permanentes.",
      color: "from-brand-green to-brand-teal",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-teal rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            Nuestro Proceso de Servicio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un proceso estructurado y transparente que garantiza resultados
            efectivos, cumplimiento normativo y soluciones ambientales
            sustentables en cada etapa del proyecto.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {processes.map((process, index) => {
            const IconComponent = process.icon;
            return (
              <div key={index} className="relative group">
                {/* Connecting line (hidden on mobile, last item) */}
                {index < processes.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-1 bg-gradient-to-r from-green-300 to-green-200 z-0"></div>
                )}

                {/* Card */}
                <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-green-300 group-hover:scale-105 z-10">
                  {/* Icon with step number */}
                  <div className="relative mx-auto w-20 h-20 mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${process.color} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all`}
                    >
                      <div className="flex items-center justify-center h-full">
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 bg-white border-2 border-brand-green text-brand-teal rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shadow-md">
                      {process.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-brand-teal transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed text-sm">
                    {process.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiciosProcesos;
