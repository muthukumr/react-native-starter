import { PRODUCTS } from '../../data/dummy-data';
import { TOGGLE_GREEN } from '../actions/products';

//js object 
const initialState = {
    products: PRODUCTS,
    cart: []
};

//func(oldstate, action) returns newstate
const productsReducer = (state = initialState, action) => {
    console.log("inside products reducer");
    console.log(action.products);
    console.log(action);
    console.log(state);
  switch (action.type) {
    case TOGGLE_GREEN:
      console.log("toggle green - product added to cart");
    //   const existingIndex = state.cart.findIndex(
    //     product => product.id === action.productId
    //   );
    //   if (existingIndex >= 0) {
    //     const updatedCart = [...state.cart];
    //     //delete item
    //     cart.splice(existingIndex, 1);
    //     return { ...state, cart: updatedCart };
    //   } else {
    //     const product = state.products.find(product => product.id === action.productId);
    //     return { ...state, cart: state.cart.concat(product) };
    //   }
    default:
      console.log("dispatcher called action !!!");
      console.log(action.productId);
      return state;
    // console.log("toggle green - product added to cart");
    //   const existingIndex = state.cart.findIndex(
    //     product => product.id === action.productId
    //   );
    //   if (existingIndex >= 0) {
    //     const updatedCart = [...state.cart];
    //     //delete item
    //     cart.splice(existingIndex, 1);
    //     return { ...state, cart: updatedCart };
    //   } else {
    //     const product = state.products.find(product => product.id === action.productId);
    //     return { ...state, cart: state.cart.concat(product) };
    //   }
  }
};

export default productsReducer;