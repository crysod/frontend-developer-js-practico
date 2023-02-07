const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconMenuMobile = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu);
iconMenuMobile.addEventListener('click',toggleMobileMenu);
navbarShoppingCart.addEventListener('click',toggleDetailcar);

function toggleDesktopMenu() {
    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');
}
function toggleDetailcar() {
    if (!menuMobile.classList.contains('inactive')) {
        menuMobile.classList.add('inactive');
    }
    if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive');
    }
    productDetail.classList.toggle('inactive');
}