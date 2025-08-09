/* class Cart{
    cartItems;
    #localStorageKey;

    constructor(localStorageKey){
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }
      #loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
if(!this.cartItems){
    this.cartItems = [
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
   saveToStorage(){
    localStorage.setItem(this.#localStorageKey , JSON.stringify(this.cartItems));
}

 addToCart(button , productId){ //cart function for adding items into the cart section.
    const productContainer = button.closest('.products-card');
const selectNumber = productContainer.querySelector('.select-value-no');
const selectedQuantity = parseInt(selectNumber.value,10);

   let matchingItem;
    this.cartItems.forEach((cartItem)=>{
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    })
    if(matchingItem){
        matchingItem.quantity += selectedQuantity
    }else{
          this.cartItems.push({
        productId:productId,
        quantity:selectedQuantity,
        deliveryId : '1'
    });
    
    }
    this.saveToStorage();
}


 removeFromCart(DeleteId){ //creating a new array to render without the id in the parameter
    const newCart = [];

    this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId !== DeleteId){
            newCart.push(cartItem)
        }
    })
    this.cartItems = newCart;
    this.saveToStorage();
}
 updateDeliveryOption(productId , deliveryId){
  let matchingItem;
    this.cartItems.forEach((cartItem)=>{
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });
    matchingItem.deliveryId = deliveryId;
    this.saveToStorage();
}

}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

console.log(cart);
console.log(businessCart);





//Function to updateDeliveryOption

 */