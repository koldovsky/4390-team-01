function init() {
    import('./contacts.contact-us.js');
    import('./contacts.contact-submit-form.js');
    import('./contacts.contact-form-check.js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});