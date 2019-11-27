import produce from "immer";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_PRODUCT_CART_AMOUNT
} from "../actions/cart";

const initialState = [];

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.product.id
        );

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1
          });
        }
      });
    case REMOVE_FROM_CART:
      return state.filter(product => product.id !== action.productId);
    case UPDATE_PRODUCT_CART_AMOUNT: {
      const { amount, id } = action.payload;

      if (amount <= 0) return state;

      return produce(state, draft => {
        const productIndex = draft.findIndex(product => product.id === id);

        if (productIndex >= 0) draft[productIndex].amount = Number(amount);
      });
    }

    default:
      return state;
  }
}
