export const SET_CUSTOMER = 'SET_CUSTOMER';

export const setCustomer = () => {
    console.log("resetting the cart");
    return { 
        type: SET_CUSTOMER,
        customerId: id 
    };
};