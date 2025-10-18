import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

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

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Sobre Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Trabajo", href: "/trabajo" },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <>
      {/* Main Header */}
      <header 
        className={`bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Main navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3" aria-label="IAAF Ambiental - Volver al inicio">
                <img
                  src="/img/logo_color.svg"
                  alt="IAAF Ambiental - Consultoría Ambiental en Puerto Madryn"
                  className="h-20 w-auto transition-transform hover:scale-105"
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
                      ? "text-white bg-brand-green shadow-md"
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
                className="text-brand-teal"
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