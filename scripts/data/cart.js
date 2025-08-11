
export let cart;
loadFromStorage();
 export function loadFromStorage(){
    cart = JSON.parse(localStorage.getItem('cart'));
if(!cart){
    cart = [
{
    productId:'product1',
    quantity: 2,
    deliveryId:'1'
},
{
    productId:'product2',
    quantity:3,
    deliveryId: '2'
},
        ];
}
 }

export function saveToStorage(){ //saveToStorage
    localStorage.setItem('cart' , JSON.stringify(cart));
}

export function addToCart(button , productId){ //cart function for adding items into the cart section.
    let addCartIcon = document.querySelectorAll(`.item-added[data-product-id = "${productId}"]`);
    addCartIcon.forEach((icon)=>{
        
  icon.style.display = 'block';
  icon.style.opacity = '0';
  icon.style.transform = 'translateY(10px)';
  icon.style.transition = 'all 0.4s ease-in-out';

  // Trigger reflow so animation works
  void icon.offsetWidth;

  // Animate in
  icon.style.opacity = '1';
  icon.style.transform = 'translateY(0)';

  // After 1s, animate out
  setTimeout(() => {
    icon.style.opacity = '0';
    icon.style.transform = 'translateY(-10px)';
  }, 1000);

  // After fade-out, hide completely
  setTimeout(() => {
    icon.style.display = 'none';
  }, 1400);
    })
   
    const productContainer = button.closest('.products-card');
const selectNumber = productContainer.querySelector('.select-value-no');
const selectedQuantity = parseInt(selectNumber.value,10);

   let matchingItem;
    cart.forEach((cartItem)=>{
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    })
    if(matchingItem){
        matchingItem.quantity += selectedQuantity
    }else{
          cart.push({
        productId:productId,
        quantity:selectedQuantity,
        deliveryId : '1'
    });
    
    }
    saveToStorage();
}

export function removeFromCart(DeleteId){ //creating a new array to render without the id in the parameter
    const newCart = [];

    cart.forEach((cartItem)=>{
        if(cartItem.productId !== DeleteId){
            newCart.push(cartItem)
        }
    })
    cart = newCart;
    saveToStorage();
}

//Function to updateDeliveryOption
export function updateDeliveryOption(productId , deliveryId){
  let matchingItem;
    cart.forEach((cartItem)=>{
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });
    matchingItem.deliveryId = deliveryId;
    saveToStorage();
}

