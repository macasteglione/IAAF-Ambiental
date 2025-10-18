import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PuertoPiramidesHero from "@/components/regiones/PuertoPiramidesHero";
import PuertoPiramidesCovertura from "@/components/regiones/PuertoPiramidesCovertura";
import PuertoPiramidesServicios from "@/components/regiones/PuertoPiramidesServicios";
import PuertoPiramidesFAQ from "@/components/regiones/PuertoPiramidesFAQ";
import PuertoPiramidesContacto from "@/components/regiones/PuertoPiramidesContacto";
import PuertoPiramidesSEOContent from "@/components/regiones/PuertoPiramidesSEOContent";

const PuertoPiramides = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Servicios Ambientales en Puerto Pirámides | IAAF Ambiental"
        description="Consultoría ambiental profesional en Puerto Pirámides, Chubut. Localidad costera dentro de la Península Valdés, Patrimonio de la Humanidad UNESCO. Estudios de impacto ambiental, gestión de residuos y auditorías ambientales para proyectos turísticos, hoteleros y de conservación."
        keywords="consultoría ambiental puerto pirámides, estudio impacto ambiental península valdés, gestión ambiental puerto pirámides, auditoría ambiental unesco, servicios ambientales puerto pirámides, EIA puerto pirámides, ballenas"
        url="https://iaafambiental.com/regiones/puerto-piramides"
        localBusinessSchema={{
          name: "IAAF Ambiental - Puerto Pirámides",
          description:
            "Servicios de consultoría ambiental en Puerto Pirámides, Península Valdés, Patrimonio de la Humanidad",
          areaServed: [
            "Puerto Pirámides Centro",
            "Zona Costera",
            "Zona Hotelera",
            "Zona de Avistaje",
            "Playa",
            "Zona Comercial",
            "Zona Residencial",
            "Península Valdés",
            "Reserva Natural",
            "Área Protegida",
          ],
          telephone: "+54 280 XXX-XXXX",
          email: "administracion@iaafambiental.com",
          address: {
            streetAddress: "[Dirección]",
            addressLocality: "Puerto Pirámides",
            addressRegion: "Chubut",
            postalCode: "9121",
            addressCountry: "AR",
          },
          geo: {
            latitude: -42.5833,
            longitude: -64.2833,
          },
          serviceType: [
            "Consultoría Ambiental",
            "Estudios de Impacto Ambiental",
            "Gestión Ambiental",
            "Auditorías Ambientales",
            "Monitoreo Ambiental",
            "Conservación",
            "Turismo Sustentable",
          ],
        }}
        serviceSchema={{
          name: "Servicios Ambientales - Puerto Pirámides",
          description:
            "Consultoría ambiental integral en Puerto Pirámides, Península Valdés, Patrimonio de la Humanidad UNESCO",
          areaServed: [
            "Puerto Pirámides",
            "Península Valdés",
            "Zona Costera",
            "Zona Hotelera",
            "Reserva Natural",
            "Área Protegida",
          ],
          provider: "IAAF Ambiental",
          url: "https://iaafambiental.com",
        }}
        breadcrumbs={[
          { name: "Inicio", url: "https://iaafambiental.com" },
          { name: "Regiones", url: "https://iaafambiental.com/regiones" },
          {
            name: "Puerto Pirámides",
            url: "https://iaafambiental.com/regiones/puerto-piramides",
          },
        ]}
      />
      <Header />

      <main>
        <PuertoPiramidesHero />
        <PuertoPiramidesFAQ />
        <PuertoPiramidesSEOContent />

        {/* Event Images */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/src/assets/puerto-piramides-region01.png"
                  alt="Puerto Pirámides - Península Valdés, Patrimonio de la Humanidad"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  width={800}
                  height={384}
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/src/assets/puerto-piramides-region02.png"
                  alt="Equipo de IAAF Ambiental brindando servicios ambientales en Puerto Pirámides"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  width={800}
                  height={384}
                />
              </div>
            </div>
          </div>
        </section>

        <PuertoPiramidesCovertura />
        <PuertoPiramidesServicios />
        <PuertoPiramidesContacto />
      </main>

      <Footer />
    </div>
  );
};

export default PuertoPiramides;
