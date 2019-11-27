import logo from "../assets/images/logo.svg";
import route from "../routes";
import useRedux from "../utils/useRedux";

const template = document.createElement("template");

template.innerHTML = `
  <style>
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 50px 0;
    }

    .container button {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      outline: none;
    }

    .container .cart {
      background: none;
      border: none;
      display: flex;
      align-items: center;
      transition: opacity 0.2s;
    }

    .container .cart:hover {
      opacity: 0.7;
      cursor: pointer;
    }

    .container .cart div {
      text-align: right;
      margin-right: 10px;
    }

    .container .cart .icon-large {
      color: #fff;
    }

    .container .cart div strong {
      display: block;
      color: #fff;
    }

    .container .cart div span {
      font-size: 12px;
      color: #999;
    }
  </style>
  
  <div class="container">
    <button>
      <img src=${logo} alt="Rocketshoes" />
    </button>

    <div class="cart" as="button">
      <div>
        <strong>My cart</strong>
        <span id="total-items">0 items</span>
      </div>
      <ion-icon name="basket" size="large"></ion-icon>
    </div>
  </div>
`;

class Header extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));

    this._updateCartQuantity = this._updateCartQuantity.bind(this);

    const { state, unsubscribe } = useRedux(this._updateCartQuantity, "cart");
    this.unsubscribe = unsubscribe;
    this.cart = state.cart;

    this.$cartButton = shadowRoot.querySelector(".cart");
    this.$totalItems = shadowRoot.querySelector("#total-items");
    this.$logoButton = shadowRoot.querySelector("button");
  }

  connectedCallback() {
    if (this.cart.length) {
      this._updateCartQuantity(this.cart);
    }

    this.$logoButton.addEventListener("click", this._navigateHome);
    this.$cartButton.addEventListener("click", this._navigateToCart);
  }

  disconnectedCallback() {
    this.$logoButton.removeEventListener("click", this._navigateHome);
    this.$cartButton.removeEventListener("click", this._navigateToCart);
    this.unsubscribe();
  }

  _updateCartQuantity(cart) {
    const productsQuantity = cart.length;
    this.$totalItems.innerHTML = `${productsQuantity} items`;
  }

  _navigateToCart() {
    route.to("/cart");
  }

  _navigateHome() {
    route.to("/");
  }
}

customElements.define("custom-header", Header);
