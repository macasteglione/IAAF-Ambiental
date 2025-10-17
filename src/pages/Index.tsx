import { Suspense, lazy } from "react";
import EnhancedSEO from "@/components/EnhancedSEO";

// Lazy load components for better performance
const Header = lazy(() => import("@/components/Navbar"));
const HeroCarousel = lazy(() => import("@/components/HeroCarousel"));
const ServicesOverview = lazy(() => import("@/components/ResumenServicios"));
const TrustSection = lazy(() => import("@/components/SeccionClientes"));
const Footer = lazy(() => import("@/components/Footer"));

const ComponentLoader = () => (
  <div className="animate-pulse">
    <div className="h-16 bg-gray-200 mb-4"></div>
    <div className="h-96 bg-gray-200 mb-8"></div>
  </div>
);

const Index = () => {
  const breadcrumbs = [
    { name: "Inicio", url: "https://iaafambiental.com" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IAAF Ambiental - Consultoría Ambiental",
    "description": "IAAF Ambiental es una consultora especializada en servicios ambientales en Puerto Madryn, Chubut. Ofrecemos estudios de impacto ambiental, gestión ambiental, auditorías y asesoramiento para cumplir con la normativa ambiental argentina.",
    "serviceType": [
      "Consultoría Ambiental",
      "Estudios de Impacto Ambiental",
      "Gestión Ambiental",
      "Auditorías Ambientales",
      "Monitoreo Ambiental",
      "Planes de Gestión de Residuos",
      "Asesoramiento en Normativa Ambiental"
    ],
    "areaServed": [
      { "@type": "Country", "name": "Argentina" },
      { "@type": "AdministrativeArea", "name": "Chubut" },
      { "@type": "AdministrativeArea", "name": "Patagonia" },
      { "@type": "City", "name": "Puerto Madryn" },
      { "@type": "City", "name": "Trelew" },
      { "@type": "City", "name": "Rawson" },
      { "@type": "City", "name": "Comodoro Rivadavia" },
      { "@type": "City", "name": "Esquel" }
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "Consultar presupuesto",
      "priceCurrency": "ARS",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "ARS"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Ambientales",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Estudios de Impacto Ambiental",
            "description": "Evaluación integral de impactos ambientales para proyectos industriales, comerciales y de infraestructura"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Gestión y Auditoría Ambiental",
            "description": "Auditorías ambientales, implementación de sistemas de gestión ISO 14001 y seguimiento de normativas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Monitoreo y Análisis Ambiental",
            "description": "Monitoreo de calidad de aire, agua y suelo, análisis de emisiones y efluentes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Planes de Gestión de Residuos",
            "description": "Diseño e implementación de planes de gestión integral de residuos sólidos urbanos e industriales"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es un Estudio de Impacto Ambiental?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un Estudio de Impacto Ambiental (EIA) es un análisis técnico que evalúa los efectos que un proyecto puede tener sobre el medio ambiente. En IAAF Ambiental realizamos EIA completos cumpliendo con la normativa provincial y nacional vigente."
        }
      },
      {
        "@type": "Question", 
        "name": "¿Realizan auditorías ambientales en Chubut?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, realizamos auditorías ambientales en toda la provincia de Chubut, evaluando el cumplimiento de normativas ambientales, identificando riesgos y proponiendo planes de mejora para empresas e instituciones."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué servicios de monitoreo ambiental ofrecen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ofrecemos monitoreo de calidad de aire, agua y suelo, análisis de emisiones atmosféricas, control de efluentes líquidos, evaluación de ruido ambiental y estudios de calidad ambiental integral."
        }
      },
      {
        "@type": "Question",
        "name": "¿En qué ciudades de Patagonia trabajan?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Trabajamos en toda la región patagónica, con base en Puerto Madryn, Chubut. Brindamos servicios en ciudades como Trelew, Rawson, Comodoro Rivadavia, Esquel y otras localidades de la Patagonia argentina."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ayudan con la gestión de residuos industriales?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Sí, diseñamos e implementamos planes de gestión integral de residuos tanto industriales como urbanos, incluyendo clasificación, tratamiento, disposición final y cumplimiento de normativas ambientales."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="IAAF Ambiental | Consultoría Ambiental"
        description="Consultoría ambiental profesional en Puerto Madryn, Chubut y Patagonia. Estudios de impacto ambiental, gestión ambiental, auditorías, monitoreo y planes de residuos. Asesoramiento especializado en normativa ambiental argentina para empresas e instituciones."
        keywords="consultoría ambiental puerto madryn, estudio impacto ambiental chubut, gestión ambiental patagonia, auditoría ambiental, monitoreo ambiental, plan gestión residuos, consultora ambiental argentina, EIA chubut, asesoramiento ambiental, normativa ambiental argentina, impacto ambiental trelew, impacto ambiental rawson, consultora ambiental comodoro rivadavia"
        url="https://iaafambiental.com"
        type="website"
        structuredData={[serviceSchema, breadcrumbSchema, faqSchema]}
        preloadImages={[
          "/images/hero-iaaf.jpg",
          "/images/servicios-ambientales.jpg"
        ]}
        critical={true}
      />
      
      <Suspense fallback={<ComponentLoader />}>
        <Header />
      </Suspense>
      
      <main id="main-content">
        <Suspense fallback={<ComponentLoader />}>
          <HeroCarousel />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-200"></div>}>
          <ServicesOverview />
        </Suspense>
        
        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-200"></div>}>
          <TrustSection />
        </Suspense>
      </main>
      
      <Suspense fallback={<div className="h-32 animate-pulse bg-gray-200"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;