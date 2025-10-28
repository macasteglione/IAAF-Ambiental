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
  ClipboardCheck,
  FileCheck,
  Shield,
  Award,
  CheckCircle,
  Search,
  BookOpen,
} from "lucide-react";

const ServicioAuditorias = () => {
  const services = [
    {
      icon: ClipboardCheck,
      title: "Auditorías de Cumplimiento",
      description:
        "Evaluación exhaustiva del cumplimiento de la normativa ambiental aplicable y requisitos legales.",
      features: [
        "Revisión Documental",
        "Verificación in situ",
        "Análisis de Permisos",
        "Evaluación de Registros",
        "Identificación de Gaps",
        "Plan de Acción",
      ],
    },
    {
      icon: Search,
      title: "Auditorías de Gestión",
      description:
        "Análisis integral del sistema de gestión ambiental y su efectividad operativa.",
      features: [
        "Revisión de Procesos",
        "Evaluación de Controles",
        "Análisis de Indicadores",
        "Eficacia del Sistema",
        "Mejora Continua",
        "Recomendaciones",
      ],
    },
    {
      icon: BookOpen,
      title: "Auditorías Específicas",
      description:
        "Auditorías focalizadas en aspectos particulares según requerimientos del cliente.",
      features: [
        "Residuos Especiales",
        "Emisiones Atmosféricas",
        "Efluentes Líquidos",
        "Seguridad Ambiental",
        "Certificaciones ISO",
        "Due Diligence",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Auditorías Ambientales Puerto Madryn | Evaluación Ambiental Chubut | IAAF Ambiental"
        description="Servicios profesionales de auditoría ambiental en Puerto Madryn y Patagonia. Evaluación de cumplimiento normativo, sistemas de gestión y certificaciones ambientales."
        keywords="auditoria ambiental puerto madryn, evaluacion ambiental chubut, certificacion iso patagonia, auditoria cumplimiento normativo, sistema gestion ambiental"
        url="https://iaafambiental.com/servicios/auditorias-ambientales"
      />
      <Header />

      {/* Hero Section */}
      <section className="min-h-[450px] sm:min-h-[500px] lg:min-h-[550px] bg-gradient-to-br from-brand-lime via-brand-green to-brand-lime relative overflow-hidden flex items-center pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%),
                             radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Auditorías Ambientales
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/95 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Evaluación profesional y objetiva del desempeño ambiental de su organización
              para garantizar el cumplimiento normativo y la mejora continua
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
              Soluciones Integrales de Auditoría
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evaluaciones exhaustivas y objetivas para identificar oportunidades de mejora
              y asegurar el cumplimiento normativo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-brand-green transition-colors duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-lime rounded-2xl flex items-center justify-center mb-4 shadow-lg">
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
                        <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
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
              Proceso de Auditoría Ambiental
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología sistemática para una evaluación completa y objetiva
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Planificación</h3>
              <p className="text-gray-600">
                Definición del alcance y criterios de la auditoría
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ejecución</h3>
              <p className="text-gray-600">
                Recopilación y análisis de evidencias in situ
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Informe</h3>
              <p className="text-gray-600">
                Elaboración de conclusiones y recomendaciones
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
              Nuestros Servicios de Auditoría en la Patagonia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiencia regional con estándares internacionales
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-brand-green">Experiencia Sectorial</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <span className="ml-3">Industria y manufactura</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <span className="ml-3">Sector energético</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <span className="ml-3">Gestión de residuos</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-brand-green">Alcance de Servicios</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <span className="ml-3">Auditorías de certificación</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <span className="ml-3">Evaluaciones de cumplimiento</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <span className="ml-3">Due diligence ambiental</span>
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
              ¿Por Qué Elegir Nuestros Servicios de Auditoría?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionalismo y objetividad garantizados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-brand-green mb-4" />
              <h3 className="text-xl font-semibold mb-3">Auditores Certificados</h3>
              <p className="text-gray-600">
                Equipo de profesionales con certificaciones internacionales
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-brand-green mb-4" />
              <h3 className="text-xl font-semibold mb-3">Confidencialidad</h3>
              <p className="text-gray-600">
                Manejo seguro y confidencial de la información
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FileCheck className="w-12 h-12 text-brand-green mb-4" />
              <h3 className="text-xl font-semibold mb-3">Informes Detallados</h3>
              <p className="text-gray-600">
                Reportes completos con hallazgos y recomendaciones
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicioAuditorias;