import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle } from "lucide-react";

const NosotrosHistoria = () => {
  const certifications = [
    { name: "ISO 14001", description: "Gestión Ambiental" },
    { name: "Registro Provincial", description: "Chubut Habilitada" },
    { name: "Profesionales Matriculados", description: "CPIC - COPIME" },
    { name: "SAyDS", description: "Sec. Ambiente y Desarrollo" },
    { name: "Normativa Nacional", description: "Ley 24.051 - Ley 25.675" },
    { name: "Normativa Provincial", description: "Ley XVII N°68 (Chubut)" },
  ];

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
                Patagonia. Lo que comenzó como un pequeño equipo de
                profesionales comprometidos se ha convertido en una{" "}
                <strong className="text-brand-teal">
                  consultora líder en gestión ambiental
                </strong>{" "}
                de la región.
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

            {/* Certifications */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-brand-teal" />
                <h3 className="text-lg font-bold text-gray-900">
                  Certificaciones y Registros
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="group">
                    <Badge
                      variant="outline"
                      className="w-full justify-center py-3 px-4 bg-brand-green hover:bg-brand-teal border-brand-teal text-white font-semibold transition-all cursor-default text-center"
                    >
                      {cert.name}
                    </Badge>
                    <p className="text-xs text-gray-500 text-center mt-1">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-lime/20 group">
              <img
                src="/src/assets/sobre_nosotros.png"
                alt="Equipo IAAF Ambiental trabajando en evaluaciones ambientales en la Patagonia"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosotrosHistoria;
