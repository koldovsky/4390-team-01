const headerTitle = document.querySelector('.about-udrive__title');
const colors = ["red", "blue", "green", "orange", "purple", "teal", "magenta"];

function setRandomColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    headerTitle.style.color = randomColor;
}

setRandomColor();
setInterval(setRandomColor, 1000);

const clockContainer = document.querySelector('.about__clock-container');

function updateClock() {
    const now = new Date();
    clockContainer.innerText = now.toLocaleTimeString('uk-UA');
}

setInterval(updateClock, 1000);