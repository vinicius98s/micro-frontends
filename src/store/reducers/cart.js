import { ADD_TO_CART } from "../actions/cart";

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.product];
    default:
      return state;
  }
}
