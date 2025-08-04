const headerIntro = document.querySelector('.about-udrive__intro');

const greetings = ["Вітаю!", "Привіт!", "Hello!", "Салют!", "Добрий день!"];

function setRandomGreeting() {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    headerIntro.innerText = randomGreeting;
}

setRandomGreeting();
setInterval(setRandomGreeting, 1000);
