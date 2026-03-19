const CACHE_NAME = 'embraps-v1';
const assets = [
  './',
  './index.html',
  './logo_embraps.png',
  './manifest.json'
];

// Instala o Service Worker e salva os arquivos no cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Responde com o cache quando estiver offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});