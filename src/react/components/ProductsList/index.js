import React, { useState, useEffect } from "react";

import api from "../../../services/api";
import formatPrice from "../../../utils/formatPrice";
import useReducer from "../../../utils/useReducer";
import { addToCart } from "../../../store/actions/cart";

import { ProductsContainer } from "./styles";

export default function ProductList() {
  const [, dispatch] = useReducer();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/products");

      const products = data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price)
      }));

      setProducts(products);
    })();
  }, []);

  const onAddProduct = product => dispatch(addToCart(product));

  if (!products.length) return <h1>Loading</h1>;

  return (
    <ProductsContainer>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.formattedPrice}</span>

          <button onClick={() => onAddProduct(product)}>
            <div>
              <ion-icon name="cart"></ion-icon> 3
            </div>
            <span>ADD TO CART</span>
          </button>
        </li>
      ))}
    </ProductsContainer>
  );
}
