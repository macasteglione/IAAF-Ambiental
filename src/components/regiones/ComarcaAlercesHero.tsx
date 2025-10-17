
import { MapPin } from "lucide-react";

const ComarcaAlercesHero = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Servicios Ambientales en Comarca Los Alerces
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Consultoría ambiental profesional en Comarca Los Alerces, región cordillerana de Chubut con bosques andino-patagónicos, lagos y ríos. 
            Brindamos soluciones integrales para proyectos forestales, turísticos, de conservación y desarrollo sustentable en zona de montaña.
          </p>
          <div className="flex items-center justify-center text-green-600 mb-8">
            <MapPin className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">Servicios en Comarca Los Alerces: Esquel, Trevelin, Parque Nacional Los Alerces, Lago Puelo, El Hoyo y Zona Cordillerana</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComarcaAlercesHero;
