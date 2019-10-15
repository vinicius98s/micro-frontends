<template>
  <Cart v-if="currentRoute === '/cart'" :cart="cart" :dispatch="dispatch" :total="total" />
</template>

<script>
import Cart from "./components/Cart.vue";
import useReducer from "../utils/useReducer";
import formatPrice from "../utils/formatPrice";
import routes from "../routes.js";

export default {
  data() {
    return {
      cart: [],
      dispatch: null,
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
    const [store, dispatch] = useReducer(this.updateCart, "cart");
    if (store.cart.length) {
      this.updateCart(store.cart);
    }
    this.dispatch = dispatch;
  }
};
</script>