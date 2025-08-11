import { products } from "./data/products.js";
import { cart, addToCart } from "./data/cart.js";
import { formatCurrency } from "./utils/money.js";

function renderProductsList(products){
localStorage.getItem('cartNumber');
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
                    <img src= "images/ratings/rating-${product.rating.stars}.png" alt="">
                    <p>${product.rating.count}</p>
                    </div>
                    <div class="product-price">
                    <p class="product-text">$${formatCurrency(product.priceCents)}</p>
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

updateCartQuantity();
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

 function updateCartQuantity(){
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


//Code to implement search in the productSection
const headings = {
  menH1: document.querySelector('.Men-product-h1'),
  menP: document.querySelector('.Men-product-p'),
  latestH1: document.querySelector('.latest-products-h1'),
  latestP: document.querySelector('.product-info'),
  womenH1: document.querySelector('.Women-Product-h1'),
  womenP: document.querySelector('.Women-Product-p'),
  ceramicH1: document.querySelector('.ceramic-Product-h1'),
  ceramicP: document.querySelector('.ceramic-Product-p'),
  furnitureH1: document.querySelector('.furniture-Product-h1'),
  furnitureP: document.querySelector('.furniture-Product-p'),
};
const defaultTexts = {
  menP: headings.menP.innerHTML,
  latestP: headings.latestP.innerHTML,
  womenP: headings.womenP.innerHTML,
  ceramicP: headings.ceramicP.innerHTML,
  furnitureP: headings.furnitureP.innerHTML,
};

const noResultsEl = document.createElement('div');
noResultsEl.className = 'no-results-message';
noResultsEl.textContent = 'No products found';
noResultsEl.style.textAlign = 'center';
noResultsEl.style.padding = '2rem';
noResultsEl.style.fontSize = '1.2rem';
noResultsEl.style.fontWeight = '500';
noResultsEl.style.display = 'none'; 
document.querySelector('.productSection-container').appendChild(noResultsEl);
const searchInput = document.querySelector('.search-input'); 
searchInput.addEventListener('input' , ()=>{
  const query = searchInput.value.trim().toLowerCase();
  if(query === ''){
    headings.menH1.style.display = '';
    headings.latestH1.style.display = '';
    headings.womenH1.style.display = '';
    headings.ceramicH1.style.display = '';
    headings.furnitureH1.style.display = '';

    headings.menP.innerHTML = defaultTexts.menP;
    headings.latestP.innerHTML = defaultTexts.latestP;
    headings.womenP.innerHTML = defaultTexts.womenP;
    headings.ceramicP.innerHTML = defaultTexts.ceramicP;
    headings.furnitureP.innerHTML = defaultTexts.furnitureP;

    noResultsEl.style.display = 'none';
    renderProductsList(products);
    return;
  }
  
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
  console.log(filteredProducts);
  // Hide headings while searching
  headings.menH1.style.display = 'none';
  headings.latestH1.style.display = 'none';
  headings.womenH1.style.display = 'none';
  headings.ceramicH1.style.display = 'none';
  headings.furnitureH1.style.display = 'none';

  headings.menP.innerHTML = '';
  headings.latestP.innerHTML = '';
  headings.womenP.innerHTML = '';
  headings.ceramicP.innerHTML = '';
  headings.furnitureP.innerHTML = '';

  // Show "no results" if empty
  if (filteredProducts.length === 0) {
    noResultsEl.style.display = 'block';
  } else {
    noResultsEl.style.display = 'none';
  }

  renderProductsList(filteredProducts);




})