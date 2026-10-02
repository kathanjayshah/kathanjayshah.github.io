// Unregisters any leftover service workers and clears Cache Storage
// so deploys always show the latest site (no offline/PWA caching).

export function unregister() {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  const hadController = Boolean(navigator.serviceWorker.controller);

  navigator.serviceWorker
    .getRegistrations()
    .then((registrations) =>
      Promise.all(registrations.map((registration) => registration.unregister())),
    )
    .then(() => {
      if (!('caches' in window)) {
        return undefined;
      }
      return caches.keys().then((keys) =>
        Promise.all(keys.map((key) => caches.delete(key))),
      );
    })
    .then(() => {
      // One-time reload so users stuck on a cached shell get fresh assets.
      if (hadController && !sessionStorage.getItem('sw-cleared')) {
        sessionStorage.setItem('sw-cleared', '1');
        window.location.reload();
      }
    })
    .catch((error) => {
      console.error(error.message);
    });
}
