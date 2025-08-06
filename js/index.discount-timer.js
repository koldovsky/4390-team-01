const TIMER_START_KEY = "discount-timer-start";

let startDate = localStorage.getItem(TIMER_START_KEY);

if (!startDate) {
  startDate = new Date().toISOString();
  localStorage.setItem(TIMER_START_KEY, startDate);
}

const deadline = new Date(startDate);
deadline.setDate(deadline.getDate() + 7);

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = deadline - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const numbers = document.querySelectorAll(".discount-timer__number");
  if (numbers.length >= 4) {
    numbers[0].textContent = String(Math.max(days, 0)).padStart(2, "0");
    numbers[1].textContent = String(Math.max(hours, 0)).padStart(2, "0");
    numbers[2].textContent = String(Math.max(minutes, 0)).padStart(2, "0");
    numbers[3].textContent = String(Math.max(seconds, 0)).padStart(2, "0");
  }

  if (distance <= 0) {
    clearInterval(countdown);
  }
}, 1000);
