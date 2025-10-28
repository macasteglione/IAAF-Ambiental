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
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  MapPin,
  FlaskConical,
  FileCheck,
  Shield,
  Award,
  CheckCircle,
  Recycle,
  Truck,
} from "lucide-react";

const ServicioResiduos = () => {
  const services = [
    {
      icon: FlaskConical,
      title: "Residuos Peligrosos",
      description:
        "Gestión integral de residuos peligrosos cumpliendo con la normativa nacional y provincial.",
      features: [
        "Caracterización",
        "Plan de Manejo",
        "Transporte Seguro",
        "Disposición Final",
        "Documentación Legal",
        "Capacitación",
      ],
    },
    {
      icon: Recycle,
      title: "Residuos Industriales",
      description:
        "Soluciones personalizadas para la gestión de residuos industriales y optimización de procesos.",
      features: [
        "Minimización en Origen",
        "Segregación Adecuada",
        "Valorización",
        "Planes de Reciclaje",
        "Control de Registros",
        "Auditorías",
      ],
    },
    {
      icon: Truck,
      title: "Residuos Urbanos",
      description:
        "Asesoramiento en la gestión municipal de residuos sólidos urbanos y programas de reciclaje.",
      features: [
        "Planes Municipales",
        "Puntos Limpios",
        "Educación Ambiental",
        "Compostaje",
        "Logística Inversa",
        "Indicadores",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Gestión de Residuos Puerto Madryn | Manejo Residuos Chubut | IAAF Ambiental"
        description="Servicios profesionales de gestión de residuos en Puerto Madryn y Patagonia. Manejo de residuos peligrosos, industriales y urbanos. Cumplimiento normativo y soluciones sustentables."
        keywords="gestion residuos puerto madryn, manejo residuos chubut, residuos peligrosos patagonia, residuos industriales, reciclaje empresarial"
        url="https://iaafambiental.com/servicios/gestion-residuos"
      />
      <Header />

      {/* Hero Section */}
      <section className="min-h-[450px] sm:min-h-[500px] lg:min-h-[550px] bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 relative overflow-hidden flex items-center pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%),
                             radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Gestión de Residuos
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/95 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Soluciones integrales para el manejo responsable de residuos, cumpliendo
              con la normativa y protegiendo el medio ambiente
            </p>
            <div className="flex items-center justify-center text-white">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
              <span className="text-sm sm:text-base lg:text-lg font-semibold">
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
              Soluciones Integrales de Gestión
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Servicios especializados para cada tipo de residuo, garantizando su
              correcta gestión y minimizando el impacto ambiental
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-orange-500 transition-colors duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
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
                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
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
              Proceso de Gestión de Residuos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enfoque sistemático para una gestión eficiente y responsable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <FlaskConical className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Diagnóstico</h3>
              <p className="text-gray-600">
                Caracterización y clasificación de residuos generados
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Recycle className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementación</h3>
              <p className="text-gray-600">
                Desarrollo de sistemas y procedimientos de gestión
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Seguimiento</h3>
              <p className="text-gray-600">
                Control y optimización continua del sistema
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
              Nuestros Servicios de Gestión en la Patagonia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones adaptadas a las necesidades específicas de la región
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-orange-500">Cobertura Sectorial</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Industria y manufactura</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Sector salud</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Municipios</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-orange-500">Servicios Especializados</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Planes de minimización</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Gestión documental</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Capacitación continua</span>
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
              ¿Por Qué Elegir Nuestros Servicios de Gestión?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compromiso con la excelencia y el medio ambiente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Experiencia Probada</h3>
              <p className="text-gray-600">
                Más de una década gestionando residuos en la región
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cumplimiento Legal</h3>
              <p className="text-gray-600">
                Garantía de gestión conforme a normativa vigente
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FileCheck className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Trazabilidad Total</h3>
              <p className="text-gray-600">
                Seguimiento completo del ciclo de gestión
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicioResiduos;