import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MessageSquare,
  Instagram,
  MapPin,
  Clock,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/src/assets/logo_color.svg"
                alt="IAAF Ambiental - Consultora Ambiental"
                className="h-24 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Consultora ambiental en Puerto Madryn, brindando soluciones
              sostenibles para empresas y comunidades en toda la Patagonia.
            </p>
            <p className="font-semibold mb-4 text-sm leading-relaxed text-brand-lime">
              "Compromiso con el Ambiente y la Sustentabilidad"
            </p>

            {/* Social Media */}
            <div className="flex space-x-3 mb-4">
              <a
                href="https://www.facebook.com/iaafambiental"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                aria-label="Síguenos en Facebook (abre en nueva ventana)"
              >
                <span
                  className="text-base font-bold text-black"
                  aria-hidden="true"
                >
                  f
                </span>
              </a>
              <a
                href="https://www.instagram.com/iaafambiental"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                aria-label="Síguenos en Instagram (abre en nueva ventana)"
              >
                <Instagram className="h-5 w-5 text-black" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/iaaf-ambiental"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                aria-label="Síguenos en LinkedIn (abre en nueva ventana)"
              >
                <span
                  className="text-base font-bold text-black"
                  aria-hidden="true"
                >
                  in
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Enlaces rápidos">
            <h3 className="text-lg font-semibold mb-4 text-brand-lime">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/nosotros"
                  className="text-gray-300 hover:text-white hover:pl-2 transition-all inline-block"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="text-gray-300 hover:text-white hover:pl-2 transition-all inline-block"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/proyectos"
                  className="text-gray-300 hover:text-white hover:pl-2 transition-all inline-block"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  to="/trabajo"
                  className="text-gray-300 hover:text-white hover:pl-2 transition-all inline-block"
                >
                  Trabajá con Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-gray-300 hover:text-white hover:pl-2 transition-all inline-block"
                >
                  Contacto
                </Link>
              </li>
              <li className="pt-2 border-t border-gray-600">
                <Link
                  to="/privacidad"
                  className="text-gray-400 hover:text-gray-200 hover:pl-2 transition-all inline-block text-sm"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  to="/terminos"
                  className="text-gray-400 hover:text-gray-200 hover:pl-2 transition-all inline-block text-sm"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  to="/accesibilidad"
                  className="text-gray-400 hover:text-gray-200 hover:pl-2 transition-all inline-block text-sm"
                >
                  Accesibilidad
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Nuestros servicios">
            <h3 className="text-lg font-semibold mb-4 text-brand-lime">
              Nuestros Servicios
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/servicios/eia"
                  className="text-gray-300 hover:text-white hover:pl-2 transition-all inline-block"
                >
                  Evaluación de Impacto Ambiental
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/gestion-residuos"
                  className="text-gray-300 hover:text-white hover:pl-2 transition-all inline-block"
                >
                  Gestión de Residuos
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/auditorias"
                  className="text-gray-300 hover:text-white hover:pl-2 transition-all inline-block"
                >
                  Auditorías Ambientales
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/monitoreo"
                  className="text-gray-300 hover:text-white hover:pl-2 transition-all inline-block"
                >
                  Monitoreo Ambiental
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/estudios"
                  className="text-gray-300 hover:text-white hover:pl-2 transition-all inline-block"
                >
                  Estudios de Suelo y Agua
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/legislacion"
                  className="text-gray-300 hover:text-white hover:pl-2 transition-all inline-block"
                >
                  Asesoría en Legislación
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/capacitacion"
                  className="text-gray-300 hover:text-white hover:pl-2 transition-all inline-block"
                >
                  Capacitación Ambiental
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/planes"
                  className="text-gray-300 hover:text-white hover:pl-2 transition-all inline-block"
                >
                  Planes de Gestión
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <section aria-labelledby="contact-heading">
            <h3
              id="contact-heading"
              className="text-lg font-semibold mb-4 text-brand-lime"
            >
              Contacto
            </h3>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone
                  className="h-5 w-5 mt-1 flex-shrink-0 text-brand-lime"
                  aria-hidden="true"
                />
                <div>
                  <a
                    href="tel:+542804123456"
                    className="text-white font-semibold hover:underline block"
                  >
                    +54 280 412-3456
                  </a>
                  <p className="text-gray-300 text-sm">
                    Lun a Vie: 9:00 - 18:00 hs
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail
                  className="h-5 w-5 mt-1 flex-shrink-0 text-brand-lime"
                  aria-hidden="true"
                />
                <div>
                  <a
                    href="mailto:contacto@iaafambiental.com.ar"
                    className="text-white hover:underline block break-all"
                  >
                    contacto@iaafambiental.com.ar
                  </a>
                  <p className="text-gray-300 text-sm">Consultas generales</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="flex items-start space-x-3">
                <MessageSquare
                  className="h-5 w-5 mt-1 flex-shrink-0 text-brand-lime"
                  aria-hidden="true"
                />
                <div>
                  <Link
                    to="/contacto"
                    className="text-white hover:underline transition-colors block"
                  >
                    Formulario de Contacto
                    <span className="sr-only"> (abre en la misma ventana)</span>
                  </Link>
                  <p className="text-gray-300 text-sm">Solicitar cotización</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-3 pt-2 border-t border-gray-600">
                <Clock
                  className="h-5 w-5 mt-1 flex-shrink-0 text-brand-lime"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-white font-semibold">
                    Horario de Atención
                  </p>
                  <p className="text-gray-300 text-sm">Lunes a Viernes</p>
                  <p className="text-gray-300 text-sm">09:00 - 18:00 hs</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © {currentYear} IAAF Ambiental. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
