console.log("Hi from your service-worker.js file!");

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.webmanifest',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
    '/db.js',
];

// install
self.addEventListener("install", function (evt) {
    // perform installation
    // pre cache all static assets
    evt.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) { 
            console.log(cache);
            console.log("Cache money");
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    // tell the browser to activate this service worker immediately once it
    // has finished installing
    self.skipWaiting();
    console.log("You got skipped");
});


self.addEventListener('fetch', function(evt) {
    // code to handle requests goes here
    
    });

    evt.respondWith(
        caches.open(CACHE_NAME).then(cache => {
          return cache.match(evt.request).then(response => {
            return response || fetch(evt.request);
          });
        })
      );