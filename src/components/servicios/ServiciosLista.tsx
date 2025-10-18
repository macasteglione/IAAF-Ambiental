import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  TreePine,
  Waves,
  ClipboardCheck,
  FlaskConical,
  Wind,
  Globe2,
  Map,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const ServiciosLista = () => {
  const mainServices = [
    {
      icon: Leaf,
      title: "Estudios de Impacto Ambiental",
      description:
        "Evaluación detallada de impactos ambientales potenciales y propuestas de mitigación para proyectos públicos y privados en toda la Patagonia.",
      image: "/src/assets/estudio-impacto-servicio.jpg",
      features: [
        "Identificación de impactos",
        "Propuestas de mitigación",
        "Monitoreo post-proyecto",
        "Gestión de permisos",
        "Cumplimiento legal",
        "Interacción con organismos",
      ],
      suitable: ["Obras civiles", "Industria", "Energía", "Turismo"],
      color: "from-brand-green to-brand-green",
    },
    {
      icon: TreePine,
      title: "Planes de Manejo Ambiental",
      description:
        "Diseño e implementación de planes para minimizar impactos y asegurar prácticas sustentables en proyectos de todas las escalas.",
      image: "/src/assets/manejo-ambiental-servicio.webp",
      features: [
        "Diseño de programas ambientales",
        "Seguimiento y control",
        "Capacitación ambiental",
        "Indicadores de gestión",
        "Protocolos de emergencia",
        "Auditorías ambientales",
      ],
      suitable: [
        "Empresas",
        "Municipios",
        "Proyectos extractivos",
        "Construcción",
      ],
      color: "from-brand-teal to-brand-green",
    },
    {
      icon: Waves,
      title: "Monitoreos Ambientales",
      description:
        "Recolección y análisis de datos ambientales para garantizar el cumplimiento normativo y la calidad del entorno.",
      image: "/src/assets/monitoreo-ambiental-servicio.webp",
      features: [
        "Calidad de aire, agua y suelo",
        "Ruido y vibraciones",
        "Biodiversidad",
        "Relevamiento de flora/fauna",
        "Muestreos periódicos",
        "Informes técnicos",
      ],
      suitable: [
        "Obras en ejecución",
        "Áreas protegidas",
        "Industrias",
        "Minería",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: ClipboardCheck,
      title: "Auditorías Ambientales",
      description:
        "Evaluación del desempeño ambiental de una organización o proyecto según normativa vigente nacional y provincial.",
      image: "/src/assets/auditoria-ambiental-servicio.webp",
      features: [
        "Diagnóstico de cumplimiento",
        "Recomendaciones de mejora",
        "Revisión documental",
        "Entrevistas in situ",
        "Informes certificados",
        "Seguimiento de hallazgos",
      ],
      suitable: [
        "Empresas privadas",
        "Instituciones públicas",
        "Industria",
        "ONGs",
      ],
      color: "from-brand-lime to-brand-green",
    },
    {
      icon: FlaskConical,
      title: "Gestión de Residuos",
      description:
        "Asesoramiento en la correcta gestión de residuos sólidos urbanos, peligrosos y patogénicos según normativa argentina.",
      image: "/src/assets/gestion-residual-servicio.avif",
      features: [
        "Caracterización de residuos",
        "Planes de manejo",
        "Minimización en origen",
        "Capacitación",
        "Gestión documental",
        "Cumplimiento de normativa",
      ],
      suitable: ["Hospitales", "Industrias", "Comercios", "Municipios"],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Wind,
      title: "Estudios de Viento y Ruido",
      description:
        "Mediciones e informes para evaluar la influencia de factores físicos en entornos urbanos y rurales.",
      image: "/src/assets/estudio-viento-ruido-servicio.jpg",
      features: [
        "Estaciones meteorológicas",
        "Mediciones in situ",
        "Mapeo acústico",
        "Modelado predictivo",
        "Recomendaciones técnicas",
        "Normas IRAM aplicadas",
      ],
      suitable: [
        "Proyectos eólicos",
        "Obras urbanas",
        "Eventos",
        "Zonificación",
      ],
      color: "from-sky-500 to-sky-600",
    },
    {
      icon: Globe2,
      title: "Educación y Capacitación Ambiental",
      description:
        "Diseño e implementación de talleres, cursos y programas educativos sobre medio ambiente y desarrollo sustentable.",
      image: "/src/assets/capacitacion-educacion-servicio.png",
      features: [
        "Capacitaciones a medida",
        "Charlas y talleres",
        "Material didáctico",
        "Formación continua",
        "Educación ambiental en escuelas",
        "Programas empresariales",
      ],
      suitable: ["Escuelas", "Empresas", "Municipios", "Comunidad"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Map,
      title: "Ordenamiento Territorial",
      description:
        "Análisis y planificación del uso del suelo bajo criterios ambientales, sociales y económicos sustentables.",
      image: "/src/assets/ordenamiento-terrenal-servicio.jpg",
      features: [
        "Zonificación ambiental",
        "Mapas temáticos",
        "Diagnóstico socioambiental",
        "Relevamiento geográfico",
        "Sistemas de Información Geográfica (SIG)",
        "Participación ciudadana",
      ],
      suitable: ["Gobiernos", "Urbanistas", "ONGs", "Proyectos rurales"],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: ShieldCheck,
      title: "Licencias y Permisos Ambientales",
      description:
        "Gestión integral de trámites ambientales ante organismos provinciales y nacionales para asegurar el cumplimiento normativo.",
      image: "/src/assets/permisos-ambientales-servicio.avif",
      features: [
        "Gestión ante organismos",
        "Asesoramiento técnico",
        "Preparación de documentación",
        "Seguimiento del expediente",
        "Evaluación previa de viabilidad",
        "Informes de compatibilidad",
      ],
      suitable: [
        "Empresas",
        "Constructores",
        "Estudios de arquitectura",
        "Ingenierías",
      ],
      color: "from-brand-green to-brand-teal",
    },
  ];

  return (
    <section
      id="servicios"
      className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-green-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Principales Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desde estudios de impacto hasta capacitación ambiental, cada servicio
            está diseñado para proteger el ambiente patagónico y asegurar el
            cumplimiento de la normativa vigente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 bg-white border-2 border-gray-200 hover:border-green-300 overflow-hidden group"
              >
                {/* Image Header */}
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={service.image}
                    alt={`Servicio de ${service.title} - IAAF Ambiental`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback si no existe la imagen
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.classList.add(
                        "flex",
                        "items-center",
                        "justify-center"
                      );
                    }}
                  />
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div
                      className={`bg-gradient-to-br ${service.color} p-4 rounded-xl shadow-2xl backdrop-blur-sm border-2 border-white/30 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl lg:text-2xl mb-3">
                    <Link
                      to={`/servicios/${service.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="hover:text-brand-green transition-colors group-hover:text-brand-teal"
                    >
                      {service.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-green" />
                      Características:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <div className="w-5 h-5 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suitable for */}
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-3">
                      Aplicable a:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.suitable.map((item, idx) => (
                        <Badge
                          key={idx}
                          className="text-xs px-3 py-1.5 bg-brand-green hover:bg-brand-teal text-white border-none font-medium transition-all hover:scale-105"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiciosLista;
