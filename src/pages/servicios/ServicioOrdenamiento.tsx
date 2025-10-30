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
  Map,
  Layers,
  CheckCircle,
  Globe2,
  Compass,
  Landmark,
  Users,
  Building2,
  TreePine,
  MapPinned,
  Scan,
} from 'lucide-react';

const ServicioOrdenamientoTerritorial = () => {
  const services = [
    {
      icon: Layers,
      title: "Zonificación y Planificación",
      description:
        "Análisis y diseño de zonificación ambiental para uso sustentable del territorio en la Patagonia.",
      features: [
        "Zonificación ambiental",
        "Planes de uso del suelo",
        "Análisis de capacidad de carga",
        "Identificación de áreas críticas",
        "Compatibilidad de usos",
        "Normativa territorial",
      ],
    },
    {
      icon: Map,
      title: "Cartografía y SIG",
      description:
        "Elaboración de mapas temáticos y aplicación de Sistemas de Información Geográfica para análisis territorial.",
      features: [
        "Mapas temáticos ambientales",
        "Modelado espacial en SIG",
        "Análisis multicriterio",
        "Cartografía digital",
        "Bases de datos geográficas",
        "Plataformas web interactivas",
      ],
    },
    {
      icon: Users,
      title: "Diagnóstico Participativo",
      description:
        "Relevamiento socioambiental integral con participación de la comunidad y actores locales.",
      features: [
        "Diagnóstico socioambiental",
        "Talleres participativos",
        "Consultas públicas",
        "Relevamiento de campo",
        "Análisis de conflictos",
        "Construcción de consensos",
      ],
    },
  ];

  const suitableFor = [
    {
      icon: Landmark,
      name: "Gobiernos",
      description: "Municipios y provincias para planificación territorial",
    },
    {
      icon: Building2,
      name: "Urbanistas",
      description: "Profesionales del diseño urbano y planificación",
    },
    {
      icon: Users,
      name: "ONGs",
      description: "Organizaciones ambientales y de desarrollo",
    },
    {
      icon: TreePine,
      name: "Proyectos Rurales",
      description: "Planificación de áreas productivas y naturales",
    },
  ];

  const tools = [
    {
      icon: Map,
      title: "SIG (Sistemas de Información Geográfica)",
      description: "Análisis espacial con QGIS, ArcGIS y software especializado",
    },
    {
      icon: Scan,
      title: "Teledetección",
      description: "Análisis de imágenes satelitales y drones",
    },
    {
      icon: Compass,
      title: "GPS y Relevamiento",
      description: "Levantamiento de datos en campo con tecnología precisa",
    },
    {
      icon: Layers,
      title: "Análisis Multicriterio",
      description: "Evaluación integrada de variables ambientales y sociales",
    },
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Ordenamiento Territorial | IAAF Ambiental"
        description="Ordenamiento territorial profesional en Puerto Madryn, Trelew, Rawson y toda la Patagonia. Análisis y planificación del uso del suelo, zonificación ambiental, SIG, mapas temáticos. Criterios ambientales, sociales y económicos sustentables."
        keywords="ordenamiento territorial puerto madryn, planificación territorial chubut, zonificación ambiental patagonia, SIG trelew, uso del suelo rawson, mapas temáticos puerto madryn, planificación urbana chubut, diagnóstico territorial patagonia, sistemas información geográfica, cartografía ambiental"
        url="https://iaafambiental.com/servicios/ordenamiento-territorial"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "IAAF Ambiental - Ordenamiento Territorial",
            description:
              "Análisis y planificación del uso del suelo bajo criterios ambientales, sociales y económicos sustentables en Puerto Madryn y toda la Patagonia",
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
              "Ordenamiento Territorial",
              "Planificación Ambiental",
              "Sistemas de Información Geográfica",
              "Zonificación Territorial",
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
                name: "Ordenamiento Territorial",
                item: "https://iaafambiental.com/servicios/ordenamiento-territorial",
              },
            ],
          },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="h-screen lg:h-[550px] bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 relative overflow-hidden flex items-center lg:pt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl xl:text-5xl font-bold text-white mb-6 leading-tight">
              Ordenamiento Territorial
            </h1>
            <p className="text-base lg:text-2xl text-white/95 max-w-4xl mx-auto mb-8 leading-relaxed">
              Análisis y planificación del uso del suelo bajo criterios
              ambientales, sociales y económicos sustentables. Zonificación
              territorial, Sistemas de Información Geográfica y diagnóstico
              participativo para gobiernos, urbanistas y proyectos en toda la
              Patagonia.
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Servicios de Ordenamiento Territorial en la Patagonia
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-indigo-300 group"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl lg:text-2xl group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-indigo-600" />
                        Servicios Incluidos:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-700 flex items-start gap-2"
                          >
                            <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-indigo-300"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Tools Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
            Herramientas y Tecnologías
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Utilizamos las tecnologías más avanzadas para análisis territorial
            preciso y actualizado
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-indigo-300"
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-lg mb-2">
                      {tool.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology & Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Metodología de Trabajo
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-indigo-50 rounded-2xl p-8 border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                Etapas del Proceso
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Diagnóstico Inicial:</strong> Relevamiento de
                    información base y cartografía existente
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Trabajo de Campo:</strong> Relevamiento geográfico
                    y socioambiental in situ
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Análisis SIG:</strong> Procesamiento de datos
                    espaciales y temáticos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Participación Social:</strong> Talleres y consultas
                    con la comunidad
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Propuesta de Zonificación:</strong> Diseño de
                    alternativas territoriales
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Productos Finales:</strong> Mapas, informes y
                    normativa territorial
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-2xl p-8 border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                Beneficios del Servicio
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <MapPinned className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Planificación Sustentable:</strong> Uso equilibrado
                    del territorio y recursos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPinned className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Prevención de Conflictos:</strong> Identificación
                    temprana de incompatibilidades
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPinned className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Toma de Decisiones:</strong> Información técnica
                    para gestión territorial
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPinned className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Participación Ciudadana:</strong> Inclusión de
                    actores locales en la planificación
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPinned className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Herramientas Modernas:</strong> Plataformas
                    digitales y cartografía actualizada
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPinned className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Cumplimiento Legal:</strong> Planes acorde a
                    normativa territorial vigente
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Aplicaciones del Ordenamiento Territorial
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-indigo-200">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <Landmark className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Planificación Urbana</CardTitle>
                <CardDescription>
                  Crecimiento ordenado de ciudades, zonificación de usos y
                  expansión urbana sustentable
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 border-indigo-200">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <TreePine className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Áreas Naturales</CardTitle>
                <CardDescription>
                  Conservación de ecosistemas, creación de reservas y manejo de
                  áreas protegidas
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 border-indigo-200">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <Globe2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">
                  Desarrollo Productivo
                </CardTitle>
                <CardDescription>
                  Planificación de actividades agrícolas, ganaderas, turísticas
                  e industriales
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <div className="sr-only">
        <h2>Ordenamiento Territorial - Cobertura Completa Patagonia</h2>
        <p>
          IAAF Ambiental ofrece servicios profesionales de ordenamiento
          territorial en toda la Patagonia incluyendo:
        </p>
        <p>
          Ordenamiento territorial Puerto Madryn, planificación territorial
          Trelew, zonificación ambiental Rawson, SIG Comodoro Rivadavia,
          planificación urbana Esquel, mapas temáticos Gaiman, diagnóstico
          territorial Dolavon, cartografía Puerto Pirámides, uso del suelo
          Península Valdés, planificación rural Comarca Andina, ordenamiento
          Chubut, zonificación Patagonia Argentina.
        </p>
      </div>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Necesita un Plan de Ordenamiento Territorial?
          </h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-white/95">
            Contáctenos hoy para una consulta inicial sin cargo. Analizaremos
            las características de su territorio y diseñaremos una propuesta de
            trabajo personalizada.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-50 font-bold text-lg px-8 py-6 shadow-2xl"
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

export default ServicioOrdenamientoTerritorial;