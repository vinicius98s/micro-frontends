import React from "react";

import useReducer from "../../../utils/useReducer";
import { addCounter, decreaseCounter } from "../../../store/actions/counter";
import routes from "../../../routes";

import { Container, StyledButton, Cart } from "./styles";

import logo from "../../../assets/images/logo.svg";

export default function Header() {
  return (
    <Container>
      <StyledButton onClick={() => routes.to("/")}>
        <img src={logo} alt="Rocketshoes" />
      </StyledButton>

      <Cart as="button" onClick={() => routes.to("/cart")}>
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <ion-icon name="basket" size="large"></ion-icon>
      </Cart>
    </Container>
  );
}
