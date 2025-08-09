import { cart, removeFromCart, updateDeliveryOption } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./../utils/money.js";

import { deliveryOptions } from "../data/deliveryOption.js";

export function renderPaymentSummary() {
 
  let html = "";
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

  html += `
                <div class="payment-summary-title">Order Summary</div>
        <div class="payment-summary-row">
          <div>Items: ${cart.length}</div>
          <div class="payment-summary-money">$
          ${formatCurrency(totalCostCents)}</div>
        </div>
        <div class="payment-summary-row">
          <div>Shipping &amp; handling:</div>
          <div class="payment-summary-money">$
          ${formatCurrency(totalDeliveryCents)}</div>
        </div>
         <hr class="hr-shipping">
        <div class="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div class="payment-summary-money">$
          ${formatCurrency(totalBeforeTax)}</div>
        </div>
        <div class="payment-summary-row">
          <div>Estimated tax (10%):</div>
          <div class="payment-summary-money">$
          ${formatCurrency(estimatedTax)}</div>
        </div>
         <hr class="hr-total">
        <div class="payment-summary-row total-row">
          <div class="order-total">Order total:</div>
          <div class="payment-summary-money">$
          ${formatCurrency(orderTotal)}</div>
        </div>
        <a  href = "#" class="place-order-button button-primary">Place your order</a>
            `;

  return html;
  

}
