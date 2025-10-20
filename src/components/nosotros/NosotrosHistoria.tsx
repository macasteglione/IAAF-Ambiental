import { Users } from "lucide-react";

const NosotrosHistoria = () => {
  return (
    <section
      id="historia"
      className="py-16 lg:py-20 bg-gradient-to-br from-white to-green-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Nuestra Historia y Misión
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                IAAF Ambiental nació con una misión clara: proporcionar
                servicios de consultoría ambiental de la más alta calidad en la
                Patagonia.
              </p>

              <p>
                Entendemos que cada proyecto es único, por eso trabajamos
                estrechamente con nuestros clientes para desarrollar{" "}
                <strong className="text-brand-teal">
                  soluciones personalizadas
                </strong>{" "}
                que aseguren el cumplimiento normativo y la sustentabilidad
                ambiental. Nuestros servicios integrales incluyen evaluaciones
                de impacto ambiental, gestión de residuos, auditorías y
                monitoreo continuo.
              </p>

              <p>
                Nuestro compromiso con la excelencia nos ha valido el
                reconocimiento de organismos ambientales provinciales y
                nacionales, así como la confianza de importantes empresas,
                organismos públicos e instituciones de toda la Patagonia.
              </p>
            </div>
          </div>

          {/* Image Section */}
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
    </section>
  );
};

export default NosotrosHistoria;
