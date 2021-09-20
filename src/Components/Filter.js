import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../contexts/FilterContext";
import { categories } from "../utils/constants";
import { MainColor } from "../utils/constants";
import Category from "./Category";

function Filter() {
  const { filters, updateFilters, clearFilters } = useFilterContext();

  return (
    <Wrapper>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="search__input"
          type="text"
          placeholder="Search"
          value={filters.text}
          onChange={(e) => updateFilters("text", e.target.value)}
        />
      </form>

      <h3>Categories</h3>
      {categories.map((category) => (
        <Category c={category} />
      ))}
      <h3>Price</h3>
      <p className="price">{filters.price}</p>
      <input
        className="range"
        type="range"
        name="price"
        min={filters.min_price}
        max={filters.max_price}
        value={filters.price}
        onChange={(e) => updateFilters("price", e.target.value)}
      />
      <button className="clear__filter" onClick={clearFilters}>
        Clear filters
      </button>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  form {
    width: 100%;
  }

  .search__input {
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #f8f8f8;
    border: 2px solid #5a5a5a;
    border-radius: 10px;
    font-family: "Poppins", sans-serif;

    &:focus {
      border: transparent;
      border-radius: 10px;
    }
  }

  h3 {
    margin: 2rem 0 1rem;
  }

  .range {
    width: 100%;
  }

  .clear__filter {
    background-color: ${MainColor};
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    color: white;
    border-radius: 10px;
    border: transparent;
    font-family: "Poppins", sans-serif;
    box-shadow: 0 0 5px rgba(216, 0, 50, 0.3);

    &:hover {
      cursor: pointer;
      box-shadow: 0 0 5px 1px rgba(216, 0, 50, 0.6);
    }
  }
`;
export default Filter;
