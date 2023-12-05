const mobile_nav = document.querySelector("#mobile-nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    mobile_nav.classList.add("visible");
})

close.addEventListener("click", () => {
    mobile_nav.classList.remove("visible");
})

document.addEventListener('DOMContentLoaded', function () {
    var navCategory = document.querySelector('.nav-category-first');
    var navMegamenu = document.querySelector('.nav-megamenu');

    // Maneja el evento de hover
    navCategory.addEventListener('mouseenter', function () {
        navMegamenu.style.display = 'block';
    });

    // Maneja el evento cuando se sale del hover
    navMegamenu.addEventListener('mouseleave', function () {
        navMegamenu.style.display = 'none';
    });
});