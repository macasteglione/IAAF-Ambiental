import { MapPin } from "lucide-react";

const TrelewHero = () => {
  return (
    <section className="bg-gradient-to-br from-[#B0C933] via-[#5AB75B] to-[#33B779] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Servicios Ambientales en Trelew
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Consultoría ambiental profesional en Trelew. Ciudad industrial y
            agropecuaria con el principal Parque Industrial de la región.
            Brindamos soluciones integrales para proyectos industriales,
            agropecuarios, comerciales y de servicios en la ciudad.
          </p>
          <div className="flex items-center justify-center text-white mb-8">
            <MapPin className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">
              Servicios en Trelew: Zona Urbana, Parque Industrial, Área
              Comercial, Chacras y Zona de Expansión
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrelewHero;
