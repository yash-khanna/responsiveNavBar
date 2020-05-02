const $burger = document.querySelector(".burger");
console.log($burger);
const $navLinksContainer = document.querySelector(".nav-links-container");

$burger.onclick = () => {
    $navLinksContainer.classList.toggle("nav-clicked");
    $burger.classList.toggle('burger-clicked');
}