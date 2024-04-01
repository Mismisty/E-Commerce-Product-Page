
  
let slideIndex = 1;
showSlide(slideIndex);

function openLightbox() {
  document.getElementById('Lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('Lightbox').style.display = 'none';
}

function changeSlide(n) {
	showSlide(slideIndex += n);
}

function toSlide(n) {
	showSlide(slideIndex = n);
}

function showSlide(n) {

  const slides = document.getElementsByClassName('slide');
 

  if (n > slides.length) {
    slideIndex = 1;	
  }
  
  if (n < 1) {
  	slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
 
  
  slides[slideIndex - 1].style.display = 'block';
 // modalPreviews[slideIndex - 1].className += 'active';
};


/**
 * !TO INCREMENT AND DECREMENT PLUS AND MINUS BUTTONS
 */

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const btnQuantity = document.querySelector("#btnQuantity");

plus.addEventListener("click", productCounterPlus);

minus.addEventListener("click", productCounterMinus);

function productCounterPlus(){
  //console.log(productCounterValue);
  setbtnQuantity(1);
}

function productCounterMinus(){
  setbtnQuantity(-1);
 // console.log(productCounterValue);
}

function setbtnQuantity(value){
  if((btnQuantityValue + value) >= 0){
      btnQuantityValue += value;
      btnQuantity.innerHTML = btnQuantityValue;
  }
}




/**
 * !TO ADD TO SHOPPING CART
 */

let btnQuantityValue = 0;
let productsInCart = 0;
let price = 250.00;
let discount = 0.5;

const addToCartBtn = document.querySelector(".button");
const cartCount = document.querySelector(".cart-amount");
const quantity = document.querySelector(".quantity");

const productInShoppingCart = document.querySelector(".products");


addToCartBtn.addEventListener("click", addToCart);



function addToCart(){
  productsInCart += btnQuantityValue;

  const productHTMLElement = `
    <div class="flex-fall">
      <img src="images/image-product-1-thumbnail.jpg" width="50px">
      <p class="fall-limited">Fall Limited Edition Sneakers</p>
      <span class="delete"><img src="images/icon-delete.svg"></span>
    </div>
     <p class="price">$${price*discount} x <span id="upperBtn"  class="quantity">${productsInCart}</span> <span id="totalPrice">$${price*discount*productsInCart}</span>
     </p>
     <button class="checkout" type="submit">Checkout</button>
     
  `;

  productInShoppingCart.innerHTML = productHTMLElement;

  updateCart();

  const btnDelete = document.querySelector(".delete");


  btnDelete.addEventListener("click", deleteClicked);
 
 // console.log(productsInCart);
}


function updateCart(){
    updateCartIcon();
    updateMsgEmpty();
   
}

function updateCartIcon(){
  cartCount.textContent = productsInCart;
 
 if(productsInCart == 0){
  if(!cartCount.classList.contains("hidden")){
        cartCount.classList.add("hidden");
    }
 }else{
  cartCount.classList.remove("hidden");
 }
}

const msgEmpty = document.querySelector('.cart-empty');
const cartCard = document.querySelector('.cart-card');



  function updateMsgEmpty(){
    if(productsInCart == 0){
      if(msgEmpty.classList.contains('hidden')){
         msgEmpty.classList.remove('hidden');
      }
    } else{
      if(!msgEmpty.classList.contains('hidden')){
          msgEmpty.classList.add('hidden');
      }
    }
  }

 


/**
 * !FUNCTION TO DELETE ITEM
 */

function deleteClicked() {
  productsInCart--;
  updateCart();


  const remove = document.querySelector("#upperBtn");
  const totalPrice = document.querySelector("#totalPrice");

  remove.innerHTML = productsInCart;
  totalPrice.innerHTML = `$${price*discount*productsInCart}`;

  if(productsInCart == 0){
    cartFilled.classList.toggle('hidden');{
      cartCard.style.display = 'block';
    }
   // productInShoppingCart.innerHTML = '';
    
  }
}



/**
 * !TO HIDE AND SHOW THE FILLED CART
 */

const cartFilled = document.querySelector(".cart-filled");
const btnCart = document.querySelector(".cart");

btnCart.addEventListener('click', openCart);

function openCart(){
  console.log(btnCart);
  cartFilled.classList.toggle('hidden');
}





/**
 * ! to open and close side-menu
 */

 let  open = document.getElementById("open"),
      close = document.getElementById("close-icon"),
      mobileModal = document.getElementById("mobileModal"),
      menu = document.getElementById("primary-nav");

     
    common = (x,y,z)=>{
      x.addEventListener("click",()=>{
          x.classList.toggle("hide");
          y.classList.toggle("hide");
  
          if(z == "slide-in"){
              menu.classList.toggle("slide1");
              mobileModal.style.display = "block";
          }
  
          if(z == "slide-out"){
              menu.classList.toggle("slide1");
              mobileModal.style.display = "none";
          }
      });
  };
  
  common(open,close, "slide-in");
  common(close,open, "slide-out");
  







