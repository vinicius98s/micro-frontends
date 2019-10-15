import React, { useState, useEffect, useCallback } from "react";

import api from "../../../services/api";
import formatPrice from "../../../utils/formatPrice";
import useReducer from "../../../utils/useReducer";
import { addToCart } from "../../../store/actions/cart";

import { ProductsContainer } from "./styles";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const updateProducts = (cart, newProducts) => {
    const cartIds = Object.assign(
      {},
      ...cart.map(product => ({ [product["id"]]: product }))
    );

    const updateProductsFromCart = arrProducts =>
      arrProducts.map(product => cartIds[product.id] || product);

    if (newProducts) {
      setProducts(updateProductsFromCart(newProducts));
    } else {
      setProducts(updateProductsFromCart(products));
    }
  };

  const [store, dispatch] = useReducer(updateProducts, "cart");

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/products");

      const products = data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price)
      }));

      if (store.cart.length) {
        updateProducts(store.cart, products);
      } else {
        setProducts(products);
      }
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
              <ion-icon name="cart"></ion-icon> {product.amount}
            </div>
            <span>ADD TO CART</span>
          </button>
        </li>
      ))}
    </ProductsContainer>
  );
}
