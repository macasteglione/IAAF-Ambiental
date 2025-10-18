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
  Leaf,
  FileCheck,
  Shield,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";

const ServicioEIA = () => {
  const services = [
    {
      icon: FileCheck,
      title: "EIA para Obras Civiles",
      description:
        "Evaluaciones ambientales completas para proyectos de construcción, infraestructura vial y obras públicas en la Patagonia.",
      features: [
        "Línea de Base Ambiental",
        "Evaluación de Impactos",
        "Medidas de Mitigación",
        "Plan de Gestión Ambiental",
        "Monitoreo y Seguimiento",
        "Gestión de Permisos",
      ],
    },
    {
      icon: Leaf,
      title: "EIA para Industria",
      description:
        "Estudios especializados para proyectos industriales, mineros, pesqueros y de energía en toda la región.",
      features: [
        "Evaluación de Procesos",
        "Análisis de Emisiones",
        "Gestión de Efluentes",
        "Impacto en Biodiversidad",
        "Planes de Contingencia",
        "Cumplimiento Normativo",
      ],
    },
    {
      icon: Shield,
      title: "EIA para Proyectos Turísticos",
      description:
        "Evaluaciones ambientales para desarrollos turísticos sustentables, hoteles y emprendimientos recreativos.",
      features: [
        "Impacto Paisajístico",
        "Protección de Ecosistemas",
        "Gestión de Recursos Hídricos",
        "Evaluación Social",
        "Certificaciones Ambientales",
        "Turismo Sustentable",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Estudios de Impacto Ambiental (EIA) Puerto Madryn | Evaluación Ambiental Chubut Patagonia | IAAF Ambiental"
        description="Estudios de Impacto Ambiental profesionales en Puerto Madryn, Trelew, Rawson y toda la Patagonia. Evaluaciones ambientales completas para obras civiles, industria, minería, turismo. Equipo certificado, cumplimiento normativo garantizado."
        keywords="estudio impacto ambiental puerto madryn, EIA chubut, evaluación ambiental patagonia, impacto ambiental trelew, EIA rawson, estudio ambiental comodoro rivadavia, evaluación impacto patagonia, consultora ambiental puerto madryn, EIA industria chubut, impacto ambiental obras civiles, evaluación turismo sustentable, EIA minería patagonia"
        url="https://iaafambiental.com/servicios/estudios-de-impacto-ambiental"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "IAAF Ambiental - Estudios de Impacto Ambiental",
            description:
              "Estudios de Impacto Ambiental profesionales con equipo certificado en Puerto Madryn y toda la Patagonia",
            areaServed: [
              "Puerto Madryn",
              "Trelew",
              "Rawson",
              "Comodoro Rivadavia",
              "Esquel",
              "Patagonia",
              "Chubut",
            ],
            telephone: "+54 280 412-3456",
            email: "contacto@iaafambiental.com.ar",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Dirección de oficina",
              addressLocality: "Puerto Madryn",
              addressRegion: "Chubut",
              postalCode: "U9120",
              addressCountry: "AR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -42.7692,
              longitude: -65.0385,
            },
            serviceType: [
              "Estudios de Impacto Ambiental",
              "Evaluación Ambiental",
              "Consultora Ambiental",
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
                item: "https://iaafambiental.com.ar",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Servicios",
                item: "https://iaafambiental.com.ar/servicios",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Estudios de Impacto Ambiental",
                item: "https://iaafambiental.com.ar/servicios/estudios-impacto-ambiental",
              },
            ],
          },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-green via-brand-teal to-brand-lime relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-dark rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Estudios de Impacto Ambiental (EIA)
            </h1>
            <p className="text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto mb-8 leading-relaxed">
              Evaluaciones ambientales profesionales para proyectos en la
              Patagonia. Nuestro equipo certificado realiza EIA completos
              garantizando cumplimiento normativo, identificación de impactos y
              propuestas de mitigación efectivas para obras civiles, industria y
              turismo sustentable.
            </p>
            <div className="flex items-center justify-center text-white mb-8">
              <MapPin className="h-6 w-6 mr-2" />
              <span className="text-lg font-semibold">
                Puerto Madryn, Trelew, Rawson y toda la Región Patagónica
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our EIA Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            ¿Por Qué Elegir Nuestros Servicios de EIA?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-green-50 rounded-2xl p-8 border-2 border-brand-lime/20 hover:border-green-300 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Equipo Certificado
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Profesionales matriculados con amplia experiencia en
                evaluaciones ambientales y conocimiento profundo de la normativa
                argentina.
              </p>
            </div>
            <div className="text-center bg-green-50 rounded-2xl p-8 border-2 border-brand-lime/20 hover:border-green-300 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Cumplimiento Garantizado
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Aseguramos el cumplimiento total de la normativa provincial y
                nacional vigente en materia ambiental.
              </p>
            </div>
            <div className="text-center bg-green-50 rounded-2xl p-8 border-2 border-brand-lime/20 hover:border-green-300 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Experiencia Regional
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Conocimiento especializado de los ecosistemas patagónicos y las
                particularidades ambientales de la región.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Nuestros Servicios de EIA en la Patagonia
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
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-green rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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
            Proceso del Estudio de Impacto Ambiental
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-brand-lime/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                Etapas del EIA
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Diagnóstico:</strong> Relevamiento de la situación
                    ambiental actual
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Identificación:</strong> Determinación de impactos
                    potenciales
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Evaluación:</strong> Análisis de magnitud y
                    significancia
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Mitigación:</strong> Propuestas de medidas
                    correctivas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Plan de Gestión:</strong> Estrategias de
                    implementación
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Seguimiento:</strong> Monitoreo y control
                    post-proyecto
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-brand-lime/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                Componentes Evaluados
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Leaf className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Medio Físico:</strong> Aire, agua, suelo, clima
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Medio Biótico:</strong> Flora, fauna, ecosistemas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Medio Social:</strong> Población, economía, cultura
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Paisaje:</strong> Impacto visual y estético
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Patrimonio:</strong> Recursos culturales e
                    históricos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Riesgos:</strong> Evaluación de contingencias
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <div className="sr-only">
        <h2>Estudios de Impacto Ambiental - Cobertura Completa Patagonia</h2>
        <p>
          IAAF Ambiental realiza Estudios de Impacto Ambiental profesionales en
          toda la Patagonia incluyendo:
        </p>
        <p>
          Estudio impacto ambiental Puerto Madryn, EIA Trelew, evaluación
          ambiental Rawson, impacto ambiental Comodoro Rivadavia, EIA Esquel,
          estudio ambiental Gaiman, evaluación impacto Dolavon, EIA Puerto
          Pirámides, impacto ambiental Península Valdés, estudio ambiental
          Comarca de los Alerces, EIA Chubut, evaluación ambiental Patagonia
          Argentina.
        </p>
      </div>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-brand-green to-brand-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Necesita un Estudio de Impacto Ambiental?
          </h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-white/95">
            Contáctenos hoy para una evaluación inicial sin cargo. Nuestro
            equipo analizará su proyecto y le proporcionará un plan de acción
            personalizado.
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

export default ServicioEIA;
