import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Shield,
  Users,
  CheckCircle,
  AlertTriangle,
  Recycle,
  Building2,
} from "lucide-react";
import Header from "@/components/Navbar";
import EnhancedSEO from "@/components/EnhancedSEO";
import Footer from "@/components/Footer";

const ServicioResiduos = () => {
  const services = [
    {
      icon: AlertTriangle,
      title: "Residuos Peligrosos",
      description:
        "Gestión especializada de residuos peligrosos para industrias, talleres y laboratorios en toda la Patagonia.",
      features: [
        "Caracterización de residuos",
        "Manifiestos de transporte",
        "Gestión de operadores",
        "Almacenamiento temporal",
        "Documentación legal",
        "Auditorías de cumplimiento",
      ],
    },
    {
      icon: Building2,
      title: "Residuos Patogénicos",
      description:
        "Manejo integral de residuos biopatogénicos para centros de salud, clínicas, consultorios y laboratorios.",
      features: [
        "Clasificación y segregación",
        "Protocolos de bioseguridad",
        "Capacitación del personal",
        "Gestión de contenedores",
        "Planes de contingencia",
        "Cumplimiento sanitario",
      ],
    },
    {
      icon: Recycle,
      title: "Residuos Sólidos Urbanos",
      description:
        "Asesoramiento para municipios, comercios y empresas en la gestión sustentable de residuos domiciliarios.",
      features: [
        "Planes de gestión integral",
        "Programas de reciclaje",
        "Minimización en origen",
        "Compostaje y valorización",
        "Educación ambiental",
        "Optimización de costos",
      ],
    },
  ];

  const suitableFor = [
    {
      icon: Building2,
      name: "Hospitales y Clínicas",
      description: "Gestión de residuos patogénicos y peligrosos",
    },
    {
      icon: Building2,
      name: "Industrias",
      description: "Manejo de residuos industriales y peligrosos",
    },
    {
      icon: Building2,
      name: "Comercios",
      description: "Optimización de gestión de RSU",
    },
    {
      icon: Building2,
      name: "Municipios",
      description: "Planes integrales de gestión urbana",
    },
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Gestión de Residuos | IAAF Ambiental"
        description="Gestión profesional de residuos en Puerto Madryn, Trelew, Rawson y toda la Patagonia. Asesoramiento en residuos peligrosos, patogénicos y sólidos urbanos. Planes de manejo, caracterización, capacitación. Cumplimiento normativo garantizado."
        keywords="gestión residuos puerto madryn, residuos peligrosos chubut, residuos patogénicos patagonia, manejo residuos trelew, gestión RSU rawson, residuos hospitalarios puerto madryn, residuos industriales chubut, asesoramiento residuos patagonia, caracterización residuos, plan manejo residuos, gestión ambiental residuos"
        url="https://iaafambiental.com/servicios/gestion-de-residuos"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "IAAF Ambiental - Gestión de Residuos",
            description:
              "Asesoramiento profesional en gestión de residuos peligrosos, patogénicos y urbanos en Puerto Madryn y toda la Patagonia",
            areaServed: [
              "Puerto Madryn",
              "Trelew",
              "Rawson",
              "Comodoro Rivadavia",
              "Esquel",
              "Patagonia",
              "Chubut",
            ],
            telephone: "+54 280 455-7226",
            email: "adminitracion@iaafambiental.com",
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
              "Gestión de Residuos Peligrosos",
              "Gestión de Residuos Patogénicos",
              "Gestión de Residuos Sólidos Urbanos",
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
                name: "Gestión de Residuos",
                item: "https://iaafambiental.com/servicios/gestion-de-residuos",
              },
            ],
          },
        ]}
      />

      <Header />

      {/* Hero Section */}
      <section className="h-screen lg:h-[550px] bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 relative overflow-hidden flex items-center lg:pt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-900 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl xl:text-5xl font-bold text-white mb-6 leading-tight">
              Gestión de Residuos
            </h1>
            <p className="text-base lg:text-2xl text-white/95 max-w-4xl mx-auto mb-8 leading-relaxed">
              Asesoramiento profesional en la correcta gestión de residuos
              sólidos urbanos, peligrosos y patogénicos según normativa
              argentina. Soluciones integrales para hospitales, industrias,
              comercios y municipios en toda la Patagonia.
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Servicios de Gestión de Residuos en la Patagonia
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-orange-300 group"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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
                        <CheckCircle className="h-5 w-5 text-orange-600" />
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
                  className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-300"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Process & Compliance */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Proceso de Gestión de Residuos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border-2 border-orange-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                Etapas del Servicio
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Diagnóstico:</strong> Evaluación inicial de la
                    situación actual
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Caracterización:</strong> Identificación y
                    clasificación de residuos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Plan de Manejo:</strong> Diseño de estrategias
                    personalizadas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Implementación:</strong> Puesta en marcha del
                    sistema
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Capacitación:</strong> Formación del personal
                    involucrado
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Seguimiento:</strong> Monitoreo y mejora continua
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-orange-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                Cumplimiento Normativo
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Ley 24.051:</strong> Residuos peligrosos nacional
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Ley 25.612:</strong> Gestión integral de residuos
                    industriales
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Normativa Provincial:</strong> Leyes ambientales de
                    Chubut
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Resoluciones MAyDS:</strong> Ministerio de Ambiente
                    y Desarrollo Sostenible
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Normativa Sanitaria:</strong> Residuos patogénicos y
                    biopatológicos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>ISO 14001:</strong> Sistemas de gestión ambiental
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Beneficios de una Gestión Profesional
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-200">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Cumplimiento Legal</CardTitle>
                <CardDescription>
                  Evite sanciones y multas cumpliendo con toda la normativa
                  ambiental vigente
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 border-orange-200">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Recycle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Reducción de Costos</CardTitle>
                <CardDescription>
                  Optimice la gestión de residuos y reduzca costos operativos
                  mediante minimización en origen
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 border-orange-200">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Imagen Corporativa</CardTitle>
                <CardDescription>
                  Mejore la reputación de su organización con prácticas
                  ambientales responsables
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Necesita Asesoramiento en Gestión de Residuos?
          </h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-white/95">
            Contáctenos hoy para una evaluación inicial sin cargo. Analizaremos
            su situación actual y le proporcionaremos un plan de gestión
            personalizado.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-50 font-bold text-lg px-8 py-6 shadow-2xl"
            >
              Solicitar Consulta
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicioResiduos;
