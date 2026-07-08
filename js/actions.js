
const ADD_TO_CART = "cart/added";
const REMOVE_FROM_CART = "cart/removed";
const CALCULATE_TOTAL = "cart/calculateTotal";

function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    };
}


function removeFromCart(productId) {
    return {
        type: REMOVE_FROM_CART,
        payload: productId
    };
}


function calculateTotal() {
    return {
        type: CALCULATE_TOTAL
    };
}