const groupLinks = document.querySelectorAll(".tariffs__group-link");
  const groups = document.querySelectorAll(".tariffs__group");

  // Встановити початковий стан - показати перший тариф, приховати інші
  groups.forEach((group, index) => {
    group.classList.toggle("tariffs__group--hidden", index !== 0);
  });

  // Додати активний клас першому посиланню
  groupLinks.forEach((link, index) => {
    if (index === 0) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  groupLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);

      groups.forEach((group) => {
        group.classList.toggle("tariffs__group--hidden", group.id !== targetId);
      });

      groupLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });