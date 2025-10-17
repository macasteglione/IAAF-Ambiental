import { Helmet } from "react-helmet-async";

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  robots?: string;
  canonicalUrl?: string;
  hreflang?: Array<{ lang: string; url: string }>;
  structuredData?: object[];
  preloadImages?: string[];
  critical?: boolean;
}

const EnhancedSEO = ({
  title = "IAAF Ambiental - Consultoría Ambiental",
  description = "Consultora ambiental líder en Patagonia. Estudios de impacto ambiental, gestión ambiental, auditorías, monitoreo y asesoramiento en normativa ambiental para empresas e instituciones en Puerto Madryn, Chubut y toda la región patagónica.",
  keywords = "consultoría ambiental, impacto ambiental, gestión ambiental, auditoría ambiental, monitoreo ambiental, puerto madryn, chubut, patagonia, EIA, normativa ambiental argentina",
  image = "/images/iaaf-og-image.jpg",
  url = "https://iaafambiental.com",
  type = "website",
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  canonicalUrl,
  hreflang = [],
  structuredData = [],
  preloadImages = [],
  critical = false,
}: EnhancedSEOProps) => {
  const fullTitle = title.includes("IAAF Ambiental")
    ? title
    : `${title} | IAAF Ambiental`;
  const canonical = canonicalUrl || url;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://iaafambiental.com/#organization",
    name: "IAAF Ambiental",
    alternateName: "IAAF Consultora Ambiental",
    url: "https://iaafambiental.com",
    logo: {
      "@type": "ImageObject",
      url: "https://iaafambiental.com/logo.png",
      width: 1200,
      height: 630,
    },
    description: description,
    telephone: "+54 280 XXX-XXXX", // Reemplazar con teléfono real
    email: "administracion@iaafambiental.com", // Reemplazar con email real
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dirección de la oficina", // Reemplazar con dirección real
      addressLocality: "Puerto Madryn",
      addressRegion: "Chubut",
      postalCode: "U9120",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -42.7692,
      longitude: -65.0385,
    },
    areaServed: [
      { "@type": "Country", name: "Argentina" },
      { "@type": "AdministrativeArea", name: "Chubut" },
      { "@type": "AdministrativeArea", name: "Patagonia" },
      { "@type": "City", name: "Puerto Madryn" },
      { "@type": "City", name: "Trelew" },
      { "@type": "City", name: "Rawson" },
      { "@type": "City", name: "Comodoro Rivadavia" },
    ],
    serviceType: [
      "Consultoría Ambiental",
      "Estudios de Impacto Ambiental",
      "Gestión Ambiental",
      "Auditorías Ambientales",
      "Monitoreo Ambiental",
      "Planes de Gestión de Residuos",
    ],
    sameAs: [
      // Reemplazar con redes sociales reales de IAAF Ambiental
      "https://www.facebook.com/iaafambiental",
      "https://www.linkedin.com/company/iaaf-ambiental",
      "https://www.instagram.com/iaafambiental",
    ],
    priceRange: "$$",
    knowsAbout: [
      "Impacto Ambiental",
      "Gestión Ambiental",
      "Desarrollo Sustentable",
      "Normativa Ambiental Argentina",
      "ISO 14001",
      "Evaluación Ambiental",
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://iaafambiental.com/#website",
    url: "https://iaafambiental.com",
    name: "IAAF Ambiental",
    description: description,
    publisher: {
      "@id": "https://iaafambiental.com/#organization",
    },
    inLanguage: "es-AR",
  };

  const allStructuredData = [
    organizationSchema,
    webSiteSchema,
    ...structuredData,
  ];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      {/* Geo tags for local SEO */}
      <meta name="geo.region" content="AR-U" />
      <meta name="geo.placename" content="Puerto Madryn" />
      <meta name="geo.position" content="-42.7692;-65.0385" />
      <meta name="ICBM" content="-42.7692, -65.0385" />

      {/* Preload critical resources */}
      {critical && (
        <>
          <link rel="preload" as="image" href={image} />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            as="style"
          />
        </>
      )}

      {preloadImages.map((img, index) => (
        <link key={index} rel="preload" as="image" href={img} />
      ))}

      {/* Hreflang tags */}
      {hreflang.map((lang, index) => (
        <link
          key={index}
          rel="alternate"
          hrefLang={lang.lang}
          href={lang.url}
        />
      ))}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="IAAF Ambiental" />
      <meta property="og:locale" content="es_AR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Performance hints */}
      <meta name="theme-color" content="#22c55e" />
      <meta name="msapplication-TileColor" content="#22c55e" />

      {/* Additional meta tags for local business */}
      <meta name="author" content="IAAF Ambiental" />
      <meta name="language" content="Spanish" />
      <meta name="coverage" content="Argentina" />
      <meta name="distribution" content="global" />

      {/* Structured Data */}
      {allStructuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default EnhancedSEO;
