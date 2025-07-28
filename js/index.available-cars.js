const carousel = document.querySelector(".available-cars__options-carousel-cards");
const leftBtn = document.querySelector(".available-cars__arrow--left");
const rightBtn = document.querySelector(".available-cars__arrow--right");

let autoScrollInterval = null;
let inactivityTimeout = null;
let isScrolling = false;

function getCardScrollAmount() {
  const card = carousel.querySelector(".car-card");
  if (!card) return 0;
  const gap = parseInt(getComputedStyle(carousel).gap) || 0;
  return card.offsetWidth + gap;
}

function scrollRight() {
  if (isScrolling) return;
  isScrolling = true;

  const scrollAmount = getCardScrollAmount();
  carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });

  setTimeout(() => {
    const firstCard = carousel.querySelector(".car-card");
    if (firstCard) {
      carousel.appendChild(firstCard);
      carousel.scrollLeft -= scrollAmount;
    }
    isScrolling = false;
  }, 400);
}

function scrollLeft() {
  if (isScrolling) return;
  isScrolling = true;

  const scrollAmount = getCardScrollAmount();
  const cards = carousel.querySelectorAll(".car-card");
  const lastCard = cards[cards.length - 1];

  if (lastCard) {
    carousel.prepend(lastCard);
    carousel.scrollLeft += scrollAmount;
  }

  setTimeout(() => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    setTimeout(() => {
      isScrolling = false;
    }, 350);
  }, 20);
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
  autoScrollInterval = null;
}

function startAutoScroll() {
  stopAutoScroll();
  autoScrollInterval = setInterval(scrollRight, 3000);
}

function handleUserInteraction(direction = "right") {
  stopAutoScroll();

  if (direction === "left") scrollLeft();
  else scrollRight();

  clearTimeout(inactivityTimeout);
  inactivityTimeout = setTimeout(() => {
    scrollRight();
    startAutoScroll();
  }, 2500);
}

leftBtn.addEventListener("click", () => handleUserInteraction("left"));
rightBtn.addEventListener("click", () => handleUserInteraction("right"));

startAutoScroll();

let touchStartX = 0;
let isDragging = false;

carousel.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.touches[0].clientX;
    isDragging = true;
    stopAutoScroll();
  },
  { passive: true }
);

carousel.addEventListener(
  "touchmove",
  (e) => {
    if (!isDragging) return;
    e.preventDefault();
  },
  { passive: false }
);

carousel.addEventListener(
  "touchend",
  (e) => {
    if (!isDragging) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handleUserInteraction("right");
      } else {
        handleUserInteraction("left");
      }
    }

    isDragging = false;
    startAutoScroll();
  },
  { passive: true }
);
