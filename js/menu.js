const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-hidden");
const link = document.querySelector(".header__link");
const closeBtn = document.querySelector(".header__close");

const toggleMenu = () => {
  menu.classList.toggle("header__menu");
  menu.classList.toggle("header__hidden");
  link.classList.toggle("active");
};

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
