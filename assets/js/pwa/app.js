import Toast from 'bootstrap/js/src/toast';

if ('serviceWorker' in navigator) {
  // Get Jekyll config from URL parameters
  const src = new URL(document.currentScript.src);
  const register = src.searchParams.get('register');
  const baseUrl = src.searchParams.get('baseurl');
  const version = src.searchParams.get('version') || new Date().getTime(); // Use timestamp as fallback for cache busting

  if (register) {
    // Add version parameter for cache busting
    const swUrl = `${baseUrl}/sw.min.js?v=${version}`;
    const toastNotification = document.getElementById('pwa-update-toast');
    const btnRefresh = document.getElementById('pwa-refresh-btn');
    
    navigator.serviceWorker.register(swUrl).then((registration) => {
      // Check if there's a waiting service worker
      if (registration.waiting) {
        toastNotification.style.display = 'block';
      }

      registration.addEventListener('updatefound', () => {
        registration.installing.addEventListener('statechange', () => {
          if (registration.waiting) {
            if (navigator.serviceWorker.controller) {
              toastNotification.style.display = 'block';
            }
          }
        });
      });

      // Add click event for the refresh button
      btnRefresh.addEventListener('click', () => {
        if (registration.waiting) {
          registration.waiting.postMessage('SKIP_WAITING');
        }
        toastNotification.style.display = 'none';
      });
    });

    let refreshing = false;

    // Detect controller change and refresh all the opened tabs
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        window.location.reload();
        refreshing = true;
      }
    });
  } else {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
  }
}
