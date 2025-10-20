import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./hooks/ScrollToTop";
import Home from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Trabajo from "./pages/Trabajo";
import Proyectos from "./pages/Proyectos";
import ServicioEIA from "./pages/servicios/ServicioEIA";
import NotFound from "./pages/NotFound";
import Accessibility from "./pages/Accesibilidad";
import Privacy from "./pages/Privacidad";
import Terminos from "./pages/Terminos";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <HelmetProvider>
      <SpeedInsights />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/trabajo" element={<Trabajo />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route
            path="/servicios/estudios-de-impacto-ambiental"
            element={<ServicioEIA />}
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
