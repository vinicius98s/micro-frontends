<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th />
          <th>PRODUTO</th>
          <th>QUANTIDADE</th>
          <th>SUBTOTAL</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in cart" :key="product.id">
          <td>
            <img :src="product.image" :alt="product.title" />
          </td>
          <td>
            <strong>{{ product.title }}</strong>
            <span>{{ product.formattedPrice }}</span>
          </td>
          <td>
            <div>
              <button @click="decreaseProductAmount(product)">
                <ion-icon name="remove-circle-outline"></ion-icon>
              </button>
              <input type="number" readonly :value="product.amount" />
              <button @click="incrementProductAmount(product)">
                <ion-icon name="add-circle-outline"></ion-icon>
              </button>
            </div>
          </td>
          <td>
            <strong>{{ product.subtotal }}</strong>
          </td>
          <td>
            <button @click="onRemoveFromCart(product.id)">
              <ion-icon name="trash"></ion-icon>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <footer>
      <button>Finalizar pedido</button>
      <div>
        <span>TOTAL</span>
        <strong>{{ total }}</strong>
      </div>
    </footer>
  </div>
</template>

<script>
import { removeFromCart, updateAmount } from "../../store/actions/cart";

export default {
  props: {
    cart: Array,
    dispatch: Function,
    unsubscribe: Function,
    shouldUnsubscribe: Boolean,
    total: String
  },
  methods: {
    onRemoveFromCart(id) {
      this.dispatch(removeFromCart(id));
    },
    incrementProductAmount(product) {
      this.dispatch(updateAmount(product.id, product.amount + 1));
    },
    decreaseProductAmount(product) {
      this.dispatch(updateAmount(product.id, product.amount - 1));
    }
  },
  updated() {
    console.log(this.shouldUnsubscribe);
    if (this.shouldUnsubscribe) this.unsubscribe();
  }
};
</script>

<style lang="scss" scoped>
ion-icon {
  font-size: 24px;
  color: $purple;
}

.container {
  padding: 30px;
  background: $white;
  border-radius: 4px;

  table {
    width: 100%;

    thead th {
      color: #999;
      text-align: left;
      padding: 12px;
    }

    tbody td {
      padding: 12px;
      border-bottom: 1px solid #eee;

      button {
        background: none;
        border: 0;
      }
    }

    img {
      height: 100px;
    }

    strong {
      color: #333;
      display: block;
    }

    span {
      margin-top: 5px;
      font-size: 18px;
      font-weight: bold;
      display: block;
    }

    div {
      display: flex;
      align-items: center;

      input {
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #666;
        padding: 6px;
        width: 50px;
      }

      button {
        background: none;
        border: 0;
        padding: 6px;
      }
    }
  }

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: $purple;
      color: $white;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: darken($purple, 5%);
      }
    }

    div {
      display: flex;
      align-items: baseline;

      span {
        color: #999;
        font-weight: bold;
      }

      strong {
        font-size: 28px;
        margin-left: 5px;
      }
    }
  }
}
</style>