
import { deliveryOptions } from './data/deliveryOption.js';
import { products } from './data/products.js';
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { formatCurrency } from './utils/money.js';
import { v4 as uuidv4 } from 'https://esm.sh/uuid';
import { addToCart } from './data/cart.js';


let cart = JSON.parse(localStorage.getItem('cart'));//Displaying the cart quantity
updateCartQuantity();
 function updateCartQuantity(){
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector(".js-cart-count").innerHTML = cartQuantity;
  
}
updateCartQuantity();


    const allOrders = JSON.parse(localStorage.getItem('allOrders')) || [];
    const latestOrderID = localStorage.getItem('latestOrderID');
    const latestOrder = allOrders.find((order)=> order.id === latestOrderID);

    const jsContainer = document.querySelector('.js-container');
    jsContainer.innerHTML = '';
    let allOrdersHtml = '';
    allOrders.forEach((order)=>{
          let cart = order.cart;
    const orderID = order.id;
    const savedDate = order.date;  


       let totalCostCents = 0;
  let totalDeliveryCents = 0;

  cart.forEach((cartItem) => {
    let matchingItem = products.find(
      (product) => product.id === cartItem.productId
    );
    let deliveryOption = deliveryOptions.find(
      (deliveryOption) => deliveryOption.deliveryId === cartItem.deliveryId
    );

    totalDeliveryCents += deliveryOption.priceCents;
    totalCostCents += matchingItem.priceCents * cartItem.quantity;
  });
  let totalBeforeTax = totalCostCents + totalDeliveryCents;
  let estimatedTax = totalBeforeTax * 0.1;
  let orderTotal = totalBeforeTax + estimatedTax;

let orderMainHtml = '';


  let htmlHeader = `
            <div class="orders-header">
                            <div class="left-section">
                                <div class="order-date">
                               <p class = "firstP">Orders Placed:</p>
                                <p class = "secondP">${savedDate}</p>
                                </div>
                                <div class="order-total">
                                    <p>Total:</p>
                                    <p class = "total-p">$${formatCurrency(orderTotal)}</p>
                                </div>
                            </div>
                            <div class="right-section">
                                <div class="order-id">
                                    <p>order ID:</p>
                                    <p class="id-No">${orderID}</p>
                                </div>
                            </div>
                        </div>
    `
 
let htmlOrders = '';

 cart.forEach((cartItem)=>{

    let deliveryDateObject = deliveryOptions.find((deliveryOption)=> deliveryOption.deliveryId === cartItem.deliveryId)
    let matchingProduct = products.find((product)=> product.id === cartItem.productId );

    const today = dayjs()
        const deliveryDate = today.add(deliveryDateObject.deliveryDate, "days");
        const deliveryDateFormat = deliveryDate.format("dddd, MMMM D");
      
 htmlOrders += `
     <div class="order-main">
                            
                        <div class="order-main-left">
                            <div class="order-image">
                                <img src="${matchingProduct.image}" alt="">
                            </div>
                            <div class="order-main-details">
                                <div class="order-main-productName">                         
                                    ${matchingProduct.name}
                                </div>
                                <div class="order-arrival-quantity">
                                    <p>Arriving on: <span>${deliveryDateFormat}</span></p>
                                    <p>Quantity:${cartItem.quantity}</p>
                                </div>
                                <div class="buy-again-button">
                                    <button class = "buy-again" data-product-id = "${matchingProduct.id}"><i class="fa-solid fa-arrows-spin"></i> Buy it again </button>
                                </div>
                            </div>
                        </div>
                        
                            <div class="right-order-main">
                                <button class = 'tracker' data-track-id = "${orderID}" data-product-ids = "${cartItem.productId}">Track Package</button>
                            </div>
                        </div>
    `
  
});

 // Clear existing content
allOrdersHtml += `
  <div class="single-order" style="margin-bottom: 40px;">
    ${htmlHeader}
    ${htmlOrders}
  </div>
`

 })
 jsContainer.innerHTML = allOrdersHtml;
const buyAgain = document.querySelectorAll('.buy-again');
buyAgain.forEach((button)=>{
  button.addEventListener('click' , ()=>{
    const productId = button.dataset.productId;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
   let cartItem = cart.find((cartItems)=>{
    
      return cartItems.productId === productId;
    })
    if(cartItem){
      cartItem.quantity+=1;
      updateCartQuantity()
    }
    else{
      cart.push({
        productId:productId,
        quantity:1,
        deliveryId:'1',
      })
    }
    localStorage.setItem('cart' , JSON.stringify(cart));
    
    
  })
})

let trackBtn = document.querySelectorAll('.tracker');

trackBtn.forEach((button)=>{
  button.addEventListener('click' , ()=>{
    const trackID = button.dataset.trackId;
    const productId = button.dataset.productIds;
   window.location.href = `tracking.html?id=${trackID}&productID=${productId}`
    
  })
})
