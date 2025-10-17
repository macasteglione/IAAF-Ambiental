import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import TrabajoHero from "@/components/trabajo/TrabajoHero";
import TrabajoPorque from "@/components/trabajo/TrabajoPorque";
import CurrentOpportunities from "@/components/trabajo/TrabajoOportunidades";
import TrabajoProcesos from "@/components/trabajo/TrabajoProcesos";
import TrabajoCTA from "@/components/trabajo/TrabajoCTA";

const Trabajo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Oportunidades de Trabajo | IAAF Ambiental"
        description="Unete a IAAF Ambiental, consultora ambiental. Explora oportunidades de carrera en servicios ambientales, gestión de proyectos y sostenibilidad."
        keywords="IAAF Ambiental, consultora ambiental, oportunidades de carrera, empleo en consultoría ambiental, servicios ambientales, gestión de proyectos, sostenibilidad, trabajo en IAAF Ambiental"
        url="https://iaafambiental.com/trabajo"
      />
      <Header />
      <TrabajoHero />
      <TrabajoPorque />
      <CurrentOpportunities />
      <TrabajoProcesos />
      <TrabajoCTA />
      <Footer />
    </div>
  );
};

export default Trabajo;
