import React from "react";
import styled from "styled-components";
import Filter from "../../Components/Filter";
import GridView from "../../Components/GridView";

function ProductPage() {
  return (
    <Wrapper>
      <div className="container">
        <Filter />
        <GridView />
      </div>
    </Wrapper>
  );
}

export const Wrapper = styled.section`
  padding: 8rem 0 0;
  .container {
    padding: 0 2rem;
  }

  @media (min-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 3rem;
    }
  }
`;

export default ProductPage;
