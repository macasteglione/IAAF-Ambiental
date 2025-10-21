import { useState, useEffect, useMemo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const isHomePage = useMemo(() => location.pathname === '/', [location.pathname]);
  const isLegalPage = useMemo(() => 
    ['/privacidad', '/terminos', '/accesibilidad'].includes(location.pathname),
    [location.pathname]
  );

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detectar si hay scroll para cambiar el fondo
      setIsScrolled(currentScrollY > 50);

      // No ocultar el navbar si el menú móvil está abierto
      if (isMenuOpen) {
        return;
      }

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      // Asegurar que el navbar sea visible cuando el menú está abierto
      setIsVisible(true);
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMenuOpen(false);
        }
      };
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMenuOpen]);

  const navigation = useMemo(() => [
    { name: "Inicio", href: "/" },
    { name: "Sobre Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Trabajo", href: "/trabajo" },
  ], []);

  const isActivePath = useCallback((path: string) => location.pathname === path, [location.pathname]);
  
  const logoSrc = useMemo(() => 
    !isLegalPage && !isScrolled && !isMenuOpen ? "/img/logo blanco.png" : "/img/logo_color.svg",
    [isLegalPage, isScrolled, isMenuOpen]
  );

  return (
    <>
      {/* Main Header */}
      <header 
        className={`${isLegalPage ? 'sticky' : 'fixed'} top-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          !isLegalPage && !isScrolled && !isMenuOpen
            ? 'bg-transparent shadow-none border-b-0'
            : 'bg-white shadow-sm border-gray-200'
        }`}
      >
        {/* Main navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3" aria-label="IAAF Ambiental - Volver al inicio">
                <img
                  src={logoSrc}
                  alt="IAAF Ambiental - Consultoría Ambiental en Puerto Madryn"
                  className="h-20 w-auto transition-all duration-300 hover:scale-105"
                  width="80"
                  height="80"
                  loading="eager"
                  decoding="async"
                />
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-2" aria-label="Navegación principal">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium transition-all duration-200 px-4 py-2 rounded-lg ${
                    isActivePath(item.href)
                      ? "text-black bg-brand-lime shadow-md"
                      : !isLegalPage && !isScrolled
                      ? "text-white hover:text-brand-lime hover:bg-white/10"
                      : "text-gray-700 hover:text-brand-teal hover:bg-green-50"
                  }`}
                  aria-current={isActivePath(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button 
                asChild 
                className="text-base bg-brand-teal hover:bg-brand-green text-white shadow-lg hover:shadow-xl transition-all"
              >
                <Link to="/contacto" aria-label="Ir a página de contacto">
                  Contacto
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                className={!isLegalPage && !isScrolled ? "text-white" : "text-brand-teal"}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav 
            id="mobile-menu" 
            className="md:hidden border-t border-gray-200 bg-white shadow-lg" 
            aria-label="Navegación móvil"
          >
            <div className="px-4 pt-4 pb-3 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActivePath(item.href)
                      ? "text-white bg-brand-green shadow-md"
                      : "text-gray-700 hover:text-brand-teal hover:bg-green-50"
                  }`}
                  aria-current={isActivePath(item.href) ? 'page' : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/contacto"
                className="block px-4 py-3 text-base font-medium rounded-lg text-white bg-brand-teal hover:bg-brand-green transition-all duration-200 text-center shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;