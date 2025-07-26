document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".available-cars__options-carousel-cards");
    const leftBtn = document.querySelector(".available-cars__arrow--left");
    const rightBtn = document.querySelector(".available-cars__arrow--right");

    function getCardScrollAmount() {
        const card = carousel.querySelector(".car-card");
        if (!card) return 0;

        const cardStyles = getComputedStyle(card);
        const carouselStyles = getComputedStyle(carousel);

        const cardWidth = card.offsetWidth;
        const gap = parseInt(carouselStyles.gap) || 0;

        return cardWidth + gap;
    }

    leftBtn.addEventListener("click", () => {
        console.log("Left button clicked");
        carousel.scrollBy({
            left: -getCardScrollAmount(),
            behavior: "smooth"
        });
    });

    rightBtn.addEventListener("click", () => {
        console.log("Right button clicked");
        carousel.scrollBy({
            left: getCardScrollAmount(),
            behavior: "smooth"
        });
    });
});
