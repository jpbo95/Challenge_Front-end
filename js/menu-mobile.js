// Menu mobile

let barras = document.querySelector("#img-barras");
let menuMobile = document.querySelector(".menu-navegacao");
let fechar = document.querySelector("#img-fechar");

barras.addEventListener("click", () => {
    barras.style.display = "none";
    menuMobile.style.display = "inline";
    fechar.style.display = "inline";
});

fechar.addEventListener("click", () => {
    fechar.style.display = "none";
    menuMobile.style.display = "none";
    barras.style.display = "inline";
});