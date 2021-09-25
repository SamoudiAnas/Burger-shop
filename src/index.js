import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FilterProvider } from "./contexts/FilterContext";
import CartProvider from "./contexts/CartContext";
import ModalProvider from "./contexts/ModalContext";
import NotificationProvider from "./contexts/NotificationContext";

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <FilterProvider>
        <CartProvider>
          <NotificationProvider>
            <App />
          </NotificationProvider>
        </CartProvider>
      </FilterProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
