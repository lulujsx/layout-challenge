document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        const title = category.querySelector('.category-title');
        const items = category.querySelector('.category-items');
        const icon = category.querySelector('.icon');

        title.addEventListener('click', () => {
            items.classList.toggle('active');

            // Cambiar la imagen cuando se activa/desactiva el toggle
            if (items.classList.contains('active')) {
                icon.src = "../assets/lop-academy-icon-minus.svg"; // Ruta de la nueva imagen
            } else {
                icon.src = "../assets/lop-academy-icon-plus.svg"; // Ruta de la imagen original
            }
        });
    });
});