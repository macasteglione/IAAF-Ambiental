import { 
  TreePine, 
  Leaf, 
  Droplet, 
  Factory, 
  Globe, 
  BookOpen,
  Fish
} from "lucide-react";

export interface Proyecto {
  title: string;
  description: string;
  icon: any;
  services: string[];
  events: string[];
  certifications: string[];
  link?: string;
}

export const proyectos: Proyecto[] = [
  {
    title: "Reserva Marina Puerto Madryn",
    description: "Proyecto integral de conservación y gestión sustentable de los ecosistemas marinos del Golfo Nuevo, protegiendo la biodiversidad marina de la Patagonia.",
    icon: Fish,
    services: [
      "Diagnóstico ambiental marino",
      "Estudio de biodiversidad marina",
      "Análisis de calidad de agua",
      "Plan de gestión sustentable",
      "Monitoreo continuo de ecosistemas",
      "Educación ambiental marina"
    ],
    events: [
      "Talleres comunitarios",
      "Capacitación de pescadores",
      "Consultas públicas",
      "Jornadas de avistaje responsable",
      "Programas escolares",
      "Campañas de conservación"
    ],
    certifications: [
      "Reconocimiento Provincial",
      "Gestión Ambiental Costera",
      "Conservación de Biodiversidad",
      "Monitoreo Marino Certificado"
    ],
    link: "/proyectos/reserva-marina-puerto-madryn"
  },
  {
    title: "Reforestación y Conservación",
    description: "Proyectos de reforestación y restauración de ecosistemas degradados para mejorar la biodiversidad y captación de carbono.",
    icon: TreePine,
    services: [
      "Plantación de árboles nativos",
      "Mantenimiento de viveros",
      "Monitoreo de biodiversidad",
      "Planes de restauración ecológica",
      "Educación ambiental comunitaria"
    ],
    events: [
      "Campañas comunitarias",
      "Proyectos educativos",
      "Programas de voluntariado",
      "Talleres ambientales",
      "Proyectos escolares",
      "Jornadas de reforestación"
    ],
    certifications: [
      "ISO 14001",
      "Gestión Ambiental Sustentable",
      "Monitoreo de Biodiversidad",
      "Planes de Restauración Certificados"
    ],
    link: "/proyectos/reforestacion-conservacion"
  },
  {
    title: "Gestión de Recursos Hídricos",
    description: "Evaluación y monitoreo de calidad del agua, optimización de recursos hídricos y protección de cuerpos de agua.",
    icon: Droplet,
    services: [
      "Monitoreo de calidad de agua",
      "Planes de manejo de cuencas",
      "Evaluación de riesgos hídricos",
      "Educación sobre uso responsable",
      "Estudios de impacto ambiental"
    ],
    events: [
      "Proyectos comunitarios",
      "Auditorías ambientales",
      "Capacitaciones industriales",
      "Estudios de impacto hídrico",
      "Proyectos escolares",
      "Campañas de concienciación"
    ],
    certifications: [
      "ISO 14001",
      "Gestión de Recursos Hídricos",
      "Evaluación de Impacto Ambiental",
      "Monitoreo Ambiental"
    ],
    link: "/proyectos/gestion-recursos-hidricos"
  },
  {
    title: "Eficiencia Energética y Energías Renovables",
    description: "Implementación de proyectos de eficiencia energética y adopción de energías renovables en industrias y comunidades.",
    icon: Factory,
    services: [
      "Auditorías energéticas",
      "Instalación de paneles solares",
      "Optimización de consumo energético",
      "Planes de eficiencia para empresas",
      "Capacitación en energías limpias"
    ],
    events: [
      "Proyectos industriales",
      "Proyectos comunitarios",
      "Talleres educativos",
      "Consultorías energéticas",
      "Campañas de concienciación",
      "Ferias de innovación sostenible"
    ],
    certifications: [
      "ISO 50001",
      "Certificación de Energías Renovables",
      "Planes de Eficiencia Energética",
      "Sostenibilidad Corporativa"
    ],
    link: "/proyectos/eficiencia-energetica"
  },
  {
    title: "Educación y Capacitación Ambiental",
    description: "Programas de capacitación y educación ambiental para empresas, escuelas y comunidades.",
    icon: BookOpen,
    services: [
      "Talleres de educación ambiental",
      "Capacitación corporativa",
      "Programas escolares",
      "Campañas de sensibilización",
      "Asesoría en sostenibilidad"
    ],
    events: [
      "Talleres educativos",
      "Seminarios corporativos",
      "Campañas escolares",
      "Charlas comunitarias",
      "Ferias ambientales",
      "Capacitación en línea"
    ],
    certifications: [
      "Educación Ambiental Certificada",
      "ISO 14001",
      "Programas de Sostenibilidad",
      "Gestión de Proyectos Ambientales"
    ],
    link: "/proyectos/educacion-ambiental"
  },
  {
    title: "Evaluación y Gestión de Impacto Ambiental",
    description: "Estudios y asesorías para evaluar, prevenir y mitigar impactos ambientales de proyectos e industrias.",
    icon: Globe,
    services: [
      "Evaluación de impacto ambiental",
      "Planes de mitigación",
      "Monitoreo ambiental",
      "Asesoría en cumplimiento normativo",
      "Planes de gestión sostenible"
    ],
    events: [
      "Proyectos de infraestructura",
      "Proyectos industriales",
      "Proyectos comunitarios",
      "Auditorías ambientales",
      "Consultorías estratégicas",
      "Proyectos educativos"
    ],
    certifications: [
      "ISO 14001",
      "Evaluación de Impacto Ambiental",
      "Planes de Mitigación Certificados",
      "Gestión Ambiental Estratégica"
    ],
    link: "/proyectos/evaluacion-impacto-ambiental"
  },
  {
    title: "Gestión de Residuos y Economía Circular",
    description: "Diseño e implementación de sistemas de gestión de residuos y prácticas de economía circular en empresas y comunidades.",
    icon: Leaf,
    services: [
      "Planes de gestión de residuos",
      "Reciclaje y compostaje",
      "Consultoría en economía circular",
      "Capacitación y concienciación",
      "Monitoreo de cumplimiento normativo"
    ],
    events: [
      "Proyectos industriales",
      "Ferias educativas",
      "Campañas comunitarias",
      "Auditorías ambientales",
      "Programas escolares",
      "Talleres de innovación"
    ],
    certifications: [
      "ISO 14001",
      "Gestión de Residuos Certificada",
      "Economía Circular",
      "Sostenibilidad Corporativa"
    ],
    link: "/proyectos/gestion-residuos"
  }
];
