import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../contexts/FilterContext";
import { MainColor } from "../utils/constants";

function Category({ c }) {
  const { filters, updateFilters } = useFilterContext();

  return (
    <Button
      onClick={() => updateFilters("category", c.c)}
      checked={filters.category === c.c ? true : false}
    >
      {c.c}
    </Button>
  );
}

export const Button = styled.button`
  display: block;
  background: transparent;
  border: transparent;
  color: ${MainColor};
  font-size: 1rem;
  margin: 1.2rem 0;
  padding: 0.3rem 0;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &::before {
    content: "";
    background-color: ${MainColor};
    width: ${(props) => (props.checked ? "30px" : "0px")};
    height: 2px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, 550%);
    transition: all 0.3s ease;
  }

  &:active {
    cursor: pointer;
  }
`;

export default Category;
