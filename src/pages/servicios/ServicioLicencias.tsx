import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnhancedSEO from '@/components/EnhancedSEO';
import {
  MapPin,
  ShieldCheck,
  FileCheck,
  Users,
  CheckCircle,
  Building2,
  FileText,
  ClipboardCheck,
  Search,
  Calendar,
  Award,
  Briefcase,
} from 'lucide-react';

const ServicioLicenciasPermisos = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Licencias Ambientales Provinciales",
      description:
        "Gestión completa de licencias ambientales ante organismos provinciales de Chubut y otras provincias patagónicas.",
      features: [
        "Aptitud Ambiental Provincial",
        "Certificado de Prefactibilidad",
        "Declaración de Impacto Ambiental",
        "Licencia de Operación",
        "Renovaciones y modificaciones",
        "Seguimiento de expedientes",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Permisos Nacionales",
      description:
        "Tramitación de permisos ambientales ante organismos nacionales y secretarías de ambiente.",
      features: [
        "Certificado de Aptitud Ambiental",
        "Permisos de vuelco",
        "Generador de residuos peligrosos",
        "Transportista de residuos",
        "Registro de operadores",
        "Gestión ante MAyDS",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Permisos Municipales",
      description:
        "Asesoramiento integral para obtención de habilitaciones y permisos ambientales municipales.",
      features: [
        "Certificado de Zonificación",
        "Habilitación comercial",
        "Permisos de construcción",
        "Factibilidad de uso de suelo",
        "Evaluaciones de impacto local",
        "Gestión de inspecciones",
      ],
    },
  ];

  const suitableFor = [
    {
      icon: Building2,
      name: "Empresas",
      description: "Licencias para operaciones industriales y comerciales",
    },
    {
      icon: Building2,
      name: "Constructores",
      description: "Permisos para obras civiles y desarrollos",
    },
    {
      icon: Briefcase,
      name: "Estudios de Arquitectura",
      description: "Asesoramiento en trámites ambientales",
    },
    {
      icon: Award,
      name: "Ingenierías",
      description: "Gestión de documentación técnica",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Evaluación de Viabilidad",
      description:
        "Análisis preliminar del proyecto y normativa aplicable para determinar la factibilidad ambiental",
      icon: Search,
    },
    {
      number: "2",
      title: "Preparación de Documentación",
      description:
        "Elaboración de toda la documentación técnica requerida según el tipo de trámite",
      icon: FileText,
    },
    {
      number: "3",
      title: "Presentación y Gestión",
      description:
        "Ingreso del expediente ante los organismos correspondientes y seguimiento del proceso",
      icon: ClipboardCheck,
    },
    {
      number: "4",
      title: "Seguimiento del Expediente",
      description:
        "Monitoreo constante del estado del trámite y respuesta a observaciones",
      icon: Calendar,
    },
    {
      number: "5",
      title: "Obtención del Permiso",
      description:
        "Retiro de la documentación aprobada y asesoramiento para su implementación",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Licencias y Permisos Ambientales | IAAF Ambiental"
        description="Gestión integral de licencias y permisos ambientales en Puerto Madryn, Trelew, Rawson y toda la Patagonia. Trámites ante organismos provinciales, nacionales y municipales. Aptitud ambiental, habilitaciones, certificados. Cumplimiento normativo garantizado."
        keywords="licencias ambientales puerto madryn, permisos ambientales chubut, gestión trámites ambientales patagonia, aptitud ambiental trelew, habilitación ambiental rawson, certificado ambiental puerto madryn, licencia operación chubut, permisos construcción patagonia, gestión organismos ambientales, trámites MAyDS"
        url="https://iaafambiental.com/servicios/licencias-y-permisos-ambientales"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "IAAF Ambiental - Licencias y Permisos Ambientales",
            description:
              "Gestión integral de trámites ambientales ante organismos provinciales y nacionales en Puerto Madryn y toda la Patagonia",
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
              postalCode: "U9120",
              addressCountry: "AR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -42.7692,
              longitude: -65.0385,
            },
            serviceType: [
              "Licencias Ambientales",
              "Permisos Ambientales",
              "Gestión de Trámites",
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
                name: "Licencias y Permisos Ambientales",
                item: "https://iaafambiental.com/servicios/licencias-y-permisos-ambientales",
              },
            ],
          },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="h-screen lg:h-[550px] bg-gradient-to-br from-green-600 via-teal-600 to-teal-700 relative overflow-hidden flex items-center lg:pt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-900 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl xl:text-5xl font-bold text-white mb-6 leading-tight">
              Licencias y Permisos Ambientales
            </h1>
            <p className="text-base lg:text-2xl text-white/95 max-w-4xl mx-auto mb-8 leading-relaxed">
              Gestión integral de trámites ambientales ante organismos
              provinciales y nacionales para asegurar el cumplimiento normativo.
              Experiencia comprobada en licencias, habilitaciones y permisos
              para empresas, constructores y profesionales en toda la Patagonia.
            </p>
            <div className="flex items-center justify-center text-white mb-8">
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
            Servicios de Gestión de Licencias en la Patagonia
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
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl lg:text-2xl group-hover:text-teal-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        Trámites Incluidos:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-700 flex items-start gap-2"
                          >
                            <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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

      {/* Suitable For Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            ¿Para Quién es Este Servicio?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suitableFor.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-green-300"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
            Proceso de Gestión de Licencias
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Acompañamos cada etapa del proceso para garantizar una gestión
            eficiente y exitosa de sus trámites ambientales
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-green-300"
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">
                        {step.number}
                      </span>
                    </div>
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-teal-700" />
                    </div>
                    <CardTitle className="text-base mb-2">
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits & Compliance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Ventajas de Nuestro Servicio
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                Beneficios Principales
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Ahorro de Tiempo:</strong> Evite demoras y rechazos
                    en sus trámites
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Experiencia Local:</strong> Conocimiento profundo de
                    organismos patagónicos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Asesoramiento Continuo:</strong> Respaldo profesional
                    en cada etapa
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Documentación Completa:</strong> Elaboración técnica
                    de toda la información requerida
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Seguimiento Personalizado:</strong> Monitoreo
                    constante del estado del expediente
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Cumplimiento Garantizado:</strong> Gestión bajo
                    normativa vigente
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                Organismos con los que Trabajamos
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Ministerio de Ambiente de Chubut:</strong> Gestión
                    provincial
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>MAyDS Nacional:</strong> Ministerio de Ambiente y
                    Desarrollo Sostenible
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Municipalidades:</strong> Trámites locales en
                    Madryn, Trelew, Rawson
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>OPDS:</strong> Organismo Provincial de Desarrollo
                    Sostenible
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Secretarías Provinciales:</strong> Agua, Energía,
                    Minería
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Organismos Nacionales:</strong> Registro de
                    operadores y transportistas
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
          Licencias y Permisos Ambientales - Cobertura Completa Patagonia
        </h2>
        <p>
          IAAF Ambiental ofrece servicios profesionales de gestión de licencias
          y permisos ambientales en toda la Patagonia incluyendo:
        </p>
        <p>
          Licencias ambientales Puerto Madryn, permisos ambientales Trelew,
          aptitud ambiental Rawson, gestión trámites Comodoro Rivadavia,
          habilitaciones ambientales Esquel, certificados ambientales Gaiman,
          licencia operación Dolavon, permisos construcción Puerto Pirámides,
          trámites ambientales Península Valdés, gestión organismos Comarca
          Andina, licencias Chubut, permisos Patagonia Argentina.
        </p>
      </div>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Necesita Gestionar una Licencia o Permiso Ambiental?
          </h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-white/95">
            Contáctenos hoy para una evaluación de viabilidad sin cargo.
            Analizaremos su proyecto y le brindaremos una propuesta de gestión
            personalizada con plazos estimados.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-gray-50 font-bold text-lg px-8 py-6 shadow-2xl"
            >
              Solicitar Evaluación
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicioLicenciasPermisos;