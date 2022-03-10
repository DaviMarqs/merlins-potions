const btnOpenHamburguer = document.getElementById("hamburguer-icon")
const btnCloseHamburguer = document.getElementById("closeHamburguer");
const menuHamburguer = document.getElementById("menu-hamburguer")


function closeMenu() {
    menuHamburguer.style.display = "none";
}

function openMenu() {
    menuHamburguer.style.display = "block";
}
