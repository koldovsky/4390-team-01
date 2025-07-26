document.addEventListener("DOMContentLoaded", () => {
  const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
  let loadedPartialsCount = 0;

  function init() {
    import('./index.tariffs.js');
    import('./index.available-cars.js');
  }

  document.body.addEventListener('html:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) {
      init();
    }
  });
});