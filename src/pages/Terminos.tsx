import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Terminos = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Términos y Condiciones | IAAF Ambiental"
        description="Lee nuestros términos y condiciones de uso del sitio web y servicios de consultoría ambiental de IAAF Ambiental en Puerto Madryn, Chubut, Patagonia."
        keywords="Términos y Condiciones, IAAF Ambiental, Consultoría Ambiental, Servicios Ambientales, Puerto Madryn"
        url="https://iaafambiental.com/terminos"
        robots="noindex, nofollow"
      />
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Términos y Condiciones
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Última Actualización: {new Date().toLocaleDateString("es-AR")}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Aceptación de los Términos
            </h2>
            <p className="text-gray-700 mb-4">
              Bienvenido a IAAF Ambiental. Al acceder y utilizar este sitio web
              (iaafambiental.com), usted acepta estar sujeto a estos Términos y
              Condiciones de Uso, todas las leyes y regulaciones aplicables, y
              acepta que es responsable del cumplimiento de las leyes locales
              aplicables.
            </p>
            <p className="text-gray-700 mb-4">
              Si no está de acuerdo con alguno de estos términos, le prohibimos
              usar o acceder a este sitio. Los materiales contenidos en este
              sitio web están protegidos por las leyes de derechos de autor y
              marcas registradas aplicables.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Sobre IAAF Ambiental
            </h2>
            <p className="text-gray-700 mb-4">
              IAAF Ambiental es una consultora especializada en servicios
              ambientales con sede en Puerto Madryn, Chubut, Argentina. Nos
              dedicamos a brindar servicios profesionales de consultoría
              ambiental, estudios de impacto ambiental, gestión ambiental,
              auditorías, monitoreo y asesoramiento técnico en toda la región
              patagónica.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Uso del Sitio Web
            </h2>
            <p className="text-gray-700 mb-4">
              Este sitio web es proporcionado únicamente con fines informativos
              sobre nuestros servicios de consultoría ambiental. Usted se
              compromete a:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>
                Utilizar el sitio solo para fines legales y de acuerdo con estos
                términos
              </li>
              <li>
                No intentar obtener acceso no autorizado a ninguna parte del
                sitio
              </li>
              <li>
                No transmitir material que contenga virus o código malicioso
              </li>
              <li>
                No recopilar información de otros usuarios sin su consentimiento
              </li>
              <li>
                No utilizar el sitio de manera que pueda dañar, deshabilitar o
                sobrecargar nuestros servidores
              </li>
              <li>
                No reproducir, duplicar o copiar material del sitio sin
                autorización previa
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Servicios de Consultoría Ambiental
            </h2>
            <p className="text-gray-700 mb-4">
              Los servicios profesionales de consultoría ambiental ofrecidos por
              IAAF Ambiental están sujetos a términos contractuales específicos
              que se acordarán por separado con cada cliente. Estos incluyen:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Estudios de Impacto Ambiental (EIA)</li>
              <li>Gestión y Auditorías Ambientales</li>
              <li>Monitoreo Ambiental</li>
              <li>Planes de Gestión de Residuos</li>
              <li>Asesoramiento en Normativa Ambiental</li>
              <li>Certificaciones Ambientales</li>
            </ul>
            <p className="text-gray-700 mb-4">
              La información proporcionada en este sitio web no constituye
              asesoramiento profesional específico. Para obtener asesoramiento
              técnico personalizado, debe contactarnos directamente y establecer
              una relación contractual formal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Propiedad Intelectual
            </h2>
            <p className="text-gray-700 mb-4">
              Todo el contenido de este sitio web, incluyendo pero no limitado a
              textos, gráficos, logotipos, imágenes, clips de audio, descargas
              digitales y compilaciones de datos, es propiedad de IAAF Ambiental
              o de sus proveedores de contenido y está protegido por las leyes
              argentinas e internacionales de derechos de autor.
            </p>
            <p className="text-gray-700 mb-4">
              No está permitido reproducir, distribuir, modificar o crear obras
              derivadas del contenido sin el permiso expreso por escrito de IAAF
              Ambiental.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Exactitud de la Información
            </h2>
            <p className="text-gray-700 mb-4">
              Si bien nos esforzamos por mantener la información en este sitio
              web actualizada y precisa, no garantizamos la exactitud,
              integridad o actualidad de la información proporcionada. La
              información sobre servicios, precios, disponibilidad y otros
              detalles está sujeta a cambios sin previo aviso.
            </p>
            <p className="text-gray-700 mb-4">
              IAAF Ambiental no se hace responsable de errores u omisiones en el
              contenido del sitio web ni de cualquier acción tomada en base a la
              información proporcionada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Enlaces a Sitios de Terceros
            </h2>
            <p className="text-gray-700 mb-4">
              Este sitio web puede contener enlaces a sitios web de terceros que
              no están bajo nuestro control. No somos responsables del
              contenido, políticas de privacidad o prácticas de sitios web de
              terceros. Recomendamos revisar los términos y políticas de
              privacidad de cualquier sitio de terceros que visite.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Limitación de Responsabilidad
            </h2>
            <p className="text-gray-700 mb-4">
              En ningún caso IAAF Ambiental o sus proveedores serán responsables
              de daños especiales, incidentales, indirectos o consecuentes que
              resulten del uso o la imposibilidad de usar este sitio web,
              incluyendo pero no limitado a:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Pérdida de datos o beneficios</li>
              <li>Interrupción del negocio</li>
              <li>Pérdida de información comercial</li>
              <li>Daños a equipos o sistemas informáticos</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Esta limitación se aplica incluso si IAAF Ambiental ha sido
              informada de la posibilidad de tales daños.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Indemnización
            </h2>
            <p className="text-gray-700 mb-4">
              Usted acepta indemnizar y mantener indemne a IAAF Ambiental, sus
              directores, empleados y agentes de cualquier reclamo, pérdida,
              responsabilidad, daño, costo o gasto (incluyendo honorarios
              legales razonables) que surja de:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Su uso del sitio web</li>
              <li>Su violación de estos Términos y Condiciones</li>
              <li>Su violación de derechos de terceros</li>
              <li>Cualquier contenido que usted envíe o transmita</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Privacidad y Protección de Datos
            </h2>
            <p className="text-gray-700 mb-4">
              El uso de este sitio web también está regido por nuestra Política
              de Privacidad, que cumple con la Ley 25.326 de Protección de Datos
              Personales de Argentina. Al utilizar este sitio, usted acepta la
              recopilación y uso de información según lo descrito en nuestra
              Política de Privacidad.
            </p>
            <p className="text-gray-700 mb-4">
              Para más información sobre cómo manejamos sus datos personales,
              consulte nuestra{" "}
              <a
                href="/privacidad"
                className="text-brand-green hover:underline font-semibold"
              >
                Política de Privacidad
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Modificaciones de los Términos
            </h2>
            <p className="text-gray-700 mb-4">
              IAAF Ambiental se reserva el derecho de revisar y modificar estos
              Términos y Condiciones en cualquier momento sin previo aviso. Al
              continuar utilizando este sitio web después de la publicación de
              cambios, usted acepta estar sujeto a los términos modificados.
            </p>
            <p className="text-gray-700 mb-4">
              Es su responsabilidad revisar periódicamente estos términos para
              estar al tanto de cualquier actualización. La fecha de "Última
              Actualización" en la parte superior de esta página indica cuándo
              se realizaron los cambios más recientes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Ley Aplicable y Jurisdicción
            </h2>
            <p className="text-gray-700 mb-4">
              Estos Términos y Condiciones se rigen e interpretan de acuerdo con
              las leyes de la República Argentina. Cualquier disputa relacionada
              con estos términos estará sujeta a la jurisdicción exclusiva de
              los tribunales competentes de Puerto Madryn, Provincia de Chubut,
              Argentina.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. Normativa Ambiental Aplicable
            </h2>
            <p className="text-gray-700 mb-4">
              Los servicios de consultoría ambiental prestados por IAAF
              Ambiental se realizan en cumplimiento con la normativa ambiental
              vigente en Argentina, incluyendo:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Ley General del Ambiente N° 25.675</li>
              <li>Ley de Residuos Peligrosos N° 24.051</li>
              <li>
                Ley de Gestión Integral de Residuos Domiciliarios N° 25.916
              </li>
              <li>Normativa Provincial de Chubut aplicable</li>
              <li>Resoluciones y disposiciones de organismos ambientales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              14. Confidencialidad
            </h2>
            <p className="text-gray-700 mb-4">
              Toda información técnica, comercial o de proyectos compartida con
              IAAF Ambiental en el contexto de una consulta o contratación de
              servicios será tratada con estricta confidencialidad, salvo que la
              ley requiera su divulgación o que exista autorización expresa del
              cliente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              15. Contacto
            </h2>
            <p className="text-gray-700 mb-4">
              Si tiene alguna pregunta sobre estos Términos y Condiciones, por
              favor contáctenos:
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
              16. Divisibilidad
            </h2>
            <p className="text-gray-700 mb-4">
              Si alguna disposición de estos Términos y Condiciones se considera
              inválida o inaplicable por un tribunal competente, las demás
              disposiciones permanecerán en pleno vigor y efecto.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              17. Acuerdo Completo
            </h2>
            <p className="text-gray-700 mb-4">
              Estos Términos y Condiciones, junto con nuestra Política de
              Privacidad y cualquier otro aviso legal publicado en este sitio,
              constituyen el acuerdo completo entre usted y IAAF Ambiental con
              respecto al uso de este sitio web.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terminos;
