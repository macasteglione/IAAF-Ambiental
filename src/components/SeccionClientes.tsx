import {
  Star,
  Shield,
  CheckCircle,
  Award,
  FileCheck,
  Building2,
} from "lucide-react";

const TrustSection = () => {
  const certifications = [
    { text: "Certificados IRAM-ISO 14001", icon: Award },
    { text: "Registro Provincial Activo", icon: FileCheck },
    { text: "Profesionales Matriculados", icon: CheckCircle },
    { text: "Normativa Ambiental Vigente", icon: Shield },
  ];

  const clientLogos = [
    { name: "Oftalmomadryn", logo: "/img/oftalmomadryn_logo.png" },
    { name: "Abercar Cipolletti", logo: "/img/abercar_cipolletti.png" },
    { name: "Abercar Trelew", logo: "/img/abercar_trelew.png" },
    { name: "Abercar Comodoro", logo: "/img/abercar_comodoro.png" },
  ];

  const sectors = [
    "Industria Pesquera",
    "Minería y Petróleo",
    "Turismo Sustentable",
    "Agricultura y Ganadería",
    "Construcción e Infraestructura",
    "Sector Público Municipal",
  ];

  return (
    <section
      aria-labelledby="trust-heading"
      className="py-16 lg:py-20 bg-gradient-to-br from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            id="trust-heading"
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
          >
            Clientes que Confían en Nosotros
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trabajamos con empresas líderes de diversos sectores en la
            Patagonia, brindando soluciones ambientales que cumplen con los más
            altos estándares de calidad y las normativas vigentes en Argentina.
          </p>
        </div>

        {/* Client Logos */}
        <div className="bg-gradient-to-r from-gray-50 to-green-50/30 py-12 px-8 rounded-2xl mb-16 border-2 border-brand-lime/20 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-8">
            Empresas que Trabajan con IAAF Ambiental
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 transform hover:scale-110"
              >
                <img
                  src={client.logo}
                  alt={`Logo de ${client.name}`}
                  className="w-auto object-contain filter drop-shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sectors Served */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Sectores que Asesoramos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white border-2 border-brand-lime/30 rounded-lg p-4 text-center hover:border-brand-teal hover:shadow-lg transition-all group"
              >
                <Building2 className="h-6 w-6 text-brand-green mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-gray-800 font-medium text-sm">{sector}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications and Quality Guarantee */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Certifications */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Certificaciones y Habilitaciones
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((certification, index) => {
                const IconComponent = certification.icon;
                return (
                  <div
                    key={index}
                    className="bg-brand-green text-white py-4 px-5 rounded-lg border-2 border-brand-teal font-medium flex items-center gap-3 hover:bg-brand-teal transition-all shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <IconComponent
                      className="h-5 w-5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-tight">
                      {certification.text}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="bg-gradient-to-r from-brand-teal to-brand-green text-white py-4 px-5 rounded-xl font-bold flex items-center justify-center gap-3 shadow-xl mt-4">
              <Shield className="h-6 w-6" aria-hidden="true" />
              <span>Excelencia en Gestión Ambiental</span>
            </div>
          </div>

          {/* Right Side - Quality Guarantee */}
          <div className="bg-gradient-to-br from-green-50/50 to-green-50/30 p-8 lg:p-10 rounded-2xl border-4 border-brand-lime/30 shadow-2xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-teal rounded-full mb-6 shadow-lg">
                <Shield className="h-10 w-10 text-white" aria-hidden="true" />
              </div>
              <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Garantía de Calidad
              </h4>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Todos nuestros servicios están respaldados por un equipo de
                profesionales certificados. Garantizamos el cumplimiento de
                normativas ambientales y la máxima calidad en cada proyecto.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial or CTA */}
        <div className="mt-16 bg-gradient-to-r from-brand-green to-brand-teal rounded-2xl p-8 lg:p-12 text-white text-center shadow-2xl">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            ¿Su Empresa Necesita Soluciones Ambientales?
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Únase a las empresas que confían en IAAF Ambiental para sus
            proyectos de gestión ambiental en la Patagonia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center bg-white text-brand-teal px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
            >
              Solicitar Consultoría
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="/proyectos"
              className="inline-flex items-center justify-center bg-brand-dark text-white px-8 py-4 rounded-lg font-bold hover:bg-brand-dark/90 transition-all border-2 border-white/20"
            >
              Ver Proyectos Realizados
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
