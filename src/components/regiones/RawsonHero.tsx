import { MapPin } from "lucide-react";

const RawsonHero = () => {
  return (
    <section className="bg-gradient-to-br from-[#5AB75B] via-[#33B779] to-[#B0C933] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Servicios Ambientales en Rawson
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Consultoría ambiental profesional en Rawson, capital de la provincia
            de Chubut. Ciudad administrativa con desarrollo gubernamental,
            comercial y turístico costero. Brindamos soluciones integrales para
            proyectos gubernamentales, comerciales, turísticos y de
            infraestructura provincial.
          </p>
          <div className="flex items-center justify-center text-white mb-8">
            <MapPin className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">
              Servicios en Rawson: Centro Administrativo, Playa Unión, Puerto
              Rawson, Zona Comercial y Costera
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RawsonHero;
