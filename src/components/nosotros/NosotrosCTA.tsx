import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight } from "lucide-react";

const NosotrosCTA = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-brand-green via-brand-teal to-brand-teal text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            ¿Listo para Trabajar con Nosotros?
          </h2>

          <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-white/95 leading-relaxed">
            Únase a las empresas que confían en IAAF Ambiental para sus
            necesidades de consultoría y gestión ambiental en la Patagonia.
          </p>

          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-teal hover:bg-gray-50 font-bold text-lg px-8 py-6 shadow-2xl hover:shadow-white/20 transition-all transform hover:scale-105"
            >
              <Link to="/servicios">
                Ver Nuestros Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-teal font-bold text-lg px-8 py-6 backdrop-blur-sm bg-white/10 transition-all transform hover:scale-105"
            >
              <Link to="/contacto">Solicitar Consultoría</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosotrosCTA;
