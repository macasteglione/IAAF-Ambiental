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
  Globe2,
  FileCheck,
  Shield,
  Award,
  CheckCircle,
  BookOpen,
  GraduationCap,
} from "lucide-react";

const ServicioEducacion = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Capacitación Empresarial",
      description:
        "Programas de formación ambiental adaptados a las necesidades específicas de cada empresa.",
      features: [
        "Gestión Ambiental",
        "Normativa Vigente",
        "Buenas Prácticas",
        "Residuos y Reciclaje",
        "Eficiencia Energética",
        "Certificaciones",
      ],
    },
    {
      icon: BookOpen,
      title: "Educación Comunitaria",
      description:
        "Talleres y programas educativos para escuelas, organizaciones y comunidades locales.",
      features: [
        "Talleres Interactivos",
        "Material Didáctico",
        "Actividades Prácticas",
        "Concientización",
        "Proyectos Ambientales",
        "Seguimiento",
      ],
    },
    {
      icon: Globe2,
      title: "Programas Especiales",
      description:
        "Iniciativas personalizadas para instituciones públicas y eventos específicos.",
      features: [
        "Campañas Ambientales",
        "Eventos Temáticos",
        "Jornadas Educativas",
        "Material Multimedia",
        "Evaluación de Impacto",
        "Informes de Resultados",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Educación Ambiental Puerto Madryn | Capacitación Ambiental Chubut | IAAF Ambiental"
        description="Servicios profesionales de educación y capacitación ambiental en Puerto Madryn y Patagonia. Programas para empresas, escuelas y comunidades. Formación ambiental integral."
        keywords="educacion ambiental puerto madryn, capacitacion ambiental chubut, talleres ambientales patagonia, formacion empresarial ambiental"
        url="https://iaafambiental.com/servicios/educacion-ambiental"
      />
      <Header />

      {/* Hero Section */}
      <section className="min-h-[450px] sm:min-h-[500px] lg:min-h-[550px] bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 relative overflow-hidden flex items-center pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%),
                             radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Educación y Capacitación Ambiental
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/95 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Formación integral para crear conciencia ambiental y promover
              prácticas sostenibles en empresas y comunidades
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
              Programas de Formación Ambiental
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones educativas adaptadas a las necesidades específicas
              de cada grupo y organización
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-purple-500 transition-colors duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
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
                        <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
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
              Proceso de Formación Ambiental
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología integral para un aprendizaje efectivo y duradero
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Diagnóstico</h3>
              <p className="text-gray-600">
                Identificación de necesidades y objetivos de formación
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementación</h3>
              <p className="text-gray-600">
                Desarrollo de programas y materiales personalizados
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Evaluación</h3>
              <p className="text-gray-600">
                Medición de resultados y seguimiento continuo
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
              Nuestros Servicios de Educación en la Patagonia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Formación ambiental adaptada al contexto regional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-purple-500">Alcance Formativo</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Programas empresariales</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Formación escolar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Talleres comunitarios</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-purple-500">Metodología</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Aprendizaje práctico</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Material adaptado</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="ml-3">Seguimiento continuo</span>
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
              ¿Por Qué Elegir Nuestros Servicios de Educación?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiencia y calidad en formación ambiental
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Experiencia Docente</h3>
              <p className="text-gray-600">
                Equipo de profesionales especializados en educación ambiental
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Material Exclusivo</h3>
              <p className="text-gray-600">
                Contenido personalizado y actualizado constantemente
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Globe2 className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Enfoque Regional</h3>
              <p className="text-gray-600">
                Programas adaptados al contexto patagónico
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicioEducacion;