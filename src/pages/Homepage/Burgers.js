import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MainColor } from "../../utils/constants";
import Burger from "../../Components/Burger";

function Burgers() {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/SamoudiAnas/burger-shop/fburger")
      .then((res) => res.json())
      .then((data) => setBurgers(data));
  }, []);

  return (
    <Wrapper>
      <div className="container">
        <div className="info__container">
          <div className="section__welcome">Special Combo</div>
          <div className="title">
            <span className="section__title">Our delicious burgers</span>
          </div>
        </div>
        <div className="burgers__container">
          {burgers.map((burger) => (
            <Burger key={burger.id} burger={burger} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export const Wrapper = styled.section`
  .section__welcome {
    font-family: "Parisienne";
    font-size: 2em;
    color: ${MainColor};
  }
  .title {
    margin-bottom: 5rem;
  }

  .section__title {
    font-size: 1.75em;
    font-weight: 700;
    position: relative;

    &::after {
      content: "";
      width: 80%;
      height: 4px;
      background-color: ${MainColor};
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, 30px);
    }
  }

  @media (max-width: 576px) {
    .burgers__container {
      display: grid;
      grid-template-columns: repeat(autofit, minmax(250px, 1fr));
    }
  }
  @media (min-width: 768px) {
    .burgers__container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
    }
  }
`;

export default Burgers;
