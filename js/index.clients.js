export default function initClientsSlider() {
  const slider = document.querySelector(".clients__slider");
  const slides = slider.querySelectorAll(".clients__slider-item");
  const prev = document.querySelector(".clients__arrow--left");
  const next = document.querySelector(".clients__arrow--right");

  if (!slider || !slides.length) return;

  let current = 0;
  let autoSlide;

  const showSlide = (index) => {
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === index);
    });
    current = index;
  };

  const nextSlide = () => {
    showSlide((current + 1) % slides.length);
  };

  const prevSlide = () => {
    showSlide((current - 1 + slides.length) % slides.length);
  };

  // Автоперемикання
  const startAuto = () => {
    autoSlide = setInterval(nextSlide, 5000);
  };
  const stopAuto = () => clearInterval(autoSlide);

  // Стрілки
  prev?.addEventListener("click", () => {
    stopAuto();
    prevSlide();
    startAuto();
  });

  next?.addEventListener("click", () => {
    stopAuto();
    nextSlide();
    startAuto();
  });

  // Свайпи
  let startX = 0;
  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      stopAuto();
      diff > 0 ? nextSlide() : prevSlide();
      startAuto();
    }
  });

  showSlide(current);
  startAuto();
}


document.body.addEventListener("htmx:afterSwap", (e) => {
  if (e.target.matches("section.clients")) {
    initClientsSlider();
  }
});


if (document.querySelector("section.clients")) {
  initClientsSlider();
}