const groupLinks = document.querySelectorAll(".tariffs__group-link");
const groups = document.querySelectorAll(".tariffs__group");
const svgPlaceholders = document.querySelectorAll(".tariffs__svg-placeholder");

// Початковий стан
groups.forEach((group, index) => {
  group.classList.toggle("tariffs__group--hidden", index !== 0);
});

groupLinks.forEach((link, index) => {
  if (index === 0) {
    link.classList.add("active");
    const targetClass = link.getAttribute("href").substring(1);
    const svgPlaceholder = document.querySelector(`.tariffs__svg-placeholder[data-class="${targetClass}"]`);
    svgPlaceholder.innerHTML = `<img src="${link.dataset.divider}" alt="divider" />`;
  } else {
    link.classList.remove("active");
  }
});

// Подія кліку
groupLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    const svgUrl = link.dataset.divider;

    // Показуємо потрібний тариф
    groups.forEach((group) => {
      group.classList.toggle("tariffs__group--hidden", group.id !== targetId);
    });

    // Оновлюємо активне посилання
    groupLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // Показуємо SVG тільки під вибраним класом
    svgPlaceholders.forEach((svg) => {
      const isActive = svg.dataset.class === targetId;
      svg.innerHTML = isActive ? `<img src="${svgUrl}" alt="divider" />` : "";
    });
  });
});
