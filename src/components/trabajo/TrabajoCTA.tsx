import { Button } from "@/components/ui/button";
import { Mail, FileText } from "lucide-react";

const TrabajoCTA = () => {
  return (
    <section className="py-16 bg-[#5AB75B] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            ¿Listo para Ser Parte del Cambio?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/95 leading-relaxed">
            Unite a nuestro equipo de profesionales comprometidos y ayudanos a
            construir un futuro más sustentable en la Patagonia.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-brand-teal hover:bg-gray-100 font-semibold text-lg px-8 py-6 shadow-2xl hover:shadow-xl transition-all transform hover:scale-105 border-2 border-white/50"
            >
              <Mail className="h-5 w-5 mr-2" />
              <a href="/contacto" rel="noopener noreferrer">
                Agendar Consulta Ahora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrabajoCTA;
