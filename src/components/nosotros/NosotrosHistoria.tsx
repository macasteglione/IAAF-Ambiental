import equipo_imagen from "/img/equipo-about.png";

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
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img src={equipo_imagen} alt="Equipo de IAAF Ambiental" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosotrosHistoria;
