//header
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", () => {
    const shopNowBtn = document.querySelector(".shop-now");

    shopNowBtn.addEventListener("click", () => {
        shopNowBtn.classList.toggle("variant");
    });
});
