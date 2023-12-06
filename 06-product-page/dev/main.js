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

    // Menu functionality
    const navCategory = document.querySelector('.nav-category-first');
    const navMegamenu = document.querySelector('.nav-megamenu');

    // Maneja el evento de hover
    navCategory.addEventListener('mouseenter', function () {
        navMegamenu.style.display = 'block';
    });

    // Maneja el evento cuando se sale del hover
    navMegamenu.addEventListener('mouseleave', function () {
        navMegamenu.style.display = 'none';
    });

    // Footer functionality
    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        const title = category.querySelector('.category-title');
        const items = category.querySelector('.category-items');
        const icon = category.querySelector('.icon');

        title.addEventListener('click', () => {
            items.classList.toggle('active');

            if (items.classList.contains('active')) {
                icon.src = "../assets/svg/lop-academy-icon-minus-white.svg"; // Ruta de la nueva imagen
            } else {
                icon.src = "../assets/svg/lop-academy-icon-plus-white.svg"; // Ruta de la imagen original
            }
        });
    });
});