export const TOGGLE_GREEN = 'TOGGLE_GREEN';
export const TOGGLE_GREY = 'TOGGLE_GREY';
export const ADD_VALUE_TO_STORE = 'ADD_VALUE_TO_STORE';

export const RESET_CART = 'RESET';

export const resetCart = () => {
    console.log("resetting the cart");
    return { 
        type: RESET_CART, 
    };
};

export const toggleGreen = (id) => {
    console.log("dispatcher called toggleGreen !!!");
    return { 
        type: TOGGLE_GREEN, 
        productId: id 
    };
};

export const toggleReset = (id) => {
    console.log("dispatcher called toggleReset !!!");
    return { 
        type: TOGGLE_GREY, 
        productId: id 
    };
};

export const addValueToStore = (id, value) => {
    console.log("dispatcher called addValueToStore !!!");
    return { 
        type: ADD_VALUE_TO_STORE, 
        id: id,
        value: value, 
    };
};