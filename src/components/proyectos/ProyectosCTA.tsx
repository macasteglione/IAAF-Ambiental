import { Button } from "@/components/ui/button";
import { Phone, Mail, Calendar } from "lucide-react";

const ProyectosCTA = () => {
  return (
    <section
      className="py-16 lg:py-20 text-white relative overflow-hidden"
      style={{ backgroundColor: "#5AB75B" }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            ¿Listo para Impulsar su Proyecto Ambiental?
          </h2>

          <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-white/95 leading-relaxed">
            Nuestro equipo de expertos trabajará contigo para entender tus
            necesidades únicas y desarrollar un plan de gestión ambiental
            adaptado a tu proyecto o sector en la Patagonia.
          </p>

          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-dark hover:bg-gray-50 font-bold text-lg px-8 py-6 shadow-2xl hover:shadow-white/20 transition-all transform hover:scale-105"
            >
              <a href="/contacto" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta Gratuita
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProyectosCTA;
