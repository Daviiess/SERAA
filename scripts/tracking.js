import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { products } from "./data/products.js";
import { deliveryOptions } from "./data/deliveryOption.js";

const params = new URLSearchParams(window.location.search);
const orderID = params.get('id');
const productId = params.get('productID');

const allOrders = JSON.parse(localStorage.getItem('allOrders')) || [];
const order = allOrders.find(o => String(o.id) === String(orderID));
const product = products.find(p => p.id === productId);

const container = document.querySelector('.tracking-section-container');

// Defensive checks
if (!order || !product) {
  container.innerHTML = `<p>Order or product not found.</p>`;
  throw new Error("Order or product not found.");
}

const productCart = order.cart.find(p => product.id === p.productId);
if (!productCart) {
  container.innerHTML = `<p>Product not found in this order.</p>`;
  throw new Error("Product not found in this order.");
}

// Delivery calculation
const deliveryOption = deliveryOptions.find(opt => String(opt.deliveryId) === String(productCart.deliveryId));
const daysToAdd = deliveryOption ? Number(deliveryOption.deliveryDate) : 0;

const today = dayjs();
const deliveryDate = today.add(daysToAdd, 'day');
const deliveryDateFormat = deliveryDate.format('dddd, MMMM D');

// Build UI
container.innerHTML = `
  <div class="tracking-section">
    <div class="viewOrder-link">
      <a href="returnOrder.html" class="link">View all orders</a>
    </div>
    <div class="arrival-date">
      <h1 class="h1">Arrival on <span>${deliveryDateFormat}</span></h1>
      <p class="p">${product.name}</p>
      <p class="p">Quantity: ${productCart.quantity}</p>
    </div>
    <div class="tracking-image">
      <img src="${product.image}" alt="">
    </div>
    <div class="progress-tracker"></div>  
  </div>
`;

// Progress tracker logic
const stages = ['Order Placed', 'Shipped', 'Out for Delivery', 'Delivered'];
let daysToDelivery = deliveryDate.diff(today, 'day');

let currentStage;
if (daysToDelivery > 3) {
  currentStage = 1;
} else if (daysToDelivery > 2) {
  currentStage = 2;
} else if (daysToDelivery > 0) {
  currentStage = 3;
} else {
  currentStage = 4;
}

const trackerHTML = stages
  .map((stage, index) => {
    if (index + 1 < currentStage) return `<div class="stage completed">${stage}</div>`;
    if (index + 1 === currentStage) return `<div class="stage active">${stage}</div>`;
    return `<div class="stage">${stage}</div>`;
  })
  .join("");

document.querySelector(".progress-tracker").innerHTML = trackerHTML;
