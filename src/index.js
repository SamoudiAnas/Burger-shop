import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FilterProvider } from "./contexts/FilterContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import CartProvider from "./contexts/CartContext";
import ModalProvider from "./contexts/ModalContext";

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
