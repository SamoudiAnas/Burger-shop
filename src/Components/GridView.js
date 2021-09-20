import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { useFilterContext } from "../contexts/FilterContext";

function GridView() {
  const { filters } = useFilterContext();

  const results = () => {
    if (filters.burgers.length === 0) {
      return <h3>Sorry can't find what you are looking for!</h3>;
    } else {
      return filters.burgers.map((burger) => <Burger burger={burger} />);
    }
  };

  return (
    <Wrapper>
      <div className="grid__container">{results()}</div>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  .grid__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem 3rem;
  }
`;

export default GridView;
