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
        <tr>
          <td>
            <img
              src="https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/1/4/143710_01.jpg"
              alt="Yeezy boost 350"
            />
          </td>
          <td>
            <strong>Yeezy Boost 350</strong>
            <span>R$ 2.000,00</span>
          </td>
          <td>
            <div>
              <button>
                <ion-icon name="remove-circle-outline"></ion-icon>
              </button>
              <input type="number" readonly :value="2" />
              <button>
                <ion-icon name="add-circle-outline" size color></ion-icon>
              </button>
            </div>
          </td>
          <td>
            <strong>R$ 4.000,00</strong>
          </td>
          <td>
            <button>
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
        <strong>R$ 8.000,00</strong>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
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