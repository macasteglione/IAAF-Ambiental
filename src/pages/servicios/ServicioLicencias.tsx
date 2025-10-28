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
  FileCheck,
  ScrollText,
  Shield,
  Award,
  CheckCircle,
  ClipboardCheck,
  Scale,
} from "lucide-react";

const ServicioLicencias = () => {
  const services = [
    {
      icon: ScrollText,
      title: "Licencias Ambientales",
      description:
        "Gestión integral de licencias ambientales para proyectos y actividades en toda la Patagonia.",
      features: [
        "Evaluación Preliminar",
        "Preparación Documental",
        "Estudios Técnicos",
        "Trámites Oficiales",
        "Seguimiento Administrativo",
        "Renovaciones",
      ],
    },
    {
      icon: Scale,
      title: "Permisos Especiales",
      description:
        "Obtención de permisos específicos para actividades con impacto ambiental significativo.",
      features: [
        "Emisiones Atmosféricas",
        "Gestión de Residuos",
        "Uso de Agua",
        "Manejo de Sustancias",
        "Transporte de Materiales",
        "Certificaciones",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Cumplimiento Legal",
      description:
        "Asesoramiento continuo para mantener el cumplimiento de la normativa ambiental vigente.",
      features: [
        "Auditorías de Cumplimiento",
        "Actualización Normativa",
        "Planes de Acción",
        "Gestión Documental",
        "Informes de Estado",
        "Mejora Continua",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Licencias Ambientales Puerto Madryn | Permisos Ambientales Chubut | IAAF Ambiental"
        description="Gestión profesional de licencias y permisos ambientales en Puerto Madryn y Patagonia. Trámites ambientales, habilitaciones y cumplimiento normativo garantizado."
        keywords="licencias ambientales puerto madryn, permisos ambientales chubut, habilitacion ambiental patagonia, tramites ambientales"
        url="https://iaafambiental.com/servicios/licencias-permisos-ambientales"
      />
      <Header />

      {/* Hero Section */}
      <section className="min-h-[450px] sm:min-h-[500px] lg:min-h-[550px] bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 relative overflow-hidden flex items-center pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%),
                             radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Licencias y Permisos Ambientales
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/95 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Gestión profesional de habilitaciones y permisos ambientales para 
              garantizar el cumplimiento normativo de su proyecto
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
              Soluciones en Gestión de Permisos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Asesoramiento integral para la obtención y mantenimiento de
              licencias y permisos ambientales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-emerald-500 transition-colors duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
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
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
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
              Proceso de Gestión de Licencias
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología eficiente para la obtención de permisos ambientales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <ScrollText className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Evaluación</h3>
              <p className="text-gray-600">
                Análisis de requerimientos y documentación necesaria
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Gestión</h3>
              <p className="text-gray-600">
                Preparación y presentación de documentación
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Seguimiento</h3>
              <p className="text-gray-600">
                Monitoreo y mantenimiento de permisos
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
              Nuestros Servicios de Licencias en la Patagonia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiencia en gestión de permisos en toda la región
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-emerald-500">Alcance Normativo</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Legislación nacional</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Normativa provincial</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Ordenanzas municipales</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-emerald-500">Tipos de Permisos</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Habilitaciones ambientales</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Permisos de operación</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Certificaciones especiales</span>
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
              ¿Por Qué Elegir Nuestros Servicios de Licencias?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Garantía de gestión profesional y eficiente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Experiencia Comprobada</h3>
              <p className="text-gray-600">
                Amplia trayectoria en gestión de permisos
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Respaldo Legal</h3>
              <p className="text-gray-600">
                Conocimiento profundo de la normativa
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FileCheck className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Gestión Integral</h3>
              <p className="text-gray-600">
                Acompañamiento en todo el proceso
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicioLicencias;