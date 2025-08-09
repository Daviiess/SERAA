import { cart, removeFromCart, saveToStorage, updateDeliveryOption } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./../utils/money.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { deliveryOptions } from "../data/deliveryOption.js";
import { renderPaymentSummary } from "./paymentSummary.js";
import { v4 as uuidv4 } from 'https://esm.sh/uuid';

/* import { returnOrder } from "../returnOrder.js"; */

//Using dayJs to get the date of arrival

 export function updatePaymentDelivery() {
  let payment = renderPaymentSummary();
  document.querySelector(".js-payment-summary").innerHTML = payment;
}
export function renderCartSection() {
  let cartHtml = "";
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    let matchingProduct; //code to access the product items from the cart
    products.forEach((product) => {
      if (productId === product.id) {
        matchingProduct = product;
      }
    });

    //To obtain the delivery id from the cart
    const deliveryOptionId = cartItem.deliveryId; //Obtaining the deliveryId of the cartItems //First one has 1 second 2 and others will have 1 at first
    let matchingDelivery;
    deliveryOptions.forEach((deliveryOption) => {
      if (deliveryOptionId === deliveryOption.deliveryId) {
        matchingDelivery = deliveryOption;
      }
    });
    const today = dayjs();
    const deliveryDate = today.add(matchingDelivery.deliveryDate, "days");
    const deliveryDateFormat = deliveryDate.format("dddd, MMMM D");

    cartHtml += `
        <div class="cart-item-container 
        js-cart-item-container-${matchingProduct.id}">
                <div class="Delivery-date">
            Delivery Date: ${deliveryDateFormat}
        </div>
            <div class="cart-item-details-grid">
                <div class="product-image">
                <img src="${matchingProduct.image}" alt="Tee - Black">
                </div>
                <div class="cart-details">
                <div class="product-name">${matchingProduct.name}</div>
                <div class="product-price">$${formatCurrency(
                  matchingProduct.priceCents
                )}</div>
                <div class="product-quantity">
                    Quantity: <span class="cart-number" data-update-id = "${matchingProduct.id}">${
                      cartItem.quantity
                    }</span>
                    <span class="link-primary js-update-link" data-update-id = "${matchingProduct.id}">Update</span>
                   
                    <span class="link-primary js-delete-link" data-delete-id = "${
                      matchingProduct.id
                    }">Delete</span>
                     <div class = "form-input" data-update-id = ${matchingProduct.id} > </div>
                    <div class = "save-btn" data-update-id = ${matchingProduct.id}></div>
                </div>
                </div>
                <div class="delivery-options">
                <div class="delivery-options-title">Choose a delivery option</div>
                
                
                    ${generateDeliveryOption(matchingProduct, cartItem)}
                    
                </div>
            </div>
            </div>
        `;
  });
  
  function generateDeliveryOption(matchingProduct, cartItem) {
    let html = "";
    //To check the option that is being selected
    deliveryOptions.forEach((deliveryOption) => {
      const isChecked = deliveryOption.deliveryId === cartItem.deliveryId;
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDate, "days");
      const deliveryDateFormat = deliveryDate.format("dddd, MMMM D");
      html += `
                
                    <div class="delivery-option js-delivery-option"
                        data-product-id = "${matchingProduct.id}"
                        data-delivery-id = "${deliveryOption.deliveryId}"
                    >
                    <input type="radio" name="delivery-${
                      matchingProduct.id
                    }" class="radio-btn" ${isChecked ? "checked" : ""} value="${
        deliveryOption.deliveryId
      }"
            data-product-id="${matchingProduct.id}"/>
                    <div>
                    <div class="delivery-option-date">${deliveryDateFormat}</div>
                    <div class="delivery-option-price">${
                      deliveryOption.priceCents === 0
                        ? "FREE"
                        : "$" + formatCurrency(deliveryOption.priceCents)
                    } - Shipping</div>
                    </div>
                </div>
            

                    `;
    });
    return html;
  }

  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector(".js-cart-count").innerHTML = cartQuantity;

  document.querySelector(".js-holder").innerHTML = cartHtml;


  //updating the cart
const updateBtn = document.querySelectorAll('.js-update-link');
updateBtn.forEach((button)=>{
const updateId = button.dataset.updateId;


button.addEventListener('click' , ()=>{
/* updateCart(updateId)
 */


const newInput = document.createElement('input');
const oldValue = document.querySelector(`.cart-number[data-update-id = "${updateId}"]`);
newInput.setAttribute('type' , 'number');
newInput.style.width = '50px'
const formContainer = document.querySelector(`.form-input[data-update-id="${updateId}"]`);
const saveDiv = document.querySelector(`.save-btn[data-update-id="${updateId}"]`);

  if (!formContainer) return; 
  formContainer.innerHTML = '';

formContainer.appendChild(newInput);
const Savebutton = document.createElement('button');

Savebutton.textContent = 'save';
if (!saveDiv) return;
saveDiv.innerHTML = '';

saveDiv.appendChild(Savebutton)
Savebutton.classList.add('save-btn');
Savebutton.addEventListener('click' , ()=>{
const cartItem = cart.find((cartItem)=> cartItem.productId === updateId);

const updatedValue = Number(newInput.value);
if(!updatedValue || updatedValue < 0){
    alert('cart quantity requires a valid value')
}else{
cartItem.quantity = updatedValue;
oldValue.textContent = updatedValue;
newInput.style.display = 'none'
Savebutton.style.display = 'none';


updatePaymentDelivery();
saveToStorage()
}
})





})


 
})
//Deleting the cart
  const deleteBtn = document.querySelectorAll(".js-delete-link");
  deleteBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const DeleteId = button.dataset.deleteId;
    
      removeFromCart(DeleteId);
      const delElement = document.querySelector(
        `.js-cart-item-container-${DeleteId}`
      );
      delElement.remove();
      updatePaymentDelivery();
      emptyCart();
    });
  });

  const jsDelOption = document.querySelectorAll(".js-delivery-option");
  jsDelOption.forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, deliveryId } = element.dataset;
      updateDeliveryOption(productId, deliveryId);
      renderCartSection();
      updatePaymentDelivery();
      emptyCart();
    });
  });
  function emptyCart(){
  if(cart.length === 0 || !cart){
    document.querySelector('.cart-header').innerHTML = ``;
    document.querySelector('.js-holder').innerHTML = 
    `
    <div class = "empty-cart">
    Your cart is empty
    </div>
    <div>
    <a href = "productSection.html" class = "empty-cart-link"> View Product</a>
    </div>

    `
  }

}
//Adding the eventListener for the returnOrder.js function
 let placeOrderBtn = document.querySelector('.place-order-button');
 
placeOrderBtn?.addEventListener('click' , (event)=>{
  event.preventDefault();
  if(cart.length === 0){
    alert('Empty cart')
  }else{
    const todays = dayjs();
  const savedDate = todays.format('MMMM D');
  const orderID = uuidv4();
  
  //getting the current cart.
  const currentCart = (JSON.parse(localStorage.getItem('cart'))) ||[];
  const newOrder = {
    id:orderID,
    date: savedDate,
    cart:currentCart
  }
  const existingOrders = (JSON.parse(localStorage.getItem('allOrders'))) || [];
 
  existingOrders.push(newOrder)
  localStorage.setItem('allOrders' , JSON.stringify(existingOrders));
  localStorage.setItem('latestOrderID' , orderID);
  cart.length = 0;
  saveToStorage();
  emptyCart();
  window.location.href = 'returnOrder.html';

  }
  
})
emptyCart();
}

updatePaymentDelivery();
