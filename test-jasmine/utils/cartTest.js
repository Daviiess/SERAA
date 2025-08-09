import { addToCart , cart } from "../../scripts/data/cart.js";
describe('Test suite: addToCart' , () => {
    it('adds an existing to the cart' , ()=>{

    })
    it('adds a new product to the cart' , () => {
        addToCart('product1');
        expect(cart.length).toEqual(1);
    })
})