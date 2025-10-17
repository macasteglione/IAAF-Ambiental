
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Waves, Hotel, Shield } from "lucide-react";

const PuertoPiramidesServicios = () => {
  const services = [
    {
      icon: Waves,
      title: "Turismo Náutico y Avistaje",
      description: "Servicios ambientales especializados para operadores de avistaje de ballenas y turismo marino en área protegida.",
      features: [
        "Avistaje de Ballenas",
        "Operadores de Buceo",
        "Kayak y Snorkel",
        "Turismo Náutico",
        "Fauna Marina Protegida",
        "Normativas UNESCO"
      ],
      suitableFor: ["Avistaje de Ballenas", "Buceo", "Kayak", "Turismo Marino"]
    },
    {
      icon: Hotel,
      title: "Proyectos Hoteleros y Turísticos",
      description: "Asesoramiento ambiental para hoteles, hosterías y emprendimientos turísticos sustentables.",
      features: [
        "Hoteles y Hosterías",
        "Cabañas y Alojamientos",
        "Restaurantes",
        "Campings",
        "Turismo Sustentable",
        "Infraestructura Turística"
      ],
      suitableFor: ["Hoteles", "Alojamientos", "Gastronomía", "Campings"]
    },
    {
      icon: Shield,
      title: "Conservación y Área Protegida",
      description: "Estudios ambientales para proyectos en Patrimonio de la Humanidad UNESCO respetando la conservación.",
      features: [
        "Patrimonio UNESCO",
        "Península Valdés",
        "Conservación de Fauna",
        "Área Protegida",
        "Normativas Ambientales",
        "Turismo Responsable"
      ],
      suitableFor: ["Conservación", "Proyectos UNESCO", "Turismo Sustentable", "Infraestructura"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Nuestros Servicios Ambientales en Puerto Pirámides
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Características del Servicio:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Adecuado Para:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.suitableFor.map((item, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PuertoPiramidesServicios;
