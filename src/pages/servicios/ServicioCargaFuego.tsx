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
  Flame,
  TreePine,
  Shield,
  CheckCircle,
} from "lucide-react";

const ServicioCargaFuego = () => {
  const services = [
    {
      icon: TreePine,
      title: "Evaluación de Áreas Forestales",
      description:
        "Análisis detallado de carga de combustible vegetal en bosques nativos e implantados de la Patagonia para prevención de incendios.",
      features: [
        "Inventario de biomasa vegetal",
        "Clasificación de combustibles",
        "Mapeo de zonas de riesgo",
        "Modelos de comportamiento del fuego",
        "Análisis de continuidad vertical y horizontal",
        "Recomendaciones de manejo preventivo",
      ],
    },
    {
      icon: Flame,
      title: "Evaluación en Áreas Protegidas",
      description:
        "Estudios especializados para reservas naturales, parques nacionales y áreas de conservación de biodiversidad.",
      features: [
        "Evaluación de ecosistemas sensibles",
        "Planes de prevención específicos",
        "Zonificación de amenazas",
        "Protección de especies nativas",
        "Monitoreo estacional",
        "Coordinación con autoridades",
      ],
    },
    {
      icon: Shield,
      title: "Evaluación Periurbana e Interfase",
      description:
        "Análisis de carga de fuego en zonas de contacto entre áreas urbanas y vegetación natural para protección de comunidades.",
      features: [
        "Identificación de zonas críticas",
        "Evaluación de vulnerabilidad urbana",
        "Planificación de cortafuegos",
        "Planes de evacuación",
        "Capacitación comunitaria",
        "Coordinación con bomberos",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Estudio de Carga de Fuego Vegetal | IAAF Ambiental"
        description="Estudios de Carga de Fuego Vegetal profesionales en Puerto Madryn y toda la Patagonia. Evaluación de riesgo de incendios forestales, análisis de combustible vegetal, planes de prevención. Protección de bosques nativos y comunidades."
        keywords="carga fuego vegetal puerto madryn, estudio incendios forestales chubut, evaluación riesgo fuego patagonia, análisis combustible vegetal trelew, prevención incendios forestales, estudio biomasa patagonia, riesgo incendio forestal, consultora ambiental fuego"
        url="https://iaafambiental.com/servicios/estudio-de-carga-de-fuego-vegetal"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "IAAF Ambiental - Estudio de Carga de Fuego Vegetal",
            description:
              "Estudios de Carga de Fuego Vegetal profesionales para prevención de incendios forestales en Puerto Madryn y toda la Patagonia",
            areaServed: [
              "Puerto Madryn",
              "Trelew",
              "Rawson",
              "Esquel",
              "El Bolsón",
              "Patagonia",
              "Chubut",
              "Río Negro",
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
              "Estudio de Carga de Fuego Vegetal",
              "Evaluación de Riesgo de Incendios",
              "Prevención de Incendios Forestales",
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
                name: "Estudio de Carga de Fuego Vegetal",
                item: "https://iaafambiental.com/servicios/estudio-de-carga-de-fuego-vegetal",
              },
            ],
          },
        ]}
      />
      <Header />

      {/* Hero Section - Responsive Optimizado */}
      <section className="h-screen lg:h-[550px] bg-gradient-to-br bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 relative overflow-hidden flex items-center lg:pt-20">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 50%),
                             radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
              Estudio de Carga de Fuego Vegetal
            </h1>
            <p className="text-base lg:text-2xl text-white/95 max-w-4xl mx-auto mb-8 leading-relaxed">
              Evaluaciones especializadas de combustible vegetal para prevención
              de incendios forestales en la Patagonia. Análisis detallado de
              biomasa, zonificación de riesgo y planes de manejo para proteger
              bosques nativos, áreas protegidas y comunidades periurbanas.
            </p>
            <div className="flex items-center justify-center text-white">
              <MapPin className="lg:h-6 h-5 w-6 mr-2" />
              <span className="lg:text-lg text-xs font-semibold">
                Puerto Madryn, Esquel, El Bolsón y toda la Región Patagónica
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Nuestros Servicios de Evaluación de Carga de Fuego
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-orange-400 group"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl lg:text-2xl group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        Servicios Incluidos:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-700 flex items-start gap-2"
                          >
                            <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
            Metodología del Estudio de Carga de Fuego
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 rounded-2xl p-8 border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                Etapas del Estudio
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Relevamiento:</strong> Identificación y
                    caracterización de la vegetación
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Cuantificación:</strong> Medición de biomasa y carga
                    de combustible
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Clasificación:</strong> Tipificación de combustibles
                    según modelos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zonificación:</strong> Mapeo de áreas según nivel de
                    riesgo
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Modelado:</strong> Simulación de comportamiento del
                    fuego
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Recomendaciones:</strong> Plan de manejo y
                    prevención
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8 border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                Variables Evaluadas
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Flame className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Tipos de Combustible:</strong> Herbáceo, arbustivo,
                    arbóreo
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Flame className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Humedad:</strong> Contenido de humedad del
                    combustible vivo y muerto
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Flame className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Continuidad:</strong> Horizontal y vertical de la
                    vegetación
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Flame className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Topografía:</strong> Pendientes, exposición y
                    altitud
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Flame className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Clima:</strong> Temperatura, viento, precipitaciones
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Flame className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Accesibilidad:</strong> Vías de acceso y evacuación
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <div className="sr-only">
        <h2>
          Estudio de Carga de Fuego Vegetal - Cobertura Completa Patagonia
        </h2>
        <p>
          IAAF Ambiental realiza Estudios de Carga de Fuego Vegetal
          profesionales en toda la Patagonia incluyendo:
        </p>
        <p>
          Estudio carga fuego Puerto Madryn, evaluación incendios forestales
          Esquel, análisis combustible vegetal El Bolsón, carga fuego Trelew,
          estudio biomasa Rawson, evaluación riesgo incendio Comarca Andina,
          prevención incendios forestales Chubut, análisis fuego vegetal Río
          Negro, estudio combustible Bariloche, evaluación carga fuego Patagonia
          Argentina.
        </p>
      </div>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Necesita un Estudio de Carga de Fuego Vegetal?
          </h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-white/95">
            Contáctenos para una evaluación inicial sin cargo. Proteja su
            propiedad, bosques nativos y comunidades con un análisis profesional
            de riesgo de incendios.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-50 font-bold text-lg px-8 py-6 shadow-2xl"
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

export default ServicioCargaFuego;
