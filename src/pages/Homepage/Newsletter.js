import React from "react";
import styled from "styled-components";
import { MainColor, SecondaryColor } from "../../utils/constants";
import img from "../../images/food.png";

function Newsletter() {
  return (
    <Wrapper>
      <div className="container">
        <img src={img} alt="" />

        <div className="info__container">
          <h3>Let's connect!</h3>
          <p>
            Sign up for our newsletter &amp; get 10% off bill offers and
            invites!
          </p>
          <form>
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export const Wrapper = styled.section`
  background-color: ${SecondaryColor};
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-top: 3rem;

  img {
    width: initial;
    height: 250px;
    display: block;
    margin: 2rem auto;
  }

  h3 {
    font-size: 2rem;
    color: ${MainColor};
    text-align: center;
  }

  p {
    text-align: center;
  }

  form {
    margin-top: 1rem;
  }

  input {
    width: 100%;
    border-radius: 25px;
    border: transparent;
    box-shadow: 0 0 5px 2px rgba(216, 0, 50, 0.1);
    font-family: "Poppins", sans-serif;
    padding: 1rem 1.5rem;
    &:focus {
      outline: transparent;
    }
  }

  button {
    width: 100%;
    color: white;
    background-color: ${MainColor};
    padding: 1rem 30px;
    border-radius: 50px;
    border: transparent;
    font-family: "Poppins";
    font-weight: 700;
    text-transform: uppercase;
    box-shadow: 0 0 10px 2px rgba(216, 0, 50, 0.3);
    margin: 20px 0;
    &::before {
      font-family: "Font Awesome 5 Free";
      content: "\f1d8";
      font-weight: 900;
      margin-right: 10px;
    }
  }

  @media (min-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: 350px 1fr;
    }

    .info__container {
      margin: auto 0;
      h3,
      p {
        text-align: initial;
      }

      form {
        display: grid;
        grid-template-columns: 1fr 200px;
        align-items: center;
        gap: 2rem;
      }
    }
  }
`;

export default Newsletter;
