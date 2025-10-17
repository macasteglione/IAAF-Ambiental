import { MapPin, Users, Award, TrendingUp } from "lucide-react";

const NosotrosHero = () => {
  const stats = [
    { icon: Award, value: "15+", label: "Años" },
    { icon: Users, value: "200+", label: "Proyectos" },
    { icon: TrendingUp, value: "100%", label: "Satisfacción" },
    { icon: MapPin, value: "8", label: "Localidades" },
  ];

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 text-gray-900 py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Sobre IAAF Ambiental
          </h1>

          <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Somos una consultora ambiental líder en la Patagonia, dedicada a
            brindar soluciones integrales para el desarrollo sustentable de
            empresas, comunidades e instituciones en toda la región desde hace
            más de 15 años.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NosotrosHero;
