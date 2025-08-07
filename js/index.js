function init() {
<<<<<<< HEAD
    import('./index.tariffs.js');
    import('./index.available-cars.js');
    import('./index.clients.js');    
    import('./index.how-it-works.js');
    import('./index.video.js');
=======
  import("./index.tariffs.js");
  import("./index.available-cars.js");
  import("./index.clients.js");
  import("./index.how-it-works.js");
  import("./index.header-hero.js");
  import("./index.welcome-to-udrive-intro.js");
  import("./index.welcome-to-udrive-title.js");
  import("./index.discount-timer.js")
>>>>>>> f3f13ba71f87ed61d13759c700a5724f7352d22b
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
