import produce from "immer";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_PRODUCT_CART_AMOUNT
} from "../actions/cart";

const initialState = [
  {
    id: 1,
    amount: 10,
    title: 'YEEZY BOOST 350 V2 "BLACK NON-REFLECTIVE"',
    price: 395,
    image:
      "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/1/4/143710_01.jpg"
  },
  {
    id: 2,
    amount: 10,
    title: 'AIR JORDAN 4 RETRO "PURE MONEY"',
    price: 520,
    image:
      "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/800830_1.jpg"
  },
  {
    id: 3,
    amount: 10,
    title: "YEEZY BOOST 350 V2",
    price: 1175,
    image:
      "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/800389_1.jpg"
  },
  {
    id: 5,
    amount: 10,
    title: 'AIR JORDAN 1 RETRO HIGH OG GS "OBSIDIAN"',
    price: 355,
    image:
      "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/1/5/152180_01.jpg"
  },
  {
    id: 4,
    amount: 10,
    title: 'YEEZY BOOST 700 "WAVE RUNNER"',
    price: 490,
    image:
      "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/802501_01.jpg"
  },
  {
    id: 6,
    amount: 10,
    title: 'THE 10: AIR JORDAN 1 "OFF-WHITE"',
    price: 8500,
    image:
      "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/801781_01.jpg"
  }
];

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
