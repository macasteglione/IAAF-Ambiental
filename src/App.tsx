import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./hooks/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Lazy load all pages for better code splitting
const Home = lazy(() => import("./pages/Index"));
const Nosotros = lazy(() => import("./pages/Nosotros"));
const Servicios = lazy(() => import("./pages/Servicios"));
const Contacto = lazy(() => import("./pages/Contacto"));
const Trabajo = lazy(() => import("./pages/Trabajo"));
const Proyectos = lazy(() => import("./pages/Proyectos"));
const ServicioEIA = lazy(() => import("./pages/servicios/ServicioEIA"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Accessibility = lazy(() => import("./pages/Accesibilidad"));
const Privacy = lazy(() => import("./pages/Privacidad"));
const Terminos = lazy(() => import("./pages/Terminos"));
const ServicioPlanesManejo = lazy(() => import("./pages/servicios/ServicioPlanesManejo"));
const ServicioMonitores = lazy(() => import("./pages/servicios/ServicioMonitoreos"));
const ServicioResiduos = lazy(() => import("./pages/servicios/ServicioResiduos"));
const ServicioAuditorias = lazy(() => import("./pages/servicios/ServicioAuditorias"));
const ServicioEducacion = lazy(() => import("./pages/servicios/ServicioEducacion"));
const ServicioOrdenamiento = lazy(() => import("./pages/servicios/ServicioOrdenamiento"));
const ServicioLicencias = lazy(() => import("./pages/servicios/ServicioLicencias"));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-lime"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <SpeedInsights />
      <Router>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
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
            <Route
              path="/servicios/planes-de-manejo-ambiental"
              element={<ServicioPlanesManejo />}
            />
            <Route
              path="/servicios/monitoreos-ambientales"
              element={<ServicioMonitores />}
            />
            <Route
              path="/servicios/gestion-de-residuos"
              element={<ServicioResiduos />}
            />
            <Route
              path="/servicios/auditorias-ambientales"
              element={<ServicioAuditorias />}
            />
            <Route
              path="/servicios/educacion-y-capacitacion-ambiental"
              element={<ServicioEducacion />}
            />
            <Route
              path="/servicios/ordenamiento-territorial"
              element={<ServicioOrdenamiento />}
            />
            <Route
              path="/servicios/licencias-y-permisos-ambientales"
              element={<ServicioLicencias />}
            />
            <Route path="/accesibilidad" element={<Accessibility />} />
            <Route path="/privacidad" element={<Privacy />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;
