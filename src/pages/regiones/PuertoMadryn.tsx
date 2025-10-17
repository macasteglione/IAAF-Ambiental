
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PuertoMadrynHero from "@/components/regiones/PuertoMadrynHero";
import PuertoMadrynFAQ from "@/components/regiones/PuertoMadrynFAQ";
import PuertoMadrynSEOContent from "@/components/regiones/PuertoMadrynSEOContent";
import PuertoMadrynServicios from "@/components/regiones/PuertoMadrynServicios";
import PuertoMadrynContacto from "@/components/regiones/PuertoMadrynContacto";
import PuertoMadrynCovertura from "@/components/regiones/PuertoMadrynCovertura";

const PuertoMadryn = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Servicios Ambientales en Puerto Madryn | IAAF Ambiental"
        description="Consultoría ambiental profesional en Puerto Madryn, Chubut. Estudios de impacto ambiental, gestión de residuos, auditorías ambientales y asesoramiento especializado para proyectos industriales, turísticos y comerciales."
        keywords="consultoría ambiental puerto madryn, estudio impacto ambiental chubut, gestión ambiental puerto madryn, auditoría ambiental patagonia, servicios ambientales puerto madryn, EIA puerto madryn"
        url="https://iaafambiental.com/regiones/puerto-madryn"
        localBusinessSchema={{
          name: "IAAF Ambiental - Puerto Madryn",
          description: "Servicios de consultoría ambiental en Puerto Madryn y zona costera de Chubut",
          areaServed: ["Puerto Madryn", "Puerto Pirámides", "Península Valdés", "Playa Unión", "Rawson", "Trelew", "Gaiman", "Dolavon", "Playa El Doradillo", "Punta Tombo"],
          telephone: "+54 280 XXX-XXXX",
          email: "administracion@iaafambiental.com",
          address: {
            streetAddress: "[Dirección]",
            addressLocality: "Puerto Madryn",
            addressRegion: "Chubut",
            postalCode: "9120",
            addressCountry: "AR"
          },
          geo: {
            latitude: -42.7683,
            longitude: -65.0364
          },
          serviceType: ["Consultoría Ambiental", "Estudios de Impacto Ambiental", "Gestión Ambiental", "Auditorías Ambientales", "Monitoreo Ambiental"]
        }}
        serviceSchema={{
          name: "Servicios Ambientales - Puerto Madryn",
          description: "Consultoría ambiental integral en Puerto Madryn y zona costera de Chubut",
          areaServed: ["Puerto Madryn", "Puerto Pirámides", "Península Valdés", "Playa Unión", "Rawson", "Trelew", "Gaiman", "Dolavon", "Playa El Doradillo", "Punta Tombo"],
          provider: "IAAF Ambiental",
          url: "https://iaafambiental.com"
        }}
        breadcrumbs={[
          { name: "Inicio", url: "https://iaafambiental.com" },
          { name: "Regiones", url: "https://iaafambiental.com/regiones" },
          { name: "Puerto Madryn", url: "https://iaafambiental.com/regiones/puerto-madryn" }
        ]}
      />
      <Header />
      
      <main>
        <PuertoMadrynHero />
        <PuertoMadrynFAQ />
        <PuertoMadrynSEOContent />
        <PuertoMadrynCovertura />
        <PuertoMadrynServicios />
        <PuertoMadrynContacto />
      </main>

      <Footer />
    </div>
  );
};

export default PuertoMadryn;
