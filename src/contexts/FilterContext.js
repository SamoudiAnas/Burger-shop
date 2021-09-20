import React, { createContext, useContext, useEffect, useReducer } from "react";
import FiltersReducer from "../reducers/FilterReducer";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  var initialState = {
    text: "",
    category: "All",
    min_price: 0,
    max_price: 0,
    price: 0,
    sort: "lowest_to_highest",
    burgers: [],
    allBurgers: [],
  };

  const [filters, dispatch] = useReducer(FiltersReducer, initialState);

  async function getTheData() {
    try {
      let response = await fetch("http://localhost:8000/burger");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json();

      dispatch({ type: "LOAD_BURGERS", payload: data });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getTheData();
  }, []);

  //updatefilter
  const updateFilters = (name, value) => {
    dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
  };

  //clear filters dispatcher
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  return (
    <FilterContext.Provider
      value={{
        filters,
        dispatch,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
