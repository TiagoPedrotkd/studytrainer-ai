const CACHE_NAME = 'studytrainer-v61';

const ASSETS = [
  '/',
  '/index.html',
  '/app.js',
  '/styles/main.css',
  '/styles/content.css',
  '/styles/content-anatomy.css',
  '/assets/anatomy/antidoping-objectives.jpg',
  '/assets/anatomy/antidoping-organizations.jpg',
  '/assets/anatomy/aut-therapeutic-use.jpg',
  '/assets/anatomy/chain-of-survival.jpg',
  '/assets/anatomy/chronic-injuries.jpg',
  '/assets/anatomy/dae-electrodes.jpg',
  '/assets/anatomy/doping-control-procedure.jpg',
  '/assets/anatomy/fick-formula.jpg',
  '/assets/anatomy/heart-circulation.jpg',
  '/assets/anatomy/injury-phases.jpg',
  '/assets/anatomy/lombalgia-mechanical.jpg',
  '/assets/anatomy/muscle-structure.jpg',
  '/assets/anatomy/outdoor-pollution.jpg',
  '/assets/anatomy/prohibited-list.jpg',
  '/assets/anatomy/raised-protocol.jpg',
  '/assets/anatomy/respiratory-system.jpg',
  '/assets/anatomy/sbv-algorithm.jpg',
  '/assets/anatomy/skeletal-bones.jpg',
  '/assets/anatomy/supplements-risk.jpg',
  '/styles/readability.css',
  '/pages/unidade.html',
  '/pages/subunidade.html',
  '/pages/exame.html',
  '/data/course.js',
  '/data/unit-tmt.js',
  '/data/unit-pdd.js',
  '/data/unit-fch.js',
  '/data/unit-da.js',
  '/data/unit-ed.js',
  '/manifest.webmanifest',
  '/icons/icon.svg',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);

      return cached || fetchPromise;
    })
  );
});
