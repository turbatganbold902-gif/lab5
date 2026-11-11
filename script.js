// Мобайл дээр навигацийн цэсийг нээх/хаах
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

toggle.addEventListener("click", function () {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);
  toggle.textContent = isOpen ? "✕" : "☰";
});