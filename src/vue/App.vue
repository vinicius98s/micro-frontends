<template>
  <Cart
    :shouldUnsubscribe="currentRoute !== '/cart'"
    :unsubscribe="unsubscribe"
    :cart="cart"
    :dispatch="dispatch"
    :total="total"
  />
</template>

<script>
import Cart from "./components/Cart.vue";
import useRedux from "../utils/useRedux";
import formatPrice from "../utils/formatPrice";
import routes from "../routes.js";

export default {
  data() {
    return {
      cart: [],
      dispatch: null,
      unsubscribe: null,
      total: formatPrice(0),
      currentRoute: routes.currentRoute()
    };
  },
  methods: {
    updateCart(cart) {
      this.cart = cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount)
      }));

      this.total = formatPrice(
        cart.reduce(
          (total, product) => total + product.price * product.amount,
          0
        )
      );
    }
  },
  components: {
    Cart
  },
  created() {
    const { state, dispatch, unsubscribe } = useRedux(this.updateCart, "cart");
    if (state.cart.length) {
      this.updateCart(state.cart);
    }
    this.dispatch = dispatch;
    this.unsubscribe = unsubscribe;
  },
  updated() {
    console.log("UPDATED");
  }
};
</script>