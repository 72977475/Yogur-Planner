const CACHE_NAME = "yogur-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/info.html",
  "/css/estilos.css",
  "/css/estilosqs.css",
  "/js/script.js",
  "/img/logooo.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
