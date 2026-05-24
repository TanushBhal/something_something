const CACHE = "bhindi-bird-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/bird.png",
  "./assets/bhindi.png",
  "./assets/cake.png",
  "./assets/brownie.png",
  "./assets/flap1.mp3",
  "./assets/flap2.mp3",
  "./assets/hit1.mp3",
  "./assets/hit2.mp3",
  "./assets/score.mp3"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
