const CACHE_NAME = 'adapta-v1';
const APP_SHELL = [
  './', './index.html', './styles.css', './warm-theme.css', './layout-fixes.css', './mobile-canvas.css',
  './vivid-theme.css', './lilac-theme.css', './entry-animation.css', './launch-animation.css', './topic-detail.css',
  './icon-system.css', './icon-fix.css', './pwa.css', './content.js', './app.js', './topic-detail.js', './icons.js', './pwa.js',
  './manifest.webmanifest', './assets/adapta-icon.svg', './assets/adapta-icon-maskable.svg'
];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => { if (event.request.method !== 'GET') return; event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => { const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)); return response; }).catch(() => caches.match('./index.html')))); });
