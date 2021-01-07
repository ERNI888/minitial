function menuToggle() {
    let hamburgerMenu = document.querySelector(".hamburger")
    let dropMenu = document.querySelector(".drop-menu")
    hamburgerMenu.classList.toggle("is-active")
    dropMenu.classList.toggle("menu-active")
}