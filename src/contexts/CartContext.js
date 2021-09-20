import React, { useEffect, useContext, createContext, useReducer } from "react";
import CartReducer from "../reducers/CartReducer";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const initialeState = {
    items: [],
    itemsCount: 0,
    total: 0,
  };

  const [cart, dispatch] = useReducer(CartReducer, initialeState);

  useEffect(() => {
    dispatch({ type: "LOAD_CART" });
  }, []);

  const addToCart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const addToItem = (id) => {
    dispatch({ type: "ADD_TO_ITEM", payload: id });
  };

  const subtractFromItem = (id) => {
    dispatch({ type: "SUBTRACT_FROM_ITEM", payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
        addToCart,
        removeItem,
        addToItem,
        subtractFromItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  return useContext(CartContext);
};
