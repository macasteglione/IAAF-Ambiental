import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ContactoHero from "@/components/contacto/ContactoHero";
import ContactoMetodos from "@/components/contacto/ContactoMetodos";
import ContactoFormulario from "@/components/contacto/ContactoFormulario";
import ContactoInfo from "@/components/contacto/ContactoInfo";

const Contacto = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Contacto | IAAF Ambiental"
        description="Contáctese con IAAF Ambiental para servicios profesionales de consultoría ambiental en Puerto Madryn. Solicite su cotización sin cargo. Línea de consultas: +54 280 412-3456. Email: contacto@iaafambiental.com"
        keywords="contacto IAAF Ambiental, consultoría ambiental, servicios ambientales Puerto Madryn, evaluación impacto ambiental, gestión ambiental, cotización servicios ambientales"
        url="https://iaafambiental.com/contacto"
      />
      <Header />

      <ContactoHero />

      <ContactoMetodos />

      {/* Sección de Formulario de Cotización */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactoFormulario />
            <ContactoInfo />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
