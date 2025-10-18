import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import TrelewHero from "@/components/regiones/TrelewHero";
import TrelewFAQ from "@/components/regiones/TrelewFAQ";
import TrelewSEOContent from "@/components/regiones/TrelewSEOContent";
import TrelewServicios from "@/components/regiones/TrelewServicios";
import TrelewContacto from "@/components/regiones/TrelewContacto";
import TrelewCoverageAreas from "@/components/regiones/TrelewCoverageAreas";

const Trelew = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Servicios Ambientales en Trelew | IAAF Ambiental"
        description="Consultoría ambiental profesional en Trelew, Chubut. Estudios de impacto ambiental, gestión de residuos, auditorías ambientales y asesoramiento especializado para proyectos industriales en el Parque Industrial, chacras, comercios y desarrollos urbanos en la ciudad."
        keywords="consultoría ambiental trelew, estudio impacto ambiental chubut, gestión ambiental trelew, auditoría ambiental valle inferior, servicios ambientales trelew, EIA trelew, proyectos industriales trelew"
        url="https://iaafambiental.com/regiones/trelew"
        localBusinessSchema={{
          name: "IAAF Ambiental - Trelew",
          description:
            "Servicios de consultoría ambiental en la ciudad de Trelew y su zona de influencia",
          areaServed: [
            "Trelew Centro",
            "Parque Industrial Trelew",
            "Barrio Centenario",
            "Barrio Don Bosco",
            "Barrio Moreira",
            "Chacras Trelew",
            "Zona Rural Trelew",
            "Trelew Norte",
            "Trelew Sur",
            "Zona de Expansión",
          ],
          telephone: "+54 280 XXX-XXXX",
          email: "administracion@iaafambiental.com",
          address: {
            streetAddress: "[Dirección]",
            addressLocality: "Trelew",
            addressRegion: "Chubut",
            postalCode: "9100",
            addressCountry: "AR",
          },
          geo: {
            latitude: -43.2489,
            longitude: -65.305,
          },
          serviceType: [
            "Consultoría Ambiental",
            "Estudios de Impacto Ambiental",
            "Gestión Ambiental",
            "Auditorías Ambientales",
            "Monitoreo Ambiental",
          ],
        }}
        serviceSchema={{
          name: "Servicios Ambientales - Trelew",
          description: "Consultoría ambiental integral en la ciudad de Trelew",
          areaServed: [
            "Trelew Centro",
            "Parque Industrial Trelew",
            "Barrio Centenario",
            "Barrio Don Bosco",
            "Barrio Moreira",
            "Chacras Trelew",
            "Zona Rural Trelew",
            "Trelew Norte",
            "Trelew Sur",
            "Zona de Expansión",
          ],
          provider: "IAAF Ambiental",
          url: "https://iaafambiental.com",
        }}
        breadcrumbs={[
          { name: "Inicio", url: "https://iaafambiental.com" },
          { name: "Regiones", url: "https://iaafambiental.com/regiones" },
          { name: "Trelew", url: "https://iaafambiental.com/regiones/trelew" },
        ]}
      />
      <Header />

      <main>
        <TrelewHero />
        <TrelewFAQ />
        <TrelewSEOContent />
        <TrelewCoverageAreas />
        <TrelewServicios />
        <TrelewContacto />
      </main>

      <Footer />
    </div>
  );
};

export default Trelew;
