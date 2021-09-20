import React from "react";
import styled from "styled-components";
import { useCartContext } from "../contexts/CartContext";
import { MainColor, SecondaryColor } from "../utils/constants";

function Burger({ burger }) {
  const { addToCart } = useCartContext();

  return (
    <Wrapper>
      <h3 className="name">{burger.name}</h3>
      <p className="description">{burger.description}</p>
      <h1 className="price">{burger.price}$</h1>
      <button className="order" onClick={() => addToCart(burger)}>
        Order Now
      </button>
      <img src={burger.image} alt="burger" />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23D80034FF' stroke-width='4' stroke-dasharray='16%2c 16' stroke-dashoffset='33' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  margin-bottom: 2rem;

  &:hover {
    background-image: none;
    background-color: ${MainColor};
    box-shadow: 0 0 25px rgba(216, 0, 50, 0.6);
    cursor: pointer;

    & + .price,
    .description,
    .name,
    .price {
      color: #fff;
    }
  }

  .price {
    font-size: 3em;
    color: ${MainColor};
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
    margin: 20px auto;
    display: block;

    &:hover {
      cursor: pointer;
    }

    &::before {
      font-family: "Font Awesome 5 Free";
      content: "\f291";
      margin-right: 10px;
    }
  }

  img {
    max-height: 200px;
  }
`;

export default Burger;
