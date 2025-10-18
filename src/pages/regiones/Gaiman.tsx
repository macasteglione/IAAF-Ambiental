import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import GaimanHero from "@/components/regiones/GaimanHero";
import GaimanCovertura from "@/components/regiones/GaimanCovertura";
import GaimanServices from "@/components/regiones/GaimanServicios";
import GaimanFAQ from "@/components/regiones/GaimanFAQ";
import GaimanContacto from "@/components/regiones/GaimanContacto";
import GaimanSEOContent from "@/components/regiones/GaimanSEOContent";

const Gaiman = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Servicios Ambientales en Gaiman | IAAF Ambiental"
        description="Consultoría ambiental profesional en Gaiman, Chubut. Estudios de impacto ambiental, gestión de residuos, auditorías ambientales y asesoramiento especializado para proyectos turísticos, agropecuarios y comerciales en la localidad galesa de la Patagonia."
        keywords="consultoría ambiental gaiman, estudio impacto ambiental chubut, gestión ambiental gaiman, auditoría ambiental valle inferior, servicios ambientales gaiman, EIA gaiman, turismo gaiman"
        url="https://iaafambiental.com/regiones/gaiman"
        localBusinessSchema={{
          name: "IAAF Ambiental - Gaiman",
          description:
            "Servicios de consultoría ambiental en Gaiman, localidad histórica galesa del Valle Inferior",
          areaServed: [
            "Gaiman Centro",
            "Barrio Trevelin",
            "Barrio 28 de Julio",
            "Chacras Gaiman",
            "Zona Rural Gaiman",
            "Parque Paleontológico",
            "Zona Turística",
            "Gaiman Norte",
            "Gaiman Sur",
            "Zona de Expansión",
          ],
          telephone: "+54 280 XXX-XXXX",
          email: "administracion@iaafambiental.com",
          address: {
            streetAddress: "[Dirección]",
            addressLocality: "Gaiman",
            addressRegion: "Chubut",
            postalCode: "9105",
            addressCountry: "AR",
          },
          geo: {
            latitude: -43.2833,
            longitude: -65.4833,
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
          { name: "Gaiman", url: "https://iaafambiental.com/regiones/gaiman" },
        ]}
      />
      <Header />

      <GaimanHero />
      <GaimanFAQ />
      <GaimanSEOContent />
      <GaimanCovertura />
      <GaimanServices />
      <GaimanContacto />

      <Footer />
    </div>
  );
};

export default Gaiman;
