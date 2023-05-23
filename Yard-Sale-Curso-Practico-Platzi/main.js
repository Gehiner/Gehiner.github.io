const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleMenuDesktop);

function toggleMenuDesktop(){
    if(!aside.classList.contains("inactive")){
        aside.classList.toggle("inactive")
    } 
    if(!productDetailContainer.classList.contains("inactive")){
        productDetailContainer.classList.toggle("inactive")
    }
    desktopMenu.classList.toggle("inactive");
}

const buttonMobile=document.querySelector(".menu");
const menuMobile=document.querySelector(".mobile-menu");

buttonMobile.addEventListener("click", toggleMenuMobile);

function toggleMenuMobile(){
    if(!aside.classList.contains("inactive")){
        aside.classList.toggle("inactive")
    } 
    if(!productDetailContainer.classList.contains("inactive")){
        productDetailContainer.classList.toggle("inactive")
    }
    menuMobile.classList.toggle("inactive");
}


const menuCarrito=document.querySelector(".navbar-shopping-cart");
const aside =document.querySelector(".product-detail");

menuCarrito.addEventListener("click", toggleMenuCarrito);

function toggleMenuCarrito(){
    if(!menuMobile.classList.contains("inactive")){
        menuMobile.classList.toggle("inactive");
    }
    if(!desktopMenu.classList.contains("inactive")){
        desktopMenu.classList.toggle("inactive");
    } 
    if(!productDetailContainer.classList.contains("inactive")){
        productDetailContainer.classList.toggle("inactive")
    } 
    aside.classList.toggle("inactive")
}

const cardsContainer= document.querySelector(".cards-container")
const productList=[];

productList.push({
    name:"Bike",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

function renderProducts(arr){
    for(product of arr){
        const productCard= document.createElement("div");
        productCard.classList.add("product-card");
        const image=document.createElement("img");
        image.setAttribute("src", product.image);

        image.addEventListener("click", showProductDetail);

        const productInfo= document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerText= "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText= product.name;
    
        const productInfoFigure=document.createElement("figure");
        const productImgCart =document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(image);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}

for(let i = 0;i<15;i++){
    renderProducts(productList);
}

const productDetailContainer=document.querySelector(".product-details")
function showProductDetail(){
    if(!menuMobile.classList.contains("inactive")){
        menuMobile.classList.toggle("inactive");
    }
    if(!desktopMenu.classList.contains("inactive")){
        desktopMenu.classList.toggle("inactive");
    } 
    if(!aside.classList.contains("inactive")){
        aside.classList.toggle("inactive")
    } 

    productDetailContainer.classList.remove("inactive");
}

const iconCloseDetailProducts=document.querySelector(".product-details-close");
iconCloseDetailProducts.addEventListener("click", closeDetailProducts)

function closeDetailProducts(){
    productDetailContainer.classList.add("inactive");
}
