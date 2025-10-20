import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProyectosHero from "@/components/proyectos/ProyectosHero";
import ProyectosGrid from "@/components/proyectos/ProyectosGrid";
import ProyectosCTA from "@/components/proyectos/ProyectosCTA";

const Proyectos = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Proyectos Ambientales | IAAF Ambiental"
        description="IAAF Ambiental ofrece soluciones especializadas para proyectos de reforestación, gestión de recursos hídricos, eficiencia energética, educación ambiental y más en diversos sectores."
        keywords="proyectos ambientales, consultoría ambiental, gestión sostenible, eficiencia energética, reforestación, educación ambiental"
        url="https://iaafambiental.com/proyectos"
      />
      <Header />
      <ProyectosHero />
      <ProyectosGrid />
      <ProyectosCTA />
      <Footer />
    </div>
  );
};

export default Proyectos;
