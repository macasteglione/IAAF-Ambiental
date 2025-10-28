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
  Waves,
  FileCheck,
  Shield,
  Award,
  CheckCircle,
  FlaskConical,
  ChartBar,
} from "lucide-react";

const ServicioMonitoreos = () => {
  const services = [
    {
      icon: Waves,
      title: "Monitoreo de Agua",
      description:
        "Análisis completo de la calidad del agua superficial y subterránea con equipamiento de última generación.",
      features: [
        "Parámetros Fisicoquímicos",
        "Análisis Microbiológicos",
        "Muestreo Sistemático",
        "Evaluación de Efluentes",
        "Informes Detallados",
        "Recomendaciones Técnicas",
      ],
    },
    {
      icon: FlaskConical,
      title: "Monitoreo de Aire",
      description:
        "Control y seguimiento de la calidad del aire y emisiones atmosféricas según normativas vigentes.",
      features: [
        "Material Particulado",
        "Gases Contaminantes",
        "Ruido Ambiental",
        "Emisiones Industriales",
        "Modelación Atmosférica",
        "Planes de Mitigación",
      ],
    },
    {
      icon: ChartBar,
      title: "Monitoreo de Suelos",
      description:
        "Evaluación integral de la calidad del suelo y seguimiento de parámetros críticos para su conservación.",
      features: [
        "Análisis de Contaminantes",
        "Caracterización Edáfica",
        "Muestreos Estratégicos",
        "Control de Erosión",
        "Medidas Correctivas",
        "Informes Técnicos",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Monitoreos Ambientales Puerto Madryn | Control Ambiental Chubut | IAAF Ambiental"
        description="Servicios profesionales de monitoreo ambiental en Puerto Madryn y Patagonia. Control de calidad de aire, agua y suelo. Medición de ruido y emisiones. Informes técnicos certificados."
        keywords="monitoreo ambiental puerto madryn, control ambiental chubut, medición calidad aire, análisis agua patagonia, control ruido industrial, monitoreo suelos"
        url="https://iaafambiental.com/servicios/monitoreos-ambientales"
      />
      <Header />

      {/* Hero Section */}
      <section className="min-h-[450px] sm:min-h-[500px] lg:min-h-[550px] bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 relative overflow-hidden flex items-center pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%),
                             radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Monitoreos Ambientales
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/95 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Seguimiento y control preciso de parámetros ambientales para asegurar
              el cumplimiento normativo y la protección del entorno
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
              Soluciones Integrales de Monitoreo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Utilizamos tecnología de punta y metodologías certificadas para garantizar
              la precisión y confiabilidad de nuestros monitoreos ambientales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-blue-500 transition-colors duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
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
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
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
              Proceso de Monitoreo Ambiental
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología sistemática para asegurar resultados precisos y confiables
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Planificación</h3>
              <p className="text-gray-600">
                Diseño del plan de muestreo y definición de parámetros a monitorear
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <FlaskConical className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Muestreo y Análisis</h3>
              <p className="text-gray-600">
                Recolección y análisis de muestras siguiendo protocolos estandarizados
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <ChartBar className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Evaluación</h3>
              <p className="text-gray-600">
                Interpretación de resultados y elaboración de informes técnicos
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
              Nuestros Servicios de Monitoreo en la Patagonia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Amplia experiencia en monitoreos ambientales adaptados a las características únicas de la región
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-500">Capacidad Técnica</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Equipamiento de última generación</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Personal altamente capacitado</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Laboratorios certificados</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-500">Alcance Regional</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Cobertura en toda la Patagonia</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Conocimiento del entorno local</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Respuesta rápida y eficiente</span>
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
              ¿Por Qué Elegir Nuestros Servicios de Monitoreo?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calidad y precisión garantizada en cada monitoreo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Experiencia Certificada</h3>
              <p className="text-gray-600">
                Equipo técnico con amplia trayectoria en monitoreos ambientales
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Precisión Garantizada</h3>
              <p className="text-gray-600">
                Metodologías estandarizadas y equipos calibrados
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FileCheck className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Informes Detallados</h3>
              <p className="text-gray-600">
                Documentación completa y recomendaciones técnicas
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicioMonitoreos;