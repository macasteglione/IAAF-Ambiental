
import { useEffect } from 'react';

const PreloadCriticalResources = () => {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      '/img/logo_blanco.png',
      '/img/logo_negro.png'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // DNS prefetch for external domains
    const domains = [
      '//fonts.googleapis.com',
      '//fonts.gstatic.com',
      '//www.googletagmanager.com',
      '//www.cognitoforms.com'
    ];

    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

  return null;
};

export default PreloadCriticalResources;
