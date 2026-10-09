export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .getRegistration()
      .then((registration) => registration?.unregister())
      .catch((error) => {
        console.error("Error while unregistering service worker:", error);
      });
  }
}
