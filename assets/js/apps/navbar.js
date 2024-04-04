export function scrollNavbar() {
    let navbar = document.querySelector("nav");
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 0) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    };
}