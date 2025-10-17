import { GraduationCap, Briefcase, Users, Mail } from "lucide-react";
import TrabajoCard from "./TrabajoCard";

const CurrentOpportunities = () => {
  const juniorRoles = [
    {
      title: "Asistente de Consultoría Ambiental",
      location: "Puerto Madryn, Chubut",
      type: "Tiempo Completo",
      description:
        "Buscamos profesionales recién recibidos o con poca experiencia para unirse a nuestro equipo. Participarás en estudios de impacto ambiental, monitoreos y relevamientos de campo en proyectos diversos de la Patagonia. Capacitación continua incluida.",
      requirements: [
        "Estudiante avanzado o recién graduado en Ciencias Ambientales, Biología, Ingeniería Ambiental o afines",
        "Disponibilidad para trabajo de campo",
        "Manejo de herramientas informáticas (Office, GIS básico)",
        "Buena predisposición para el aprendizaje",
      ],
      salary: "A convenir",
    },
    {
      title: "Técnico en Monitoreo Ambiental",
      location: "Puerto Madryn y zonas aledañas",
      type: "Part-time / Por proyecto",
      description:
        "Incorporamos técnicos para realizar tareas de monitoreo ambiental, toma de muestras de agua, aire y suelo, y relevamientos in situ. Ideal para quienes inician su carrera en el sector ambiental. Se brinda capacitación específica.",
      requirements: [
        "Formación técnica o terciaria en áreas ambientales",
        "Registro de conducir vigente",
        "Capacidad física para trabajo de campo",
        "Disponibilidad para viajes dentro de la provincia",
      ],
      salary: "Por proyecto",
    },
  ];

  const experiencedRoles = [
    {
      title: "Consultor Ambiental Senior",
      location: "Puerto Madryn, Chubut",
      type: "Tiempo Completo",
      description:
        "Profesional experimentado para liderar estudios de impacto ambiental, auditorías y planes de gestión. Responsable de coordinar equipos técnicos, interactuar con clientes y organismos de control, y asegurar el cumplimiento de normativas ambientales.",
      requirements: [
        "Título universitario en Ciencias Ambientales, Ingeniería Ambiental o carreras afines",
        "Mínimo 5 años de experiencia en consultoría ambiental",
        "Conocimiento profundo de normativa ambiental argentina",
        "Experiencia en gestión de proyectos y equipos",
        "Excelente capacidad de redacción de informes técnicos",
      ],
      salary: "Acorde a experiencia",
    },
    {
      title: "Especialista en Gestión de Residuos",
      location: "Puerto Madryn, Chubut",
      type: "Tiempo Completo / Part-time",
      description:
        "Especialista para desarrollar e implementar planes de gestión integral de residuos sólidos urbanos e industriales. Trabajo con municipios, empresas y organizaciones en toda la región patagónica.",
      requirements: [
        "Título universitario relacionado al área ambiental",
        "Experiencia en gestión de residuos",
        "Conocimiento de normativa provincial y nacional",
        "Capacidad de trabajo interdisciplinario",
      ],
      salary: "A convenir",
    },
    {
      title: "Auditor Ambiental",
      location: "Puerto Madryn y región patagónica",
      type: "Tiempo Completo",
      description:
        "Profesional para realizar auditorías ambientales en diversos sectores productivos, evaluar cumplimiento normativo, identificar no conformidades y proponer planes de acción correctiva y preventiva.",
      requirements: [
        "Formación en auditorías ambientales",
        "Conocimiento de ISO 14001",
        "3+ años de experiencia en el sector",
        "Disponibilidad para viajes frecuentes",
      ],
      salary: "Acorde a experiencia",
    },
  ];

  const specializedRoles = [
    {
      title: "Pasante Universitario",
      location: "Puerto Madryn, Chubut",
      type: "Pasantía / Part-time",
      description:
        "Oportunidad de pasantía para estudiantes de carreras ambientales que deseen adquirir experiencia práctica en consultoría ambiental. Participarás en proyectos reales bajo supervisión de profesionales experimentados. Posibilidad de incorporación futura.",
      requirements: [
        "Estudiante avanzado de carreras ambientales, biología, ingeniería ambiental o afines",
        "Promedio académico destacado",
        "Interés genuino en el área ambiental",
        "Disponibilidad de 20-30 horas semanales",
      ],
      salary: "Beca de pasantía",
    },
    {
      title: "Especialista en SIG (Sistemas de Información Geográfica)",
      location: "Puerto Madryn, Chubut",
      type: "Tiempo Completo",
      description:
        "Profesional especializado en GIS para apoyo en estudios ambientales, mapeo territorial, análisis espacial y elaboración de cartografía temática para proyectos de impacto ambiental y gestión territorial.",
      requirements: [
        "Título universitario con especialización en SIG",
        "Dominio de software GIS (ArcGIS, QGIS)",
        "Experiencia en teledetección y análisis espacial",
        "Conocimientos en bases de datos espaciales",
      ],
      salary: "Acorde a experiencia",
    },
    {
      title: "Coordinador de Proyectos Ambientales",
      location: "Puerto Madryn, Chubut",
      type: "Tiempo Completo",
      description:
        "Profesional para coordinar múltiples proyectos ambientales simultáneamente, gestionar equipos técnicos, relacionarse con clientes y organismos públicos, y asegurar la calidad y cumplimiento de plazos en todas las entregas.",
      requirements: [
        "Título universitario en área ambiental",
        "7+ años de experiencia en gestión de proyectos ambientales",
        "Certificación PMP o similar (deseable)",
        "Excelente capacidad de liderazgo y comunicación",
        "Habilidades en gestión de presupuestos",
      ],
      salary: "A convenir según experiencia",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oportunidades Laborales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontrá el rol perfecto según tu nivel de experiencia y objetivos
            profesionales en el sector ambiental de la Patagonia
          </p>
        </div>

        {/* Posiciones Junior */}
        <div className="mb-16">
          <div className="flex items-center mb-6 bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                ¿Recién Te Recibiste o Estás Comenzando?
              </h3>
              <p className="text-gray-600">
                No necesitas experiencia previa, te capacitamos en nuestros
                procesos y metodologías
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {juniorRoles.map((role, index) => (
              <TrabajoCard key={index} {...role} buttonText="Postularme" />
            ))}
          </div>
        </div>

        {/* Posiciones con Experiencia */}
        <div className="mb-16">
          <div className="flex items-center mb-6 bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-600">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                ¿Tenés Experiencia en Consultoría Ambiental?
              </h3>
              <p className="text-gray-600">
                Buscamos profesionales con trayectoria para liderar proyectos
                desafiantes
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {experiencedRoles.map((role, index) => (
              <TrabajoCard key={index} {...role} buttonText="Postularme" />
            ))}
          </div>
        </div>

        {/* Posiciones Especializadas */}
        <div className="mb-16">
          <div className="flex items-center mb-6 bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
            <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mr-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Posiciones Especializadas y Pasantías
              </h3>
              <p className="text-gray-600">
                ¿Sos estudiante o tenés una especialización técnica? Tenemos
                oportunidades para vos
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {specializedRoles.map((role, index) => (
              <TrabajoCard key={index} {...role} buttonText="Postularme" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentOpportunities;
