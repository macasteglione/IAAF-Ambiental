import { proyectos } from "@/data/ProyectosDatos";
import ProyectoCard from "./ProyectosCard";
import { Briefcase, TrendingUp } from "lucide-react";

const IndustriesGrid = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Proyectos Ambientales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trabajamos con diversos sectores productivos en la Patagonia,
            brindando soluciones ambientales personalizadas que garantizan el
            cumplimiento normativo y promueven el desarrollo sustentable de cada
            industria.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {proyectos.map((proyecto, index) => (
            <ProyectoCard key={index} proyecto={proyecto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
