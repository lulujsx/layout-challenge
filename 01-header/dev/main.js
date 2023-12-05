const mobile_nav = document.querySelector("#mobile-nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    mobile_nav.classList.add("visible");
})

close.addEventListener("click", () => {
    mobile_nav.classList.remove("visible");
})