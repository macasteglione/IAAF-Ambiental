import { Suspense, lazy } from "react";
import EnhancedSEO from "@/components/EnhancedSEO";

const Header = lazy(() => import("@/components/Navbar"));
const Footer = lazy(() => import("@/components/Footer"));

const Accessibility = () => {
  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Declaración de Accesibilidad | IAAF Ambiental"
        description="Nuestro compromiso con la accesibilidad web y el cumplimiento de las normas de accesibilidad argentinas y los estándares WCAG 2.1 AA."
        url="https://iaafambiental.com/accesibilidad"
      />

      <Suspense
        fallback={<div className="h-16 animate-pulse bg-gray-200"></div>}
      >
        <Header />
      </Suspense>

      <main id="main-content" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Declaración de Accesibilidad
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              En IAAF Ambiental nos comprometemos a garantizar que nuestro sitio
              web sea accesible para todos, incluyendo personas con
              discapacidad. Nuestro objetivo es cumplir o superar los estándares
              establecidos en la Ley 26.378 (Convención sobre los Derechos de
              las Personas con Discapacidad), la Ley 26.653 de Accesibilidad de
              la Información y siguiendo las Pautas de Accesibilidad para el
              Contenido Web (WCAG) 2.1 nivel AA.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Nuestro Compromiso
            </h2>
            <p className="text-gray-700 mb-4">
              Nos esforzamos por hacer que nuestro contenido en línea sea:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>
                <strong>Perceptible</strong> – la información y los componentes
                de la interfaz se presentan de manera que todos los usuarios
                puedan percibirlos.
              </li>
              <li>
                <strong>Operable</strong> – las funciones del sitio web son
                accesibles usando teclado o tecnología de asistencia.
              </li>
              <li>
                <strong>Comprensible</strong> – el contenido es claro,
                consistente y fácil de navegar.
              </li>
              <li>
                <strong>Robusto</strong> – compatible con tecnologías de
                asistencia actuales y futuras.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Características de Accesibilidad
            </h2>
            <p className="text-gray-700 mb-4">
              Nuestro sitio web incluye las siguientes características:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Texto alternativo descriptivo para imágenes.</li>
              <li>Navegación clara y consistente en todas las páginas.</li>
              <li>Contraste de texto suficiente para la legibilidad.</li>
              <li>
                Estructura lógica de encabezados para lectores de pantalla.
              </li>
              <li>Navegación y formularios accesibles por teclado.</li>
              <li>
                Ausencia de contenido parpadeante o animaciones que puedan
                causar daño.
              </li>
              <li>Compatibilidad con herramientas de asistencia.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Mejoras Continuas
            </h2>
            <p className="text-gray-700 mb-6">
              Revisamos y mejoramos continuamente nuestro sitio web para mejorar
              la accesibilidad. Agradecemos los comentarios de los usuarios para
              ayudarnos a identificar y resolver cualquier problema.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Comentarios y Contacto
            </h2>
            <p className="text-gray-700 mb-4">
              Si experimenta alguna dificultad para acceder a la información en
              nuestro sitio o desea sugerir mejoras, por favor contáctenos:
            </p>
            <p className="text-gray-700 mb-6">
              Email:{" "}
              <a
                href="mailto:contacto@iaafambiental.com.ar"
                className="text-brand-green hover:underline"
              >
                contacto@iaafambiental.com
              </a>
            </p>
            <p className="text-gray-700">
              Nos comprometemos a responder todas las consultas relacionadas con
              la accesibilidad dentro de los 3 días hábiles.
            </p>
          </div>
        </div>
      </main>

      <Suspense
        fallback={<div className="h-32 animate-pulse bg-gray-200"></div>}
      >
        <Footer />
      </Suspense>
    </div>
  );
};

export default Accessibility;
