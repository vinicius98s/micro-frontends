export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_PRODUCT_CART_AMOUNT = "UPDATE_PRODUCT_CART_AMOUNT";

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product
  };
}

export function removeFromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    productId
  };
}

export function updateAmount(id, amount) {
  return {
    type: UPDATE_PRODUCT_CART_AMOUNT,
    payload: {
      id,
      amount
    }
  };
}
