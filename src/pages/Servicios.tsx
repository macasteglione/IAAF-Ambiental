import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ServiciosHero from "@/components/servicios/ServiciosHero";
import ServiciosLista from "@/components/servicios/ServiciosLista";
import ServiciosAdicionales from "@/components/servicios/ServiciosAdicionales";
import ServiciosProcesos from "@/components/servicios/ServiciosProcesos";

const Servicios = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Servicios Ambientales | IAAF Ambiental"
        description="IAAF Ambiental ofrece soluciones especializadas en consultoría ambiental, gestión de proyectos sostenibles, auditorías ambientales, eficiencia energética, reforestación, educación y capacitación ambiental."
        keywords="consultoría ambiental, gestión de proyectos ambientales, auditorías ambientales, eficiencia energética, reforestación, educación ambiental, sostenibilidad, gestión de residuos, energía renovable"
        url="https://iaafambiental.com/servicios"
      />
      <Header />
      <ServiciosHero />
      <ServiciosLista />
      <ServiciosAdicionales />
      <ServiciosProcesos />
      <Footer />
    </div>
  );
};

export default Servicios;
