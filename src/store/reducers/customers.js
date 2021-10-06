import { SET_CUSTOMER } from '../actions/customers';
import Customer from '../../models/customer';

//js object 
const initialState = {
    customer: []
};

//func(oldstate, action) returns newstate
const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOMER:
        if(state.customer.length === 0){
            state.customer.push(action.customerId)
            return state
        } else if (state.customer.length === 1) {
            state.customer[0].id = action.customerId
            return state
        } else if (state.customer.length > 1){
            console.log("more than one customer selected")
            return initialState
        }     
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

export default customersReducer;