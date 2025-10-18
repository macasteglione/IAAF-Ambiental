import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import NosotrosHero from "@/components/nosotros/NosotrosHero";
import NosotrosHistoria from "@/components/nosotros/NosotrosHistoria";
import NosotrosServicios from "@/components/nosotros/NosotrosServicios";
import NosotrosObjetivos from "@/components/nosotros/NosotrosObjetivos";
import NosotrosCTA from "@/components/nosotros/NosotrosCTA";

const Nosotros = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Sobre Nosotros | IAAF Ambiental"
        description="Conozca IAAF Ambiental, consultora en servicios ambientales en Puerto Madryn con experiencia en gestión ambiental y sustentabilidad."
        keywords="IAAF Ambiental, consultora ambiental Puerto Madryn, servicios ambientales Patagonia, gestión ambiental, sustentabilidad, estudios ambientales, EIA"
        url="https://iaafambiental.com/nosotros"
      />
      <Header />
      <NosotrosHero />
      <NosotrosHistoria />
      <NosotrosServicios />
      <NosotrosObjetivos />
      <NosotrosCTA />
      <Footer />
    </div>
  );
};

export default Nosotros;
