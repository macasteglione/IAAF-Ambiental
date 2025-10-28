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
  TreePine,
  FileCheck,
  Shield,
  Award,
  CheckCircle,
  Settings,
  Leaf,
} from "lucide-react";

const ServicioPlanesManejo = () => {
  const services = [
    {
      icon: TreePine,
      title: "Planes para Empresas",
      description:
        "Diseño de programas ambientales integrales para empresas privadas que buscan minimizar su impacto ambiental y optimizar sus recursos.",
      features: [
        "Diagnóstico Ambiental Detallado",
        "Programas de Gestión Sostenible",
        "Capacitación Integral del Personal",
        "Indicadores de Desempeño Ambiental",
        "Sistema de Mejora Continua",
        "Apoyo en Certificaciones ISO",
      ],
    },
    {
      icon: Settings,
      title: "Planes para Municipios",
      description:
        "Programas de gestión ambiental municipal adaptados a las necesidades específicas de gobiernos locales patagónicos y sus comunidades.",
      features: [
        "Gestión Integral de Residuos",
        "Protección de Recursos Naturales",
        "Planificación Territorial Sostenible",
        "Programas de Educación Ambiental",
        "Participación Ciudadana Activa",
        "Cumplimiento Normativo",
      ],
    },
    {
      icon: Leaf,
      title: "Planes para Construcción",
      description:
        "Planes de manejo específicos para proyectos de construcción e infraestructura que garantizan la protección ambiental en todas sus etapas.",
      features: [
        "Control Integral de Emisiones",
        "Gestión Eficiente de Residuos",
        "Protección de Recursos Hídricos",
        "Manejo de Flora y Fauna",
        "Seguridad Ambiental Preventiva",
        "Sistema de Monitoreo Continuo",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Planes de Manejo Ambiental Puerto Madryn | Gestión Ambiental Chubut | IAAF Ambiental"
        description="Diseño e implementación de Planes de Manejo Ambiental en Puerto Madryn y toda la Patagonia. Programas ambientales para empresas, municipios y proyectos de construcción. Cumplimiento normativo garantizado."
        keywords="plan manejo ambiental puerto madryn, gestión ambiental chubut, programa ambiental patagonia, manejo ambiental trelew, plan gestión rawson, consultora ambiental puerto madryn"
        url="https://iaafambiental.com/servicios/planes-de-manejo-ambiental"
      />
      <Header />

      {/* Hero Section */}
      <section className="min-h-[450px] sm:min-h-[500px] lg:min-h-[550px] bg-gradient-to-br from-brand-teal via-brand-green to-brand-lime relative overflow-hidden flex items-center pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%),
                             radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Planes de Manejo Ambiental
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/95 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Diseñamos e implementamos planes de manejo para minimizar impactos ambientales
              y asegurar prácticas sustentables en proyectos de todas las escalas en la Patagonia.
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
              Soluciones Integrales de Gestión Ambiental
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestros planes de manejo ambiental se adaptan a las necesidades específicas 
              de cada cliente, asegurando el cumplimiento normativo y la sostenibilidad 
              de sus operaciones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-brand-green transition-colors duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-teal rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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
              Proceso de Elaboración del Plan de Manejo Ambiental
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro enfoque sistemático asegura planes efectivos y adaptados a cada contexto específico
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Diagnóstico Inicial</h3>
              <p className="text-gray-600">
                Evaluación completa del sitio, actividades y requisitos normativos aplicables
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Diseño del Plan</h3>
              <p className="text-gray-600">
                Desarrollo de programas y medidas específicas basadas en el diagnóstico
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementación</h3>
              <p className="text-gray-600">
                Puesta en marcha del plan con capacitación y acompañamiento continuo
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
              Nuestros Servicios de PMA en la Patagonia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiencia local con estándares internacionales en toda la región patagónica
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-brand-green">Cobertura Regional</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <span className="ml-3">Servicios en toda la Patagonia Argentina</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <span className="ml-3">Conocimiento de normativas provinciales</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <span className="ml-3">Adaptación a contextos locales</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-brand-green">Experiencia Sectorial</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <span className="ml-3">Industria y manufactura</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <span className="ml-3">Construcción e infraestructura</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <span className="ml-3">Gestión municipal y territorial</span>
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
              ¿Por Qué Elegir Nuestros Servicios de PMA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compromiso con la excelencia y resultados comprobados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-brand-green mb-4" />
              <h3 className="text-xl font-semibold mb-3">Experiencia Probada</h3>
              <p className="text-gray-600">
                Más de 10 años desarrollando planes de manejo exitosos en la región
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-brand-green mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cumplimiento Garantizado</h3>
              <p className="text-gray-600">
                Aseguramos el cumplimiento de todas las normativas aplicables
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <TreePine className="w-12 h-12 text-brand-green mb-4" />
              <h3 className="text-xl font-semibold mb-3">Enfoque Sostenible</h3>
              <p className="text-gray-600">
                Soluciones que equilibran desarrollo y protección ambiental
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Beneficios de Nuestros Planes de Manejo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un plan de manejo ambiental bien diseñado ofrece múltiples ventajas para 
              tu organización y el medio ambiente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cumplimiento Legal",
                description: "Aseguramos que tu organización cumpla con todas las normativas ambientales vigentes.",
                icon: Shield,
              },
              {
                title: "Eficiencia Operativa",
                description: "Optimizamos procesos para reducir costos y mejorar el desempeño ambiental.",
                icon: Award,
              },
              {
                title: "Mejora Continua",
                description: "Implementamos sistemas de seguimiento y actualización periódica de los planes.",
                icon: TreePine,
              },
            ].map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-lime rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    {<benefit.icon className="w-8 h-8 text-white" />}
                  </div>
                  <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-brand-green to-brand-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Listo para Implementar tu Plan de Manejo Ambiental?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Nuestro equipo de expertos está listo para ayudarte a desarrollar e implementar 
              un plan de manejo ambiental efectivo y adaptado a tus necesidades específicas.
            </p>
            <Button asChild size="lg" className="bg-white text-brand-green hover:bg-brand-lime hover:text-black">
              <Link to="/contacto">Solicitar Consulta</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicioPlanesManejo;