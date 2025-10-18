
import { MapPin } from "lucide-react";

const PeninsulaValdesHero = () => {
  return (
    <section className="bg-gradient-to-br from-[#B0C933]/90 via-[#5AB75B]/80 to-[#33B779]/70 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Servicios Ambientales en Península Valdés
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Consultoría ambiental profesional en Península Valdés, Patrimonio de la Humanidad UNESCO. Área natural protegida con fauna marina única. 
            Brindamos soluciones integrales para proyectos de conservación, turismo sustentable, monitoreo de fauna y gestión en área protegida.
          </p>
          <div className="flex items-center justify-center text-white mb-8">
            <MapPin className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">Servicios en Península Valdés: Puerto Pirámides, Punta Norte, Punta Delgada, Caleta Valdés y Patrimonio UNESCO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeninsulaValdesHero;
