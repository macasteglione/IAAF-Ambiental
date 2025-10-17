
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import DolavonHero from "@/components/regiones/DolavonHero";
import DolavonCovertura from "@/components/regiones/DolavonCovertura";
import DolavonServicios from "@/components/regiones/DolavonServicios";
import DolavonFAQ from "@/components/regiones/DolavonFAQ";
import DolavonContacto from "@/components/regiones/DolavonContacto";
import DolavonSEOContent from "@/components/regiones/DolavonSEOContent";

const Dolavon = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Servicios Ambientales en Dolavon | IAAF Ambiental"
        description="Consultoría ambiental profesional en Dolavon, Chubut. Localidad histórica galesa conocida por sus molinos harineros y patrimonio cultural. Estudios de impacto ambiental, gestión de residuos y auditorías ambientales para proyectos turísticos, agropecuarios y patrimoniales."
        keywords="consultoría ambiental dolavon, estudio impacto ambiental chubut, gestión ambiental dolavon, auditoría ambiental valle inferior, servicios ambientales dolavon, EIA dolavon, molinos harineros"
        url="https://iaafambiental.com/regiones/dolavon"
        localBusinessSchema={{
          name: "IAAF Ambiental - Dolavon",
          description: "Servicios de consultoría ambiental en Dolavon, localidad histórica galesa del Valle Inferior",
          areaServed: ["Dolavon Centro", "Zona de Molinos", "Barrio Histórico", "Chacras Dolavon", "Zona Rural", "Zona Turística", "Zona Agrícola", "Dolavon Norte", "Dolavon Sur", "Zona de Expansión"],
          telephone: "+54 280 XXX-XXXX",
          email: "administracion@iaafambiental.com",
          address: {
            streetAddress: "[Dirección]",
            addressLocality: "Dolavon",
            addressRegion: "Chubut",
            postalCode: "9107",
            addressCountry: "AR"
          },
          geo: {
            latitude: -43.3000,
            longitude: -65.7000
          },
          serviceType: ["Consultoría Ambiental", "Estudios de Impacto Ambiental", "Gestión Ambiental", "Auditorías Ambientales", "Monitoreo Ambiental"]
        }}
        breadcrumbs={[
          { name: "Inicio", url: "https://iaafambiental.com" },
          { name: "Regiones", url: "https://iaafambiental.com/regiones" },
          { name: "Dolavon", url: "https://iaafambiental.com/regiones/dolavon" }
        ]}
      />
      <Header />
      
      <DolavonHero />
      <DolavonFAQ />
      <DolavonSEOContent />
      <DolavonCovertura />

      {/* Event Images */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/lovable-uploads/8f2bf84b-b560-4ba6-89b7-ae4f1e4a5470.png"
                alt="Molinos harineros históricos de Dolavon"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/lovable-uploads/1df67c8f-0426-49e3-98e9-f1b20b108052.png"
                alt="Equipo de IAAF Ambiental brindando servicios ambientales en Dolavon"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <DolavonServicios />
      <DolavonContacto />

      <Footer />
    </div>
  );
};

export default Dolavon;
