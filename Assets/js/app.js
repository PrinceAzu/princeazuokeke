const mainMenu = document.querySelector(".navbar");
const closeMenu = document.querySelector(".nav-close");
const openMenu = document.querySelector(".nav-open");



openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
    mainMenu.style.display = "block";
    mainMenu.style.left = "0";

    openMenu.style.display = "none"
    closeMenu.style.display = "block"
}

function close() {
    mainMenu.style.left = "-200px";

    closeMenu.style.display = "none"
    openMenu.style.display = "block"
}