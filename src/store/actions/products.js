export const TOGGLE_GREEN = 'TOGGLE_GREEN';
export const TOGGLE_GREY = 'TOGGLE_GREY';

export const toggleGreen = (id) => {
    return { 
        type: TOGGLE_GREEN, 
        productId: id 
    };
};

export const toggleReset = (id) => {
    return { 
        type: TOGGLE_GREY, 
        productId: id 
    };
};