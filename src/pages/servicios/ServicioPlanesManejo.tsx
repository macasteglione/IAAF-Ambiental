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
  Building2,
  Factory,
} from "lucide-react";

const ServicioPlanesManejo = () => {
  const services = [
    {
      icon: Building2,
      title: "Planes para Empresas",
      description:
        "Diseño de programas ambientales integrales para empresas privadas que buscan minimizar su impacto ambiental y mejorar su desempeño sustentable.",
      features: [
        "Diagnóstico ambiental inicial",
        "Programas de gestión personalizados",
        "Capacitación de personal",
        "Indicadores de desempeño (KPIs)",
        "Sistema de mejora continua",
        "Preparación para certificaciones ISO 14001",
      ],
    },
    {
      icon: TreePine,
      title: "Planes para Municipios",
      description:
        "Programas de gestión ambiental municipal adaptados a las necesidades de gobiernos locales patagónicos para desarrollo sustentable.",
      features: [
        "Gestión integral de residuos urbanos",
        "Protección de recursos naturales",
        "Planificación territorial sostenible",
        "Programas de educación comunitaria",
        "Participación ciudadana activa",
        "Cumplimiento normativo provincial",
      ],
    },
    {
      icon: Factory,
      title: "Planes para Proyectos Extractivos y Construcción",
      description:
        "Planes de manejo específicos para proyectos mineros, petroleros, pesqueros y de construcción en todas sus etapas operativas.",
      features: [
        "Control de emisiones y efluentes",
        "Gestión de residuos de obra",
        "Protección de cursos de agua",
        "Manejo de suelos y vegetación",
        "Protocolos de seguridad ambiental",
        "Monitoreo de cumplimiento continuo",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Planes de Manejo Ambiental Puerto Madryn | Gestión Ambiental Empresas Chubut | IAAF Ambiental"
        description="Diseño e implementación de Planes de Manejo Ambiental en Puerto Madryn y toda la Patagonia. Programas ambientales para empresas, municipios, proyectos extractivos y construcción. Mejora continua y certificaciones ISO 14001."
        keywords="plan manejo ambiental puerto madryn, gestión ambiental empresas chubut, programa ambiental patagonia, manejo ambiental municipios trelew, plan gestión sustentable, ISO 14001 patagonia, consultora ambiental empresas"
        url="https://iaafambiental.com/servicios/planes-de-manejo-ambiental"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "IAAF Ambiental - Planes de Manejo Ambiental",
            description:
              "Diseño e implementación de Planes de Manejo Ambiental profesionales en Puerto Madryn y toda la Patagonia",
            areaServed: [
              "Puerto Madryn",
              "Trelew",
              "Rawson",
              "Comodoro Rivadavia",
              "Esquel",
              "Patagonia",
              "Chubut",
            ],
            telephone: "+54 280 459-7153",
            email: "administracion@iaafambiental.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Puerto Madryn",
              addressRegion: "Chubut",
              addressCountry: "AR",
            },
            serviceType: [
              "Planes de Manejo Ambiental",
              "Gestión Ambiental Empresarial",
              "Programas Ambientales Municipales",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: "https://iaafambiental.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Servicios",
                item: "https://iaafambiental.com/servicios",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Planes de Manejo Ambiental",
                item: "https://iaafambiental.com/servicios/planes-de-manejo-ambiental",
              },
            ],
          },
        ]}
      />
      <Header />

      {/* Hero Section - Responsive Optimizado */}
      <section className="h-screen lg:h-[550px] bg-gradient-to-br from-brand-green via-brand-teal to-brand-lime relative overflow-hidden flex items-center pt-20">
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
            <p className="text-base lg:text-2xl text-white/95 max-w-4xl mx-auto mb-8 leading-relaxed">
              Diseñamos e implementamos planes de manejo para minimizar impactos ambientales
              y asegurar prácticas sustentables en proyectos de todas las escalas. Programas
              personalizados para empresas, municipios y proyectos extractivos en la Patagonia.
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

      {/* Services */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Nuestros Planes de Manejo Ambiental en la Patagonia
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-green-300 group"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-green rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl lg:text-2xl group-hover:text-brand-teal transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-brand-green" />
                        Servicios Incluidos:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-700 flex items-start gap-2"
                          >
                            <div className="w-5 h-5 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="h-3 w-3 text-white" />
                            </div>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process & Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Proceso de Implementación del Plan de Manejo
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-brand-lime/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                Etapas de Implementación
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Diagnóstico:</strong> Evaluación inicial de aspectos ambientales
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Diseño:</strong> Elaboración de programas ambientales específicos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Capacitación:</strong> Formación del personal en prácticas sustentables
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Implementación:</strong> Puesta en marcha de medidas ambientales
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Seguimiento:</strong> Monitoreo continuo de indicadores
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Mejora:</strong> Ajustes y optimización del sistema
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-brand-lime/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                Componentes del Plan
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <TreePine className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Gestión de Residuos:</strong> Clasificación, minimización y disposición
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <TreePine className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Control de Emisiones:</strong> Aire, agua, ruido y vibraciones
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <TreePine className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Uso de Recursos:</strong> Eficiencia energética e hídrica
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <TreePine className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Biodiversidad:</strong> Protección de flora y fauna
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <TreePine className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Protocolos:</strong> Emergencias ambientales y contingencias
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <TreePine className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Auditorías:</strong> Revisiones periódicas de cumplimiento
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <div className="sr-only">
        <h2>Planes de Manejo Ambiental - Cobertura Completa Patagonia</h2>
        <p>
          IAAF Ambiental diseña e implementa Planes de Manejo Ambiental profesionales en
          toda la Patagonia incluyendo:
        </p>
        <p>
          Plan manejo ambiental Puerto Madryn, gestión ambiental empresas Trelew,
          programa ambiental Rawson, plan gestión Comodoro Rivadavia, manejo ambiental
          Esquel, plan ambiental municipios Chubut, gestión sustentable Patagonia,
          ISO 14001 Puerto Madryn, programa ambiental empresas Río Negro, plan manejo
          construcción Patagonia Argentina.
        </p>
      </div>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-brand-teal to-brand-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Necesita Implementar un Plan de Manejo Ambiental?
          </h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-white/95">
            Contáctenos para una evaluación inicial sin cargo. Diseñaremos un programa
            ambiental personalizado que mejore el desempeño sustentable de su organización.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-teal hover:bg-gray-50 font-bold text-lg px-8 py-6 shadow-2xl"
            >
              <Link to="/contacto">Solicitar Cotización</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicioPlanesManejo;