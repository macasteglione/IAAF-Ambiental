import React from 'react';
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
  Globe2,
  Users,
  CheckCircle,
  BookOpen,
  GraduationCap,
  Building2,
  School,
  Landmark,
  Heart,
  Award,
  Target,
} from 'lucide-react';

const ServicioEducacionAmbiental = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Capacitaciones Empresariales",
      description:
        "Programas de formación ambiental a medida para empresas, industrias y organizaciones en toda la Patagonia.",
      features: [
        "Capacitaciones personalizadas",
        "Formación en normativas",
        "Gestión ambiental corporativa",
        "Talleres de sustentabilidad",
        "Certificaciones de asistencia",
        "Seguimiento y evaluación",
      ],
    },
    {
      icon: School,
      title: "Educación Ambiental Escolar",
      description:
        "Programas educativos integrales para instituciones educativas, desde nivel inicial hasta secundario.",
      features: [
        "Talleres interactivos",
        "Material didáctico inclusivo",
        "Proyectos ambientales escolares",
        "Salidas educativas",
        "Formación docente",
        "Programas anuales",
      ],
    },
    {
      icon: Users,
      title: "Programas Comunitarios",
      description:
        "Iniciativas de concientización y educación ambiental para municipios, ONGs y la comunidad en general.",
      features: [
        "Charlas comunitarias",
        "Campañas de sensibilización",
        "Eventos ambientales",
        "Material de difusión",
        "Formación de promotores",
        "Programas participativos",
      ],
    },
  ];

  const suitableFor = [
    {
      icon: School,
      name: "Escuelas",
      description: "Educación ambiental para todos los niveles",
    },
    {
      icon: Building2,
      name: "Empresas",
      description: "Capacitación corporativa en sustentabilidad",
    },
    {
      icon: Landmark,
      name: "Municipios",
      description: "Programas de concientización ciudadana",
    },
    {
      icon: Heart,
      name: "Comunidad",
      description: "Talleres y charlas para el público general",
    },
  ];

  const topics = [
    {
      icon: Globe2,
      title: "Cambio Climático",
      description: "Causas, efectos y acciones de mitigación",
    },
    {
      icon: Target,
      title: "Economía Circular",
      description: "Modelos de producción sustentable",
    },
    {
      icon: BookOpen,
      title: "Biodiversidad",
      description: "Conservación de ecosistemas patagónicos",
    },
    {
      icon: Award,
      title: "Gestión de Recursos",
      description: "Uso eficiente de agua y energía",
    },
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Educación y Capacitación Ambiental | IAAF Ambiental"
        description="Educación y capacitación ambiental profesional en Puerto Madryn, Trelew, Rawson y toda la Patagonia. Talleres, cursos y programas educativos sobre medio ambiente y desarrollo sustentable para escuelas, empresas, municipios y comunidad."
        keywords="educación ambiental puerto madryn, capacitación ambiental chubut, talleres sustentabilidad patagonia, cursos medio ambiente trelew, educación ambiental escuelas rawson, capacitación empresas puerto madryn, talleres ambientales chubut, formación sustentable patagonia, programas educativos ambientales, charlas medio ambiente"
        url="https://iaafambiental.com/servicios/educacion-y-capacitacion-ambiental"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "IAAF Ambiental - Educación y Capacitación Ambiental",
            description:
              "Diseño e implementación de talleres, cursos y programas educativos sobre medio ambiente y desarrollo sustentable en Puerto Madryn y toda la Patagonia",
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
              "Educación Ambiental",
              "Capacitación Empresarial",
              "Talleres de Sustentabilidad",
              "Programas Educativos Ambientales",
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
                name: "Educación y Capacitación Ambiental",
                item: "https://iaafambiental.com/servicios/educacion-y-capacitacion-ambiental",
              },
            ],
          },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="h-screen lg:h-[550px] bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 relative overflow-hidden flex items-center lg:pt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl xl:text-5xl font-bold text-white mb-6 leading-tight">
              Educación y Capacitación Ambiental
            </h1>
            <p className="text-base lg:text-2xl text-white/95 max-w-4xl mx-auto mb-8 leading-relaxed">
              Diseño e implementación de talleres, cursos y programas educativos
              sobre medio ambiente y desarrollo sustentable. Formación integral
              para escuelas, empresas, municipios y comunidad en toda la
              Patagonia con metodologías participativas e innovadoras.
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Programas de Educación Ambiental en la Patagonia
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-purple-300 group"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl lg:text-2xl group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-600" />
                        Servicios Incluidos:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-700 flex items-start gap-2"
                          >
                            <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
            ¿Para Quién son Nuestros Programas?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suitableFor.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-300"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Topics Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
            Temáticas que Abordamos
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Nuestros programas cubren una amplia variedad de temas ambientales
            adaptados a las necesidades de cada grupo
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-300"
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-lg mb-2">
                      {topic.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {topic.description}
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
            Nuestra Metodología
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-50 rounded-2xl p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                Enfoque Pedagógico
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Aprendizaje Activo:</strong> Metodologías
                    participativas e interactivas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Contextualización:</strong> Contenidos adaptados a
                    la realidad patagónica
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Práctica y Acción:</strong> Proyectos aplicables a
                    la vida cotidiana
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Evaluación Continua:</strong> Seguimiento del
                    aprendizaje y mejoras
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Materiales Innovadores:</strong> Recursos didácticos
                    de calidad
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Enfoque Lúdico:</strong> Juegos y dinámicas para
                    facilitar el aprendizaje
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-2xl p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                Beneficios de Nuestros Programas
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Conciencia Ambiental:</strong> Desarrollo de valores
                    y compromiso ecológico
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Herramientas Prácticas:</strong> Conocimientos
                    aplicables en el día a día
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Cumplimiento Legal:</strong> Capacitación en
                    normativa ambiental vigente
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Certificación:</strong> Constancias oficiales de
                    participación
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Responsabilidad Social:</strong> Fortalecimiento de
                    la imagen institucional
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Multiplicadores:</strong> Formación de agentes de
                    cambio ambiental
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            ¿Cómo Trabajamos?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-purple-200">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <CardTitle className="text-xl">Diagnóstico</CardTitle>
                <CardDescription>
                  Evaluamos las necesidades específicas de su institución u
                  organización
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 border-purple-200">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <CardTitle className="text-xl">Diseño Personalizado</CardTitle>
                <CardDescription>
                  Desarrollamos un programa a medida con objetivos claros y
                  alcanzables
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 border-purple-200">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <CardTitle className="text-xl">Implementación</CardTitle>
                <CardDescription>
                  Ejecutamos el programa con seguimiento continuo y evaluación
                  de resultados
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <div className="sr-only">
        <h2>
          Educación y Capacitación Ambiental - Cobertura Completa Patagonia
        </h2>
        <p>
          IAAF Ambiental ofrece servicios profesionales de educación y
          capacitación ambiental en toda la Patagonia incluyendo:
        </p>
        <p>
          Educación ambiental Puerto Madryn, capacitación ambiental Trelew,
          talleres sustentabilidad Rawson, cursos medio ambiente Comodoro
          Rivadavia, educación escolar ambiental Esquel, capacitación empresas
          Gaiman, talleres educativos Dolavon, formación ambiental Puerto
          Pirámides, programas educativos Península Valdés, capacitación
          sustentable Comarca Andina, educación ambiental Chubut, talleres
          Patagonia Argentina.
        </p>
      </div>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-purple-500 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Interesado en Nuestros Programas Educativos?
          </h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-white/95">
            Contáctenos hoy para diseñar un programa de educación ambiental a
            medida. Creamos experiencias de aprendizaje significativas que
            generan cambios reales.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-50 font-bold text-lg px-8 py-6 shadow-2xl"
            >
              Solicitar Información
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicioEducacionAmbiental;