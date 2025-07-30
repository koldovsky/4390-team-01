const form = document.getElementById("contact-formID");
const submitBtn = document.getElementById("submit-btn");

// 1. Слухаємо зміну полів (робимо кнопку активною, коли форма валідна)
form.addEventListener("input", () => {
  if (form.checkValidity()) {
    submitBtn.disabled = false;
    submitBtn.classList.add("active");
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.remove("active");
  }
});

