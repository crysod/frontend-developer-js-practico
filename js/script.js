const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconMenuMobile = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

const productDetailCloseIcon = document.querySelector('.product-detail-close');

const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetail = document.querySelector('#productDetail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
iconMenuMobile.addEventListener('click',toggleMobileMenu);
navbarShoppingCart.addEventListener('click',toggleDetailcar);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu() {
    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    menuMobile.classList.toggle('inactive');
}
function toggleDetailcar() {
    if (!menuMobile.classList.contains('inactive')) {
        menuMobile.classList.add('inactive');
    }
    if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive');
    }
    if(!productDetail.classList.contains('inactive')){
        productDetail.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetail.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetail.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Mouse',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Compu',
    price: 2200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'keyboard',
    price: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'touch pad',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'table',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts(arr){
    for (product of arr) {
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
    
    
        const productImg=document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailAside);
    
        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv=document.createElement('div');
    
        const productPrice=document.createElement('p');
        productPrice.innerText='$'+product.price;
    
        const productName=document.createElement('p');
        productName.innerText=product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure=document.createElement('figure');
        const productImgCart=document.createElement('img');productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);