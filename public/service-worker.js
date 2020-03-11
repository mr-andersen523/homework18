//from Google Developer (install service worker)

var CACHE_NAME = 'budget-tracker-cache-v1';
var DATA_CACHE_NAME = 'data-cache-v1';

var urlsToCache = [
    '/',
    'index.js',
    'db.js',
    'styles.css',
    'index.html'
    ];

self.addEventListener('install', function(event) {
  // Perform install steps
event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
    })
);

self.skipWaiting();
});


//activate?





//Cache and return requests (from google developer)

self.addEventListener('fetch', function(event) {
    event.respondWith(
    caches.match(event.request)
        .then(function(response) {
        // Cache hit - return response
        if (response) {
        return response;
        }
        return fetch(event.request);
        }
    )
    );
});