const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLinks = document.querySelectorAll('.navbar__links, .button')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('is-active')
        menuLinks.classList.remove('active')
    })
})