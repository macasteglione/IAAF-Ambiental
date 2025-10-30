interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  areaServed: string[];
  serviceType: string[];
  url?: string;
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  areaServed: string[];
  provider: string;
  url: string;
}

interface ArticleSchemaProps {
  headline: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export const createDefaultLocalBusinessSchema = (description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://iaafambiental.com/#organisation",
  "name": "IAAF Ambiental",
  "alternateName": "IAAF Consultora Ambiental",
  "description": description,
  "url": url,
  "telephone": "+54 280 459-7153", // Reemplazar con el teléfono real
  "email": "administracion@iaafambiental.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Puerto Madryn",
    "addressRegion": "Chubut",
    "postalCode": "U9120",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -42.7692,
    "longitude": -65.0385
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "Argentina"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Chubut"
    },
    {
      "@type": "City",
      "name": "Puerto Madryn"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Patagonia"
    }
  ],
  "serviceType": [
    "Consultoría Ambiental",
    "Estudios de Impacto Ambiental",
    "Gestión Ambiental",
    "Auditorías Ambientales",
    "Monitoreo Ambiental",
    "Planes de Gestión de Residuos",
    "Evaluación de Riesgos Ambientales",
    "Asesoramiento en Normativa Ambiental"
  ],
  "openingHours": [
    "Mo 09:00-18:00",
    "Tu 09:00-18:00", 
    "We 09:00-18:00",
    "Th 09:00-18:00",
    "Fr 09:00-18:00"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "logo": {
    "@type": "ImageObject",
    "url": "https://iaafambiental.com/img/logo_color.png"
  },
  "sameAs": [
    "https://www.linkedin.com/in/iaaf-ambiental",
    "https://www.instagram.com/iaafambiental"
  ],
  "priceRange": "$$",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "Certificaciones Profesionales en Gestión Ambiental"
  },
  "knowsAbout": [
    "Medio Ambiente",
    "Evaluación de Impacto Ambiental",
    "Gestión Ambiental",
    "Desarrollo Sustentable",
    "Normativa Ambiental Argentina"
  ]
});

export const createCustomLocalBusinessSchema = (localBusinessData: LocalBusinessSchemaProps, url: string) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": localBusinessData.name,
  "description": localBusinessData.description,
  "telephone": localBusinessData.telephone,
  "email": localBusinessData.email,
  "address": {
    "@type": "PostalAddress",
    ...localBusinessData.address
  },
  "geo": {
    "@type": "GeoCoordinates",
    ...localBusinessData.geo
  },
  "areaServed": localBusinessData.areaServed.map(area => ({
    "@type": "Place",
    "name": area
  })),
  "serviceType": localBusinessData.serviceType,
  "url": url
});

export const createServiceSchema = (serviceData: ServiceSchemaProps) => ({
  "@context": "https://schema.org/",
  "@type": "Service",
  "name": serviceData.name,
  "description": serviceData.description,
  "areaServed": serviceData.areaServed.map(area => ({
    "@type": "Place",
    "name": area
  })),
  "provider": {
    "@type": "Organization",
    "name": serviceData.provider,
    "url": serviceData.url,
  },
  "serviceType": "Servicios Ambientales",
  "category": "Consultoría Ambiental"
});

export const createBreadcrumbSchema = (breadcrumbs: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const createArticleSchema = (articleData: ArticleSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": articleData.headline,
  "datePublished": articleData.datePublished,
  "dateModified": articleData.dateModified,
  "author": {
    "@type": "Organization",
    "name": articleData.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "IAAF Ambiental",
    "logo": {
      "@type": "ImageObject",
      "url": "https://iaafambiental.com/img/logo_color.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": articleData.url
  }
});