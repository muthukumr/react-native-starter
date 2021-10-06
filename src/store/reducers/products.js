import { PRODUCTS } from '../../data/dummy-data';
import { TOGGLE_GREEN, ADD_VALUE_TO_STORE } from '../actions/products';
import { RESET } from '../actions/products';
import Product from '../../models/product';

//js object 
const initialState = {
    products: PRODUCTS,
    quantity: [],
    cart: []
};

var flag = true;
//func(oldstate, action) returns newstate
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_GREEN:
        const set = new Set(state.cart.map(item => JSON.stringify(item)));
        const dedup = [...set].map(item => JSON.parse(item));
        console.log(`Removed ${state.cart.length - dedup.length} elements`);
        console.log(dedup); 
        console.log("TOGGLE_GREEN called.. state.cart is ", state.cart);
        
        console.log("CART LENGTH is ", state.cart.length);
        if(state.cart.length > 0){
            console.log("cart length gt 0")
            const existingIndex = state.cart.findIndex(product => product.id === action.productId);
            console.log("existing index are ", existingIndex)
            console.log(state.cart[existingIndex]);
             if( existingIndex >= 0 ){
                console.log("product already exists, updating the cart")
                state.cart[existingIndex].quantity = action.quantity;
                console.log(state.cart);
                return (state);
             } else {
                const product = new Product(action.productId, action.quantity, action.amount); 
                console.log("adding product to the cart");
                state.cart.push(product);
                console.log(state.cart);
                return (state);
            }
        } else {
            const product = new Product(action.productId, action.quantity, action.amount); 
            console.log("adding product to the cart");
            state.cart.push(product);
            console.log(state.cart);
            return (state);
        }
        
    case ADD_VALUE_TO_STORE:
      console.log("adding value to store ", action.id, action.value);
    case RESET:
      console.log("case reset - returned initial state ...");  
      console.cart("returning initial state - cart is empty ", initialState.cart);
      return (initialState);  
    default:
      console.log("dispatcher called action !!!");
      return (state);
    //   return (initialState);  
  }
};

export default productsReducer;