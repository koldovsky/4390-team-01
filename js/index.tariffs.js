document.addEventListener("DOMContentLoaded", () => {
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
});
