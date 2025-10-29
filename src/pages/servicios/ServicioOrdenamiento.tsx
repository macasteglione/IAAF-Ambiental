import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedSEO from "@/components/EnhancedSEO";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  Map,
  FileCheck,
  Shield,
  Award,
  CheckCircle,
  Globe2,
  Compass,
} from "lucide-react";

const ServicioOrdenamiento = () => {
  const services = [
    {
      icon: Map,
      title: "Planificación Territorial",
      description:
        "Desarrollo de planes de ordenamiento territorial integrando aspectos ambientales, sociales y económicos.",
      features: [
        "Diagnóstico Territorial",
        "Zonificación Ambiental",
        "Análisis de Riesgos",
        "Mapas Temáticos",
        "Participación Pública",
        "Marco Normativo",
      ],
    },
    {
      icon: Globe2,
      title: "Gestión Territorial",
      description:
        "Implementación y seguimiento de planes de ordenamiento y gestión del territorio.",
      features: [
        "Planes de Manejo",
        "Monitoreo Territorial",
        "Indicadores de Gestión",
        "Sistemas de Información",
        "Capacitación Técnica",
        "Informes de Avance",
      ],
    },
    {
      icon: Compass,
      title: "Estudios Especializados",
      description:
        "Análisis específicos para la toma de decisiones en planificación territorial.",
      features: [
        "Estudios de Capacidad",
        "Análisis de Conflictos",
        "Evaluación de Impactos",
        "Cartografía Digital",
        "Modelación Espacial",
        "Informes Técnicos",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Ordenamiento Territorial Puerto Madryn | Planificación Territorial Chubut | IAAF Ambiental"
        description="Servicios profesionales de ordenamiento y planificación territorial en Puerto Madryn y Patagonia. Zonificación ambiental, gestión territorial y estudios especializados."
        keywords="ordenamiento territorial puerto madryn, planificacion territorial chubut, zonificacion ambiental patagonia, gestion territorial"
        url="https://iaafambiental.com/servicios/ordenamiento-territorial"
      />
      <Header />

      {/* Hero Section */}
      <section className="h-screen lg:h-[550px] bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-700 relative overflow-hidden flex items-center pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%),
                             radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl lg:text-5xl xl:text-5xl font-bold text-white mb-6 leading-tight">
              Ordenamiento Territorial
            </h1>
            <p className="text-base lg:text-2xl text-white/95 max-w-4xl mx-auto mb-8 leading-relaxed">
              Planificación estratégica del territorio para un desarrollo
              sustentable y equilibrado en la región patagónica
            </p>
            <div className="flex items-center justify-center text-white">
              <MapPin className="lg:h-6 h-5 w-6 mr-2" />
              <span className="lg:text-lg text-xs font-semibold">
                Cobertura en toda la Región Patagónica
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Soluciones de Ordenamiento Territorial
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Servicios integrales para la planificación y gestión sustentable
              del territorio en la Patagonia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-cyan-500 transition-colors duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    {<service.icon className="w-8 h-8 text-white" />}
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proceso de Ordenamiento Territorial
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología integral para una planificación efectiva
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Map className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Diagnóstico</h3>
              <p className="text-gray-600">
                Análisis integral del territorio y sus dinámicas
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Globe2 className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Planificación</h3>
              <p className="text-gray-600">
                Desarrollo de propuestas y estrategias territoriales
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Compass className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementación</h3>
              <p className="text-gray-600">
                Ejecución y seguimiento de planes territoriales
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Services Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios de Ordenamiento en la Patagonia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones adaptadas a las características únicas del territorio patagónico
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-500">Alcance Territorial</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Municipios y comunas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Áreas protegidas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Zonas productivas</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-500">Herramientas</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Sistemas de información geográfica</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Análisis multicriterio</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Modelación territorial</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegir Nuestros Servicios de Ordenamiento?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiencia y conocimiento del territorio patagónico
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Experiencia Regional</h3>
              <p className="text-gray-600">
                Profundo conocimiento del territorio patagónico
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Enfoque Integral</h3>
              <p className="text-gray-600">
                Consideración de todos los aspectos territoriales
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Map className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Tecnología Avanzada</h3>
              <p className="text-gray-600">
                Uso de herramientas SIG y análisis espacial
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicioOrdenamiento;