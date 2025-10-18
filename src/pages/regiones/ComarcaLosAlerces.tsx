import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ComarcaAlercesHero from "@/components/regiones/ComarcaAlercesHero";
import ComarcaAlercesCovertura from "@/components/regiones/ComarcaAlercesCovertura";
import ComarcaAlercesServicios from "@/components/regiones/ComarcaAlercesServicios";
import ComarcaAlercesFAQ from "@/components/regiones/ComarcaAlercesFAQ";
import ComarcaAlercesContacto from "@/components/regiones/ComarcaAlercesContacto";
import ComarcaAlercesSEOContent from "@/components/regiones/ComarcaAlercesSEOContent";

const ComarcaLosAlerces = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Servicios Ambientales en Comarca Los Alerces | IAAF Ambiental"
        description="Consultoría ambiental profesional en Comarca Los Alerces, Chubut. Región cordillerana con bosques andino-patagónicos, lagos y ríos. Estudios de impacto ambiental, gestión de residuos y auditorías ambientales para proyectos forestales, turísticos y de conservación."
        keywords="consultoría ambiental comarca los alerces, estudio impacto ambiental chubut, gestión ambiental cordillera, auditoría ambiental bosques, servicios ambientales comarca los alerces, EIA parque los alerces, esquel"
        url="https://iaafambiental.com/regiones/comarca-los-alerces"
        localBusinessSchema={{
          name: "IAAF Ambiental - Comarca Los Alerces",
          description:
            "Servicios de consultoría ambiental en Comarca Los Alerces, región cordillerana de Chubut",
          areaServed: [
            "Esquel",
            "Trevelin",
            "Corcovado",
            "Lago Puelo",
            "El Hoyo",
            "Epuyén",
            "Cholila",
            "El Maitén",
            "Parque Nacional Los Alerces",
            "Zona Cordillerana",
          ],
          telephone: "+54 280 XXX-XXXX",
          email: "administracion@iaafambiental.com",
          address: {
            streetAddress: "[Dirección]",
            addressLocality: "Comarca Los Alerces",
            addressRegion: "Chubut",
            postalCode: "9200",
            addressCountry: "AR",
          },
          geo: {
            latitude: -42.9,
            longitude: -71.3,
          },
          serviceType: [
            "Consultoría Ambiental",
            "Estudios de Impacto Ambiental",
            "Gestión Forestal",
            "Auditorías Ambientales",
            "Conservación",
            "Turismo Sustentable",
          ],
        }}
        serviceSchema={{
          name: "Servicios Ambientales - Comarca Los Alerces",
          description:
            "Consultoría ambiental integral en Comarca Los Alerces, región cordillerana con bosques andino-patagónicos",
          areaServed: [
            "Esquel",
            "Trevelin",
            "Corcovado",
            "Lago Puelo",
            "El Hoyo",
            "Epuyén",
            "Cholila",
            "El Maitén",
            "Parque Nacional Los Alerces",
            "Zona Cordillerana",
          ],
          provider: "IAAF Ambiental",
          url: "https://iaafambiental.com",
        }}
        breadcrumbs={[
          { name: "Inicio", url: "https://iaafambiental.com" },
          { name: "Regiones", url: "https://iaafambiental.com/regiones" },
          {
            name: "Comarca Los Alerces",
            url: "https://iaafambiental.com/regiones/comarca-los-alerces",
          },
        ]}
      />
      <Header />

      <main>
        <ComarcaAlercesHero />
        <ComarcaAlercesFAQ />
        <ComarcaAlercesSEOContent />

        {/* Event Images */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/img/comarca-region01.png"
                  alt="Bosques andino-patagónicos de Comarca Los Alerces"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  width={800}
                  height={384}
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/img/comarca-region02.png"
                  alt="Equipo de IAAF Ambiental brindando servicios ambientales en Comarca Los Alerces"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  width={800}
                  height={384}
                />
              </div>
            </div>
          </div>
        </section>

        <ComarcaAlercesCovertura />
        <ComarcaAlercesServicios />
        <ComarcaAlercesContacto />
      </main>

      <Footer />
    </div>
  );
};

export default ComarcaLosAlerces;
