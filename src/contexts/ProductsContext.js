import React, { useEffect, createContext, useContext, useReducer } from "react";
import BurgersReducer from "../reducers/BurgersReducer";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(BurgersReducer, []);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/SamoudiAnas/Burger-shop/burger")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "LOAD_PRODUCTS",
          payload: data,
        })
      );
  }, []);

  return (
    <ProductsContext.Provider value={[products, dispatch]}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
