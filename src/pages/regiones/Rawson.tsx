import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import RawsonHero from "@/components/regiones/RawsonHero";
import RawsonCovertura from "@/components/regiones/RawsonCovertura";
import RawsonServicios from "@/components/regiones/RawsonServicios";
import RawsonFAQ from "@/components/regiones/RawsonFAQ";
import RawsonContacto from "@/components/regiones/RawsonContacto";
import RawsonSEOContent from "@/components/regiones/RawsonSEOContent";

const Rawson = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Servicios Ambientales en Rawson | IAAF Ambiental"
        description="Consultoría ambiental profesional en Rawson, Chubut. Capital de la provincia con desarrollo administrativo, comercial y turístico. Estudios de impacto ambiental, gestión de residuos y auditorías ambientales para proyectos gubernamentales, comerciales y turísticos."
        keywords="consultoría ambiental rawson, estudio impacto ambiental chubut, gestión ambiental rawson, auditoría ambiental capital, servicios ambientales rawson, EIA rawson"
        url="https://iaafambiental.com/regiones/rawson"
        robots="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        serviceSchema={{
          name: "Servicios Ambientales - Rawson",
          description:
            "Consultoría ambiental integral en Rawson, capital de la provincia de Chubut",
          areaServed: [
            "Rawson Centro",
            "Playa Unión",
            "Puerto Rawson",
            "Barrio Playa Magagna",
            "Barrio Rawson Centro",
            "Zona Administrativa",
            "Zona Comercial",
            "Zona Costera",
            "Rawson Norte",
            "Rawson Sur",
          ],
          provider: "IAAF Ambiental",
          url: "https://iaafambiental.com",
        }}
        localBusinessSchema={{
          name: "IAAF Ambiental - Rawson",
          description:
            "Servicios de consultoría ambiental en Rawson, capital de Chubut",
          areaServed: [
            "Rawson Centro",
            "Playa Unión",
            "Puerto Rawson",
            "Barrio Playa Magagna",
            "Barrio Rawson Centro",
            "Zona Administrativa",
            "Zona Comercial",
            "Zona Costera",
            "Rawson Norte",
            "Rawson Sur",
          ],
          telephone: "+54 280 XXX-XXXX",
          email: "administracion@iaafambiental.com",
          address: {
            streetAddress: "[Dirección]",
            addressLocality: "Rawson",
            addressRegion: "Chubut",
            postalCode: "9103",
            addressCountry: "AR",
          },
          geo: {
            latitude: -43.3002,
            longitude: -65.1023,
          },
          serviceType: [
            "Consultoría Ambiental",
            "Estudios de Impacto Ambiental",
            "Gestión Ambiental",
            "Auditorías Ambientales",
            "Monitoreo Ambiental",
          ],
        }}
        breadcrumbs={[
          { name: "Inicio", url: "https://iaafambiental.com" },
          { name: "Regiones", url: "https://iaafambiental.com/regiones" },
          { name: "Rawson", url: "https://iaafambiental.com/regiones/rawson" },
        ]}
      />
      <Header />

      <main>
        <RawsonHero />
        <RawsonFAQ />
        <RawsonSEOContent />

        {/* Event Images */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/img/rawson-region01.jpg"
                  alt="Rawson - Capital de la provincia de Chubut"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  width={800}
                  height={384}
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/img/rawson-region02.jpeg"
                  alt="Equipo de IAAF Ambiental brindando servicios ambientales en Rawson"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  width={800}
                  height={384}
                />
              </div>
            </div>
          </div>
        </section>

        <RawsonCovertura />
        <RawsonServicios />
        <RawsonContacto />
      </main>

      <Footer />
    </div>
  );
};

export default Rawson;
