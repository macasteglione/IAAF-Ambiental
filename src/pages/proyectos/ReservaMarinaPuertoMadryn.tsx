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
  Droplets,
  Fish,
  Ship,
  Award,
  CheckCircle,
  Calendar,
  Users,
  Target,
} from "lucide-react";

const ReservaMarinaPuertoMadryn = () => {
  const projectPhases = [
    {
      icon: Target,
      title: "Diagnóstico Ambiental",
      description:
        "Evaluación inicial del estado ambiental de la zona costera y marina del Golfo Nuevo.",
      status: "Completado",
      date: "Enero - Marzo 2024",
    },
    {
      icon: Fish,
      title: "Estudio de Biodiversidad Marina",
      description:
        "Relevamiento de especies marinas, aves costeras y mamíferos marinos en el área de influencia.",
      status: "Completado",
      date: "Abril - Junio 2024",
    },
    {
      icon: Droplets,
      title: "Análisis de Calidad de Agua",
      description:
        "Monitoreo de parámetros físico-químicos y biológicos del agua marina y costera.",
      status: "En Progreso",
      date: "Julio - Septiembre 2024",
    },
    {
      icon: Ship,
      title: "Plan de Gestión Sustentable",
      description:
        "Desarrollo de estrategias para la conservación y uso sustentable de los recursos marinos.",
      status: "Planificado",
      date: "Octubre - Diciembre 2024",
    },
  ];

  const objectives = [
    "Proteger y conservar la biodiversidad marina del Golfo Nuevo",
    "Establecer zonas de protección para especies amenazadas",
    "Promover el turismo sustentable y la educación ambiental",
    "Desarrollar un sistema de monitoreo continuo de la calidad ambiental",
    "Involucrar a la comunidad local en la gestión de la reserva",
    "Generar información científica para la toma de decisiones",
  ];

  const achievements = [
    {
      icon: Award,
      title: "Reconocimiento Provincial",
      description:
        "El proyecto fue reconocido por la Secretaría de Ambiente de Chubut como modelo de gestión ambiental costera.",
    },
    {
      icon: Users,
      title: "Participación Comunitaria",
      description:
        "Más de 200 vecinos y pescadores artesanales participaron en talleres de capacitación y consultas públicas.",
    },
    {
      icon: Leaf,
      title: "Recuperación de Ecosistemas",
      description:
        "Se identificaron 3 áreas críticas para la restauración de praderas de algas y fondos marinos.",
    },
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Proyecto Reserva Marina Puerto Madryn | Conservación Golfo Nuevo | IAAF Ambiental"
        description="Proyecto de creación y gestión de reserva marina en Puerto Madryn, Golfo Nuevo. Estudio de biodiversidad, monitoreo ambiental y plan de conservación de ecosistemas marinos en la Patagonia."
        keywords="reserva marina puerto madryn, conservación golfo nuevo, biodiversidad marina patagonia, proyecto ambiental chubut, gestión costera puerto madryn, monitoreo marino, ecosistemas marinos patagonia"
        url="https://iaafambiental.com/proyectos/reserva-marina-puerto-madryn"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Project",
            name: "Proyecto Reserva Marina Puerto Madryn",
            description:
              "Proyecto de creación y gestión de reserva marina para la conservación de la biodiversidad del Golfo Nuevo",
            location: {
              "@type": "Place",
              name: "Puerto Madryn, Golfo Nuevo",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Puerto Madryn",
                addressRegion: "Chubut",
                addressCountry: "AR",
              },
            },
            organizer: {
              "@type": "Organization",
              name: "IAAF Ambiental",
            },
            startDate: "2024-01-01",
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
                name: "Proyectos",
                item: "https://iaafambiental.com/proyectos",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Reserva Marina Puerto Madryn",
                item: "https://iaafambiental.com/proyectos/reserva-marina-puerto-madryn",
              },
            ],
          },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-green-50/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Reserva Marina Puerto Madryn
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Proyecto integral de conservación y gestión sustentable de los
              ecosistemas marinos del Golfo Nuevo. Un trabajo colaborativo entre
              IAAF Ambiental, autoridades locales y la comunidad para proteger la
              biodiversidad marina de la Patagonia.
            </p>
            <div className="flex items-center justify-center text-blue-700 mb-8">
              <MapPin className="h-6 w-6 mr-2" />
              <span className="text-lg font-semibold">
                Puerto Madryn, Golfo Nuevo, Chubut
              </span>
            </div>
            <div className="flex items-center justify-center text-gray-600 gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Inicio: Enero 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Equipo: 12 profesionales</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Sobre el Proyecto
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Target className="h-8 w-8 text-blue-600" />
                Objetivos del Proyecto
              </h3>
              <ul className="space-y-3">
                {objectives.map((objective, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Contexto y Justificación
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                El Golfo Nuevo es un área de importancia crítica para la
                biodiversidad marina de la Patagonia, hogar de ballenas francas
                australes, lobos marinos, pingüinos y una gran diversidad de
                especies de peces e invertebrados.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Este proyecto surge de la necesidad de establecer un marco de
                gestión que permita compatibilizar las actividades humanas con la
                conservación de estos ecosistemas únicos.
              </p>
              <p className="text-gray-700 leading-relaxed">
                IAAF Ambiental lidera el estudio técnico y la elaboración del plan
                de manejo, trabajando en conjunto con pescadores artesanales,
                operadores turísticos y la comunidad científica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Fases del Proyecto
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projectPhases.map((phase, index) => {
              const IconComponent = phase.icon;
              const statusColors = {
                Completado: "bg-brand-lime/10 text-brand-dark border-green-300",
                "En Progreso": "bg-blue-100 text-blue-800 border-blue-300",
                Planificado: "bg-gray-100 text-gray-800 border-gray-300",
              };

              return (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-blue-300 group"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${
                          statusColors[
                            phase.status as keyof typeof statusColors
                          ]
                        }`}
                      >
                        {phase.status}
                      </span>
                    </div>
                    <CardTitle className="text-xl lg:text-2xl group-hover:text-blue-700 transition-colors">
                      {phase.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {phase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{phase.date}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Logros y Resultados
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-blue-50 rounded-2xl p-8 border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-cyan-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Interesado en Nuestros Proyectos?
          </h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-white/95">
            Conoce más sobre nuestros proyectos ambientales o consulta cómo podemos
            ayudarte con tu iniciativa de conservación.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-50 font-bold text-lg px-8 py-6 shadow-2xl"
            >
              <Link to="/proyectos">Ver Más Proyectos</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold text-lg px-8 py-6 backdrop-blur-sm bg-white/10"
            >
              <Link to="/contacto">Contactar</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReservaMarinaPuertoMadryn;
