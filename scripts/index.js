/* import { cart } from "./data/cart.js"; */
let cart = JSON.parse(localStorage.getItem('cart'));
updateCartQuantity();
 function updateCartQuantity(){
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector(".js-cart-count").innerHTML = cartQuantity;
  
}
updateCartQuantity();

//Mobile responsiveness
