// Dropdown JS
const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

open_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.add("visible"));
  open_btn.style.opacity = "0";
  document.body.style.overflow = 'hidden';
});

close_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.remove("visible"));
  open_btn.style.opacity = "1";
  document.body.style.overflow = 'visible';
});
