import { MapPin } from "lucide-react";

const GaimanHero = () => {
  return (
    <section className="bg-gradient-to-br from-[#33B779] via-[#5AB75B] to-[#B0C933] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Servicios Ambientales en Gaiman
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Consultoría ambiental profesional en Gaiman. Localidad histórica
            galesa del Valle Inferior con importante patrimonio cultural y
            desarrollo turístico. Brindamos soluciones integrales para proyectos
            turísticos, agropecuarios, comerciales y de preservación
            patrimonial.
          </p>
          <div className="flex items-center justify-center text-white mb-8">
            <MapPin className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">
              Servicios en Gaiman: Centro Histórico, Zona Turística, Chacras,
              Casas de Té y Patrimonio Cultural
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GaimanHero;
