import React from "react";
import styled from "styled-components";
import mobile from "../../images/mobile.png";
import desktop from "../../images/desktop.png";
import burgerImage from "../../images/burger.png";
//colors
import { SecondaryColor } from "../../utils/constants";

function Header() {
  return (
    <Wrapper>
      <div className="container">
        <div className="info__container">
          <h1 className="hero__text">Share your love for burger</h1>
          <button className="order">Order Now</button>
        </div>

        <div className="img__container">
          <img src={burgerImage} alt="hero" />
        </div>
      </div>
    </Wrapper>
  );
}

export const Wrapper = styled.section`
  background-image: url(${mobile});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  object-fit: cover;
  min-height: 100vh;

  .info__container {
    padding: 8rem 0 0;
  }

  .hero__text {
    color: white;
    font-style: italic;
    font-size: 3rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  .order {
    background-color: ${SecondaryColor};
    padding: 20px 30px;
    border-radius: 50px;
    border: transparent;
    font-family: "Poppins";
    font-weight: 700;
    text-transform: uppercase;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    margin: 20px 0;
    &::before {
      font-family: "Font Awesome 5 Free";
      content: "\f291";
      margin-right: 10px;
    }
  }

  .img__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    height: auto;
    max-height: 300px;
    margin-top: 20px;
  }

  @media (min-width: 576px) {
    .info__container {
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    background-image: url(${desktop});

    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      padding-top: 10vh;
    }

    .info__container {
      text-align: initial;
      padding-top: 4rem;
    }

    .hero__text {
      font-size: 4rem;
      max-width: 80%;
    }

    img {
      max-height: 450px;
    }

    .order {
      font-size: 1rem;
    }
  }
`;

export default Header;
