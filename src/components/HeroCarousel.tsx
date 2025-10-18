import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      image: "/img/consultora-ambiental-hero.jpg",
      title: "Consultoría Ambiental Profesional",
      subtitle: "Expertos en Gestión Ambiental en la Patagonia",
      description: "Brindamos soluciones integrales para la gestión ambiental de tu empresa, garantizando el cumplimiento normativo y promoviendo prácticas sostenibles que benefician tanto a tu negocio como al medio ambiente.",
      cta: "Conocer Servicios",
      ctaLink: "/servicios",
      secondaryCta: "Contactar Ahora",
      secondaryCtaLink: "/contacto"
    },
    {
      id: 2,
      image: "/img/estudio-impacto-hero.jpg",
      title: "Estudios de Impacto Ambiental",
      subtitle: "Evaluaciones Completas y Detalladas",
      description: "Realizamos estudios de impacto ambiental exhaustivos que identifican, prevén y evalúan los efectos ambientales de tus proyectos, asegurando su viabilidad y sostenibilidad a largo plazo.",
      cta: "Ver EIA",
      ctaLink: "/servicios/estudios-de-impacto-ambiental",
      secondaryCta: "Solicitar Cotización",
      secondaryCtaLink: "/contacto"
    },
    {
      id: 3,
      image: "/img/gestion-residual-hero.jpeg",
      title: "Gestión de Residuos",
      subtitle: "Soluciones Sostenibles para tu Empresa",
      description: "Desarrollamos e implementamos planes integrales de gestión de residuos, optimizando procesos y reduciendo el impacto ambiental de tu organización mientras cumples con la normativa vigente.",
      cta: "Nuestros Planes",
      ctaLink: "/servicios/gestion-residuos",
      secondaryCta: "Consultoría Gratuita",
      secondaryCtaLink: "/contacto"
    },
    {
      id: 4,
      image: "/img/auditoria-ambiental-hero.png",
      title: "Auditorías y Certificaciones",
      subtitle: "ISO 14001 y Cumplimiento Normativo",
      description: "Te acompañamos en el proceso de obtención y mantenimiento de certificaciones ambientales, mejorando tus procesos y fortaleciendo tu compromiso con la sostenibilidad.",
      cta: "Auditorías",
      ctaLink: "/servicios/auditorias",
      secondaryCta: "Hablar con Experto",
      secondaryCtaLink: "/contacto"
    }
  ];

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // 7 segundos para dar más tiempo de lectura

    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    <div
      className="relative h-[600px] lg:h-[700px] overflow-hidden"
      role="region"
      aria-label="Servicios de consultoría ambiental destacados"
      aria-live="polite"
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              animation: index === currentSlide ? 'kenBurns 15s ease-out' : 'none'
            }}
            role="img"
            aria-label={slide.title}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl text-white">

                <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-fade-in leading-tight">
                  {slide.title}
                </h1>
                
                <p className="text-xl lg:text-2xl mb-6 text-brand-lime font-semibold animate-fade-in">
                  {slide.subtitle}
                </p>
                
                <p className="text-base lg:text-lg mb-8 text-gray-100 max-w-2xl animate-fade-in leading-relaxed">
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                  <Link to={slide.ctaLink}>
                    <Button
                      size="lg"
                      className="bg-brand-lime hover:bg-brand-green text-black shadow-2xl hover:shadow-brand-teal/50 transition-all transform hover:scale-105 font-semibold text-base px-8 py-6"
                      aria-label={`${slide.cta} - ${slide.title}`}
                    >
                      {slide.cta}
                      <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </Link>

                  {slide.secondaryCtaLink.startsWith('tel:') ? (
                    <a href={slide.secondaryCtaLink}>
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 backdrop-blur-sm font-semibold text-base px-8 py-6"
                        aria-label={slide.secondaryCta}
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        {slide.secondaryCta}
                      </Button>
                    </a>
                  ) : (
                    <Link to={slide.secondaryCtaLink}>
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 backdrop-blur-sm font-semibold text-base px-8 py-6"
                        aria-label={slide.secondaryCta}
                      >
                        {slide.secondaryCta}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
        aria-label="Ir a la diapositiva anterior"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
        aria-label="Ir a la siguiente diapositiva"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Slide indicators */}
      <div 
        className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full" 
        role="tablist" 
        aria-label="Indicadores de diapositivas"
      >
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? "bg-brand-lime w-8 h-3" 
                : "bg-white/50 hover:bg-white/70 w-3 h-3"
            }`}
            role="tab"
            aria-label={`Ir a diapositiva ${index + 1}: ${slide.title}`}
            aria-selected={index === currentSlide}
          />
        ))}
      </div>

      {/* Ken Burns Animation */}
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;