// Replaces the service worker of the dashboard that used to live here: it
// removes its cached copy, unregisters itself and reloads open pages, which
// then forward to luchtinbeeld.nl.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    await Promise.all((await caches.keys()).map((key) => caches.delete(key)));
    await self.registration.unregister();
    const windows = await self.clients.matchAll({ type: 'window' });
    windows.forEach((client) => client.navigate(client.url));
  })());
});
