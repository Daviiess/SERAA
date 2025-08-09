import { products } from "./data/products.js";
import { cart, addToCart } from "./data/cart.js";
import { formatCurrency } from "./utils/money.js";

function renderProductsList(products){

  const sections = {
  latest: document.querySelector(".latest-products-grid"),
  men: document.querySelector(".men-products-grid"),
  women: document.querySelector(".women-products-grid"),
  items: document.querySelector(".item-products-grid"),
  furniture: document.querySelector(".furniture-products-grid"),
};

  if (sections.latest) sections.latest.innerHTML = '';
  if (sections.men) sections.men.innerHTML = '';
  if (sections.women) sections.women.innerHTML = '';
  if (sections.items) sections.items.innerHTML = '';
  if (sections.furniture) sections.furniture.innerHTML = '';

JSON.parse(localStorage.getItem("cart"));

console.log(sections);
products.forEach((product) => {
  let html = `
        <div class="products-card">
                     
                <div class="product-image">
                    <img src="${product.image}" alt="">
                </div>
                <div class="products-name">
                    <p class="products-name-p">${product.name}</p>
                    </div>
                    <div class="product-rating">
                    <img src="${product.getStars()}" alt="">
                    <p>${product.rating.count}</p>
                    </div>
                    <div class="product-price">
                    <p class="product-text">$${product.getPrice()}</p>
                    </div>
                    <div class="select-container">
                    <select name="select-value" class = 'select-value-no'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                    </div>
                    <div class = "item-added" data-product-id = "${product.id}"> <i class="fa-duotone fa-solid fa-circle-check"></i> added </div>
                    <div class="button-container">
                        <button class="add-to-cart js-add-to-cart" data-product-id = "${
                          product.id
                        }">Add to Cart</button>
                    </div>
                    </div>
    `;

  //  <img src="images/ratings/rating-10.png" alt="">
  if (product.section === "latest") {
    sections.latest.innerHTML += html;
  } else if (product.section === "men") {
    sections.men.innerHTML += html;
  } else if (product.section === "women") {
    sections.women.innerHTML += html;
  } else if (product.section === "items") {
    sections.items.innerHTML += html;
  } else if (product.section === "furniture") {
    sections.furniture.innerHTML += html;
  }
});

function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector(".js-cart-count").innerHTML = cartQuantity;
}


const addToCartBtn = document.querySelectorAll(".js-add-to-cart");
addToCartBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    addToCart(button, productId);
    updateCartQuantity();
  });
});
}
renderProductsList(products);
const searchInput = document.querySelector('.search-input'); 
searchInput.addEventListener('input' , ()=>{
  const query = searchInput.value.trim().toLowerCase();
  if(query === ''){
    renderProductsList(products);
    return;
  }
  
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));

  renderProductsList(filteredProducts);

  let a =document.querySelector('.Men-product-h1');
  document.querySelector('.Men-product-p').innerHTML = '';
  let b = document.querySelector('.latest-products-h1');
  document.querySelector('.product-info').innerHTML = '';
  let c = document.querySelector('.Women-Product-h1');
  document.querySelector('.Women-Product-p').innerHTML = '';
  let d = document.querySelector('.ceramic-Product-h1');
  document.querySelector('.ceramic-Product-p').innerHTML = '';
  let e = document.querySelector('.furniture-Product-h1');
  document.querySelector('.furniture-Product-p').innerHTML = '';
a.style.display = 'none'
b.style.display = 'none'
c.style.display = 'none'
d.style.display = 'none'
e.style.display = 'none';


})