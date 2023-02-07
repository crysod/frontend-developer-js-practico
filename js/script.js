const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconMenuMobile = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);
iconMenuMobile.addEventListener('click',toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu() {
    menuMobile.classList.toggle('inactive')
}