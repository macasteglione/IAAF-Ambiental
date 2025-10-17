
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PeninsulaValdesHero from "@/components/regiones/PeninsulaValdesHero";
import PeninsulaValdesCovertura from "@/components/regiones/PeninsulaValdesCovertura";
import PeninsulaValdesServicios from "@/components/regiones/PeninsulaValdesServicios";
import PeninsulaValdesFAQ from "@/components/regiones/PeninsulaValdesFAQ";
import PeninsulaValdesContacto from "@/components/regiones/PeninsulaValdesContacto";
import PeninsulaValdesSEOContent from "@/components/regiones/PenilsulaValdesSeoContent";

const PeninsulaValdes = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Servicios Ambientales en Península Valdés | IAAF Ambiental"
        description="Consultoría ambiental profesional en Península Valdés, Chubut. Patrimonio de la Humanidad UNESCO, área natural protegida con fauna marina única. Estudios de impacto ambiental, gestión de residuos y auditorías ambientales para proyectos de conservación, turismo sustentable y áreas protegidas."
        keywords="consultoría ambiental península valdés, estudio impacto ambiental unesco, gestión ambiental área protegida, auditoría ambiental chubut, servicios ambientales península valdés, EIA unesco, ballenas, lobos marinos"
        url="https://iaafambiental.com/regiones/peninsula-valdes"
        localBusinessSchema={{
          name: "IAAF Ambiental - Península Valdés",
          description: "Servicios de consultoría ambiental en Península Valdés, Patrimonio de la Humanidad UNESCO",
          areaServed: ["Puerto Pirámides", "Punta Delgada", "Punta Norte", "Caleta Valdés", "Punta Cantor", "Istmo Ameghino", "Golfo Nuevo", "Golfo San José", "Reserva Natural", "Área Protegida UNESCO"],
          telephone: "+54 280 XXX-XXXX",
          email: "administracion@iaafambiental.com",
          address: {
            streetAddress: "[Dirección]",
            addressLocality: "Península Valdés",
            addressRegion: "Chubut",
            postalCode: "9120",
            addressCountry: "AR"
          },
          geo: {
            latitude: -42.5000,
            longitude: -63.8000
          },
          serviceType: ["Consultoría Ambiental", "Estudios de Impacto Ambiental", "Gestión Ambiental", "Auditorías Ambientales", "Conservación", "Monitoreo de Fauna", "Turismo Sustentable"]
        }}
        breadcrumbs={[
          { name: "Inicio", url: "https://iaafambiental.com" },
          { name: "Regiones", url: "https://iaafambiental.com/regiones" },
          { name: "Península Valdés", url: "https://iaafambiental.com/regiones/peninsula-valdes" }
        ]}
      />
      <Header />
      
      <PeninsulaValdesHero />
      <PeninsulaValdesFAQ />
      <PeninsulaValdesSEOContent />
      <PeninsulaValdesCovertura />
      <PeninsulaValdesServicios />
      <PeninsulaValdesContacto />

      <Footer />
    </div>
  );
};

export default PeninsulaValdes;
