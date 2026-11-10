const CACHE='current-shell-v1';
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(['./','./style.css','./app.js','./manifest.webmanifest','./icon-192.png','./icon-512.png']))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).pathname.includes('/api/'))return;event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)))});
