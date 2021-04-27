const menuMobileBtn = document.querySelector("#menu-mobile-btn")
const navbarNav = document.querySelector("#navbar-nav")
let isVisible = false

menuMobileBtn.onclick = function () {
    isVisible = !isVisible
    if (isVisible) {
        navbarNav.style.display = "block"
    } else {
        navbarNav.style.display = "none"
    }

}
