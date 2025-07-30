function init() {
    import('./index.tariffs.js');
    import('./index.available-cars.js');
    import('./index.clients.js');    
    import('./index.how-it-works.js');
    import('./index.header-hero.js')
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});