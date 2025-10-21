const CACHE_NAME = 'iaaf-ambiental-v1';
const RUNTIME_CACHE = 'iaaf-runtime-v1';

// Assets to cache on install
const PRECACHE_URLS = [
  '/',
  '/img/logo_color.svg',
  '/img/logo blanco.png',
  '/img/logo negro.png',
];

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName));
    }).then((cachesToDelete) => {
      return Promise.all(cachesToDelete.map((cacheToDelete) => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// Fetch event - network first, fallback to cache
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // For navigation requests, use network first
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match('/');
        })
    );
    return;
  }

  // For assets, use cache first, then network
  if (event.request.destination === 'image' || 
      event.request.destination === 'style' || 
      event.request.destination === 'script') {
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return caches.open(RUNTIME_CACHE).then((cache) => {
            return fetch(event.request).then((response) => {
              // Cache successful responses
              if (response.status === 200) {
                cache.put(event.request, response.clone());
              }
              return response;
            });
          });
        })
    );
    return;
  }

  // For other requests, network only
  event.respondWith(fetch(event.request));
});
