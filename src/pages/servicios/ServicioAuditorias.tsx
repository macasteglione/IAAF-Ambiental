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
  Building2,
  Landmark,
  Factory,
  CheckCircle,
} from "lucide-react";

const ServicioAuditorias = () => {
  const services = [
    {
      icon: Building2,
      title: "Auditorías para Empresas Privadas",
      description:
        "Evaluación exhaustiva del desempeño ambiental de empresas privadas para identificar brechas de cumplimiento y oportunidades de mejora continua.",
      features: [
        "Diagnóstico de cumplimiento legal",
        "Revisión de sistemas de gestión",
        "Evaluación de procesos productivos",
        "Análisis de riesgos ambientales",
        "Recomendaciones priorizadas",
        "Plan de acción correctivo",
      ],
    },
    {
      icon: Landmark,
      title: "Auditorías para Instituciones Públicas",
      description:
        "Auditorías especializadas para organismos públicos, municipios y entidades gubernamentales que requieren verificar su cumplimiento normativo.",
      features: [
        "Cumplimiento normativo provincial",
        "Evaluación de gestión de residuos",
        "Revisión de infraestructura",
        "Análisis de procedimientos",
        "Informes para autoridades",
        "Seguimiento de implementación",
      ],
    },
    {
      icon: Factory,
      title: "Auditorías para Industria y ONGs",
      description:
        "Evaluaciones técnicas para industrias (minería, pesca, manufactura) y organizaciones no gubernamentales que gestionan proyectos ambientales.",
      features: [
        "Verificación de permisos y licencias",
        "Evaluación de impactos operativos",
        "Revisión de monitoreos ambientales",
        "Entrevistas con personal clave",
        "Informes certificados independientes",
        "Seguimiento trimestral de hallazgos",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Auditorías Ambientales | IAAF Ambiental"
        description="Auditorías Ambientales profesionales en Puerto Madryn y toda la Patagonia. Evaluación de cumplimiento normativo para empresas privadas, instituciones públicas, industrias y ONGs. Diagnóstico certificado y recomendaciones de mejora."
        keywords="auditoría ambiental puerto madryn, evaluación cumplimiento chubut, auditoría empresas patagonia, diagnóstico ambiental trelew, auditoría normativa rawson, consultor auditoría ambiental, ISO 14001 auditoría"
        url="https://iaafambiental.com/servicios/auditorias-ambientales"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "IAAF Ambiental - Auditorías Ambientales",
            description:
              "Auditorías Ambientales profesionales para evaluación de cumplimiento normativo en Puerto Madryn y toda la Patagonia",
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
              "Auditorías Ambientales",
              "Evaluación de Cumplimiento",
              "Diagnóstico Ambiental",
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
                name: "Auditorías Ambientales",
                item: "https://iaafambiental.com/servicios/auditorias-ambientales",
              },
            ],
          },
        ]}
      />
      <Header />

      {/* Hero Section - Responsive Optimizado */}
      <section className="h-screen lg:h-[550px] bg-gradient-to-br from-brand-green via-brand-teal to-brand-lime relative overflow-hidden flex items-center lg:pt-20">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 40% 30%, rgba(255,255,255,0.15) 0%, transparent 50%),
                             radial-gradient(circle at 60% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl lg:text-5xl xl:text-5xl font-bold text-white mb-6 leading-tight">
              Auditorías Ambientales
            </h1>
            <p className="text-base lg:text-2xl text-white/95 max-w-4xl mx-auto mb-8 leading-relaxed">
              Evaluación profesional del desempeño ambiental de organizaciones y
              proyectos según normativa vigente nacional y provincial.
              Diagnóstico de cumplimiento, recomendaciones de mejora e informes
              certificados para empresas, instituciones públicas, industrias y
              ONGs en la Patagonia.
            </p>
            <div className="flex items-center justify-center text-white">
              <MapPin className="lg:h-6 h-5 w-6 mr-2" />
              <span className="lg:text-lg text-xs font-semibold">
                Puerto Madryn, Trelew, Rawson y toda la Región Patagónica
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Nuestras Auditorías Ambientales en la Patagonia
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
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-lime to-brand-green rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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
            Proceso de Auditoría Ambiental
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-brand-lime/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                Etapas de la Auditoría
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Planificación:</strong> Definición de alcance y
                    objetivos de auditoría
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Revisión Documental:</strong> Análisis de permisos,
                    registros y procedimientos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Visita In Situ:</strong> Inspección de instalaciones
                    y operaciones
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Entrevistas:</strong> Diálogo con personal clave y
                    responsables
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Informe:</strong> Elaboración de documento
                    certificado con hallazgos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Seguimiento:</strong> Verificación de implementación
                    de mejoras
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-brand-lime/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                Aspectos Evaluados
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <ClipboardCheck className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Cumplimiento Legal:</strong> Normativa nacional y
                    provincial vigente
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ClipboardCheck className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Permisos y Licencias:</strong> Vigencia y
                    actualización de habilitaciones
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ClipboardCheck className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Gestión de Residuos:</strong> Clasificación,
                    almacenamiento y disposición
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ClipboardCheck className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Emisiones:</strong> Control de aire, agua, ruido y
                    efluentes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ClipboardCheck className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Sistemas de Gestión:</strong> Procedimientos y
                    registros ambientales
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ClipboardCheck className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Capacitación:</strong> Formación del personal en
                    temas ambientales
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <div className="sr-only">
        <h2>Auditorías Ambientales - Cobertura Completa Patagonia</h2>
        <p>
          IAAF Ambiental realiza Auditorías Ambientales profesionales en toda la
          Patagonia incluyendo:
        </p>
        <p>
          Auditoría ambiental Puerto Madryn, evaluación cumplimiento Trelew,
          auditoría empresas Rawson, diagnóstico ambiental Comodoro Rivadavia,
          auditoría normativa Esquel, evaluación ISO 14001 Chubut, auditoría
          instituciones públicas Patagonia, diagnóstico industria Río Negro,
          auditoría ONGs Patagonia Argentina.
        </p>
      </div>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-brand-lime to-brand-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Necesita una Auditoría Ambiental?
          </h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-white/95">
            Contáctenos para una evaluación inicial sin cargo. Realizaremos un
            diagnóstico certificado de su desempeño ambiental y le
            proporcionaremos recomendaciones concretas.
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

export default ServicioAuditorias;
