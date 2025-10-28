import {
  Wind,
  Recycle,
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
    title: "Parques Eólicos",
    description:
      "Nuestros profesionales cuentan con experiencia en el mantenimiento del sistema de gestión ambiental segun ISO-IRAM 14001",
    icon: Wind,
    services: [
      "Desarrollo y revisión de procedimientos",
      "Análisis de contexto de la organización",
      "Evaluación de aspectos/impactos ambientales",
      "Análisis de riesgos y oportunidades",
      "Auditorías internas",
      "Seguimiento de la evaluación de desempeño ambiental",
      "Auditorías de cumplimiento de requisitos legales",
    ],
    events: [
      "Energías renovables",
      "Descarbonización del sistema energético",
      "Desarrollo energético sustentable",
    ],
    certifications: [
      "ISO-IRAM 14001",
      "Resolución ENRE 558/2022",
      "Estándares internacionales (IFC)",
    ],
    link: "/proyectos/reserva-marina-puerto-madryn",
  },
  {
    title: "GIRSU",
    description:
      "Realizamos los procedimientos técnicos para determinar la composición de los RSU sin tratamiento según lo establecido en la norma IRAM 29523",
    icon: Recycle,
    services: [
      "Capacitación y supervisión del personal clasificador",
      "Logística en el proceso de muetreo",
      "Redacción del informe técnico",
      "Sugerencias para mejorar el programa de concientización",
    ],
    events: [
      "Proyectos comunitarios",
      "Auditorías ambientales",
      "Capacitaciones industriales",
      "Estudios de impacto hídrico",
      "Proyectos escolares",
      "Campañas de concienciación",
    ],
    certifications: [
      "IRAM 29523",
      "Promoción Ambiental",
      "Asesoramiento a organismos públicos",
    ],
    link: "/proyectos/gestion-recursos-hidricos",
  },
];
