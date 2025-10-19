import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./hooks/ScrollToTop";
import Home from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Trabajo from "./pages/Trabajo";
import Proyectos from "./pages/Proyectos";
import Trelew from "./pages/regiones/Trelew";
import PuertoMadryn from "./pages/regiones/PuertoMadryn";
import Dolavon from "./pages/regiones/Dolavon";
import Gaiman from "./pages/regiones/Gaiman";
import PeninsulaValdes from "./pages/regiones/PeninsulaValdes";
import ComarcaLosAlerces from "./pages/regiones/ComarcaLosAlerces";
import PuertoPiramides from "./pages/regiones/PuertoPiramides";
import Rawson from "./pages/regiones/Rawson";
import ServicioEIA from "./pages/servicios/ServicioEIA";
import ReservaMarinaPuertoMadryn from "./pages/proyectos/ReservaMarinaPuertoMadryn";
import NotFound from "./pages/NotFound";
import Accessibility from "./pages/Accesibilidad";
import Privacy from "./pages/Privacidad";
import Terminos from "./pages/Terminos";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <SpeedInsights />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/trabajo" element={<Trabajo />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/regiones/trelew" element={<Trelew />} />
          <Route path="/regiones/puerto-madryn" element={<PuertoMadryn />} />
          <Route path="/regiones/dolavon" element={<Dolavon />} />
          <Route path="/regiones/gaiman" element={<Gaiman />} />
          <Route
            path="/regiones/peninsula-valdes"
            element={<PeninsulaValdes />}
          />
          <Route
            path="/regiones/comarca-alerces"
            element={<ComarcaLosAlerces />}
          />
          <Route
            path="/regiones/puerto-piramides"
            element={<PuertoPiramides />}
          />
          <Route path="/regiones/rawson" element={<Rawson />} />
          <Route
            path="/servicios/estudios-de-impacto-ambiental"
            element={<ServicioEIA />}
          />
          <Route
            path="/proyectos/reserva-marina-puerto-madryn"
            element={<ReservaMarinaPuertoMadryn />}
          />
          <Route path="/accesibilidad" element={<Accessibility />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
