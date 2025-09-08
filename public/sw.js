// public/sw.js

const CACHE_NAME = "my-app-cache-v1";
const urlsToCache = [
    "/",               // Root
    "/index.html",     // Main page
    "/vite.svg",
    "https://jsonplaceholder.typicode.com/users"       // Example static asset
];

// Install SW and cache files
self.addEventListener("install", (event) => {
    console.log("Service Worker: Installed");
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Caching initial files...");
            return cache.addAll(urlsToCache);
        })
    );
});

// Activate and clean old caches
self.addEventListener("activate", (event) => {
    console.log("Service Worker: Activated");
    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log("Deleting old cache:", cache);
                        return caches.delete(cache);
                    }
                })
            )
        )
    );
});

// Fetch requests: cache-first fallback to network
self.addEventListener("fetch", (event) => {
    console.log("Fetching:", event.request.url);
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return (
                cachedResponse ||
                fetch(event.request).then((response) => {
                    // Only cache GET requests
                    if (event.request.method === "GET") {
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, response.clone());
                        });
                    }
                    return response;
                })
            );
        })
    );
});
