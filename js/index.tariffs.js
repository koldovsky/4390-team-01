function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

const tariffsTitle = document.querySelector(".tariffs__title");
tariffsTitle.style.color = "blue";

const groupLinks = document.querySelectorAll(".tariffs__group-link");
const groups = document.querySelectorAll(".tariffs__group");

groupLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").substring(1);

    groups.forEach((group) => {
      if (group.id === targetId) {
        group.classList.remove("tariffs__group--hidden");
      } else {
        group.classList.add("tariffs__group--hidden");
      }
    });
  });
});
