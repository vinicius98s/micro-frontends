export const ADD_TO_CART = "ADD_TO_CART";
export const DECREASE_COUNTER = "DECREASE_COUNTER";

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product
  };
}

export function decreaseCounter(value) {
  return {
    type: DECREASE_COUNTER,
    value
  };
}
