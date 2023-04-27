console.log();

let menu = document.querySelector(".menu");
let menu_btn = document.querySelector(".menu_btn");
let bodyOverflow = document.querySelector("body");
let coverBlackOut = document.querySelector(".cover");
let navLinks = document.querySelector(".menu_links");

function addClassToMenu() {
  let windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    menu.classList.add("closed");
  }
}
addClassToMenu();
window.addEventListener("resize", addClassToMenu);
menu_btn.addEventListener("click", menuBtnHandler);
function menuBtnHandler() {
  if (menu.classList.contains("closed")) {
    menu.classList.remove("closed");
    menu.classList.add("opened");
    menu_btn.classList.add("menu_btn--opened");
    bodyOverflow.classList.toggle("body--overflow");
    coverBlackOut.classList.toggle("cover--blackout");
  } else {
    menu.classList.remove("opened");
    menu.classList.add("closed");
    menu_btn.classList.remove("menu_btn--opened");
    bodyOverflow.classList.toggle("body--overflow");
    coverBlackOut.classList.toggle("cover--blackout");
  }
}
coverBlackOut.addEventListener("click", linksHandler);
navLinks.addEventListener("click", linksHandler);
function linksHandler() {
  if (menu.classList.contains("opened")) {
    menu.classList.remove("opened");
    menu.classList.add("closed");
    menu_btn.classList.remove("menu_btn--opened");
    bodyOverflow.classList.toggle("body--overflow");
    coverBlackOut.classList.toggle("cover--blackout");
  }
}
