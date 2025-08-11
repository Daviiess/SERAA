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

  document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu");
  const navLinks = document.querySelector(".header-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
