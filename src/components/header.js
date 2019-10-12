import logo from "../assets/images/logo.svg";
import route from "../routes";

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
        <strong>Meu carrinho</strong>
        <span id="total-items">3 itens</span>
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

    this.cart = shadowRoot.querySelector(".cart");
    this.totalItems = shadowRoot.querySelector("#total-items");
    this.logoButton = shadowRoot.querySelector("button");
  }

  navigateToCart() {
    route.to("/cart");
  }

  navigateHome() {
    route.to("/");
  }

  connectedCallback() {
    this.logoButton.addEventListener("click", this.navigateHome);
    this.cart.addEventListener("click", this.navigateToCart);
  }
}

customElements.define("custom-header", Header);
