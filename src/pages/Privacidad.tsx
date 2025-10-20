import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Politica de Privacidad | IAAF Ambiental"
        description="Lee nuestra política de privacidad para entender cómo IAAF Ambiental protege y maneja tu información personal de acuerdo con las leyes de privacidad de Argentina"
        keywords="Política de Privacidad, Protección de Datos, IAAF Ambiental, Consultoría Ambiental, Ley de Protección de Datos Argentina"
        url="https://iaafambiental.com/privacy"
        robots="noindex, nofollow"
      />
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Política de Privacidad
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Última Actualización: {new Date().toLocaleDateString("es-AR")}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introducción
            </h2>
            <p className="text-gray-700 mb-4">
              IAAF Ambiental ("nosotros", "nuestro/a" o "la empresa") está
              comprometida con la protección y el respeto de su privacidad. Esta
              Política de Privacidad explica cómo recolectamos, utilizamos y
              protegemos su información personal cuando visita nuestro sitio web
              o utiliza nuestros servicios de consultoría ambiental.
            </p>
            <p className="text-gray-700 mb-4">
              Esta política cumple con la Ley de Protección de Datos Personales
              de Argentina (Ley 25.326) y demás normativas aplicables.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Información que Recolectamos
            </h2>
            <p className="text-gray-700 mb-4">
              Podemos recolectar y procesar los siguientes tipos de información
              personal:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>
                Información de contacto (nombre, correo electrónico, teléfono,
                dirección postal)
              </li>
              <li>
                Detalles y requerimientos del proyecto cuando solicita una
                cotización
              </li>
              <li>Datos de uso del sitio web a través de cookies y análisis</li>
              <li>Registros de comunicaciones cuando nos contacta</li>
              <li>
                Información relacionada con servicios de consultoría ambiental
                solicitados
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Cómo Utilizamos su Información
            </h2>
            <p className="text-gray-700 mb-4">
              Utilizamos su información personal para los siguientes propósitos:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Brindar servicios de consultoría ambiental</li>
              <li>
                Procesar y responder a consultas y solicitudes de cotización
              </li>
              <li>Comunicar sobre nuestros servicios y actualizaciones</li>
              <li>Mejorar nuestro sitio web y servicios</li>
              <li>Cumplir con requisitos legales y regulatorios</li>
              <li>Realizar estudios y evaluaciones ambientales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Base Legal para el Procesamiento
            </h2>
            <p className="text-gray-700 mb-4">
              Procesamos su información personal basándonos en los siguientes
              fundamentos legales:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>
                Consentimiento: Cuando usted proporciona consentimiento
                explícito para actividades específicas
              </li>
              <li>
                Contrato: Para cumplir con nuestras obligaciones contractuales
                de servicios ambientales
              </li>
              <li>
                Intereses legítimos: Para el desarrollo comercial y mejora de
                servicios
              </li>
              <li>
                Obligación legal: Para cumplir con regulaciones ambientales y
                requisitos de seguridad
              </li>
              <li>
                Interés público: Para la protección del medio ambiente y la
                salud pública
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Compartir y Divulgación de Datos
            </h2>
            <p className="text-gray-700 mb-4">
              Podemos compartir su información personal con:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Autoridades ambientales cuando sea legalmente requerido</li>
              <li>Organismos reguladores para cumplimiento normativo</li>
              <li>
                Nuestros proveedores de servicios de confianza que nos ayudan a
                brindar nuestros servicios
              </li>
              <li>
                Entidades gubernamentales para trámites y permisos ambientales
              </li>
              <li>
                Laboratorios y especialistas técnicos para análisis específicos
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              No vendemos, alquilamos ni comercializamos su información personal
              a terceros con fines de marketing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Seguridad de Datos
            </h2>
            <p className="text-gray-700 mb-4">
              Implementamos medidas técnicas y organizativas apropiadas para
              proteger su información personal contra acceso no autorizado,
              alteración, divulgación o destrucción. Esto incluye:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Sistemas seguros de transmisión y almacenamiento de datos</li>
              <li>Controles de acceso y procedimientos de autenticación</li>
              <li>Evaluaciones y actualizaciones regulares de seguridad</li>
              <li>
                Capacitación del personal en principios de protección de datos
              </li>
              <li>
                Políticas de escritorio limpio y gestión segura de documentos
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Retención de Datos
            </h2>
            <p className="text-gray-700 mb-4">
              Conservamos su información personal solo durante el tiempo
              necesario para cumplir con los fines para los que fue recolectada,
              incluyendo:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>
                Registros de proyectos: De acuerdo con los requisitos
                regulatorios ambientales
              </li>
              <li>
                Registros comerciales: Hasta 10 años según requerimientos
                contables y legales argentinos
              </li>
              <li>
                Comunicaciones de marketing: Hasta que se dé de baja o retire el
                consentimiento
              </li>
              <li>
                Documentación técnica: Según los plazos establecidos por la
                normativa ambiental
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Sus Derechos
            </h2>
            <p className="text-gray-700 mb-4">
              Según la Ley 25.326 de Protección de Datos Personales, usted tiene
              los siguientes derechos:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>
                Derecho de acceso: Solicitar copias de su información personal
              </li>
              <li>
                Derecho de rectificación: Solicitar la corrección de información
                inexacta
              </li>
              <li>
                Derecho de supresión: Solicitar la eliminación de su información
                personal
              </li>
              <li>
                Derecho de confidencialidad: Mantener la privacidad de sus datos
              </li>
              <li>
                Derecho de información: Conocer el uso que se da a sus datos
              </li>
              <li>
                Derecho de gratuidad: Ejercer estos derechos de forma gratuita
              </li>
              <li>
                Derecho a retirar el consentimiento: Revocar la autorización
                para el tratamiento de datos
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Cookies y Análisis del Sitio Web
            </h2>
            <p className="text-gray-700 mb-4">
              Nuestro sitio web utiliza cookies para mejorar su experiencia de
              navegación y analizar el uso del sitio. Puede controlar la
              configuración de cookies a través de las preferencias de su
              navegador. Para más información sobre las cookies que utilizamos,
              consulte nuestra Política de Cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Información de Contacto
            </h2>
            <p className="text-gray-700 mb-4">
              Si tiene alguna pregunta sobre esta Política de Privacidad o desea
              ejercer sus derechos de protección de datos, por favor
              contáctenos:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>IAAF Ambiental</strong>
              </p>
              <p className="text-gray-700 mb-2">Puerto Madryn, Chubut</p>
              <p className="text-gray-700 mb-2">
                Email: administracion@iaafambiental.com
              </p>
              <p className="text-gray-700 mb-2">
                Teléfono: +54 280 459-7153, +54 280 455-7226
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Reclamos
            </h2>
            <p className="text-gray-700 mb-4">
              Si considera que no hemos manejado su información personal de
              acuerdo con la ley de protección de datos, tiene derecho a
              presentar un reclamo ante la Agencia de Acceso a la Información
              Pública (AAIP):
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Agencia de Acceso a la Información Pública</strong>
              </p>
              <p className="text-gray-700 mb-2">
                Av. Pte. Julio A. Roca 710, Piso 2º
              </p>
              <p className="text-gray-700 mb-2">
                Ciudad Autónoma de Buenos Aires
              </p>
              <p className="text-gray-700 mb-2">Teléfono: (+54 11) 3988-3968</p>
              <p className="text-gray-700">
                Sitio web: www.argentina.gob.ar/aaip
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Cambios en esta Política
            </h2>
            <p className="text-gray-700 mb-4">
              Podemos actualizar esta Política de Privacidad periódicamente para
              reflejar cambios en nuestras prácticas o leyes aplicables. Le
              notificaremos sobre cualquier cambio importante publicando la
              política actualizada en nuestro sitio web con una nueva fecha de
              vigencia. Los cambios entrarán en vigor inmediatamente después de
              su publicación.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
