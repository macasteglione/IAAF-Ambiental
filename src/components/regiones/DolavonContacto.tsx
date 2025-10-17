
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DolavonContacto = () => {
  return (
    <section className="py-16 bg-[#33B779] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* SEO Hidden Cities List */}
        <div className="sr-only">
          <h2>Áreas de Cobertura de Servicios Ambientales en Dolavon</h2>
          <p>Brindamos servicios integrales de consultoría ambiental en Dolavon, incluyendo los molinos harineros históricos, centro histórico, chacras, zona turística, zona rural, patrimonio cultural galesa y toda la localidad.</p>
        </div>

        <h2 className="text-3xl font-bold mb-4">
          ¿Necesita Consultoría Ambiental en Dolavon?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Especialistas en proyectos ambientales en Dolavon. Atendemos proyectos turísticos, agropecuarios, patrimoniales y de preservación histórica.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="bg-white text-[#33B779] hover:bg-gray-100">
            <Link to="/contacto">Agendar Consulta</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DolavonContacto;
