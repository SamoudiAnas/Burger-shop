import React from "react";
import styled from "styled-components";
import CartItem from "../../Components/CartItem";
import desktop_sm from "../../images/desktop-sm.png";
import { MainColor, SecondaryColor } from "../../utils/constants";
import { useCartContext } from "../../contexts/CartContext";

function CartPage() {
  const { cart } = useCartContext();
  return (
    <Wrapper>
      <div className="container">
        <div className="title__container">
          <span className="title">Your cart</span>
        </div>
        <div className="cart__container">
          {cart.items.length === 0 ? (
            <h3 className="empty">Your cart is empty!</h3>
          ) : (
            cart.items.map((item, index) => (
              <CartItem key={item.id} item={item} />
            ))
          )}
          {cart.items.length === 0 ? null : (
            <div>
              <hr className="info__divider" />
              <div className="cart__infos">
                <div className="info">
                  <p className="info__name">Number of items :</p>
                  <p className="info__value">{cart.itemsCount}</p>
                </div>
                <div className="info">
                  <p className="info__name">Total Price :</p>
                  <p className="info__value">{cart.total}$</p>
                </div>
                <button className="checkout">Checkout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export const Wrapper = styled.section`
  padding: 12rem 0;
  background-image: url(${desktop_sm});
  background-repeat: no-repeat;

  .container {
    padding: 0 2rem;
  }

  .title__container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 0 3rem;
  }

  .title {
    color: white;
    font-size: 2rem;
    font-weight: 700;
    position: relative;

    &::before {
      content: "";
      width: 80%;
      height: 4px;
      background-color: ${SecondaryColor};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 30px);
    }
  }

  .cart__container {
    background-color: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    padding: 1rem 2rem;

    .empty {
      text-align: center;
      margin: 3rem 0;
    }
  }

  .cart__infos {
    width: 50%;

    margin: 1rem auto;
  }
  .info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .info__name {
    font-weight: 600;
    color: #454545;
  }
  .info__divider {
    background-color: #454545;
    width: 70%;
    margin: 0.5rem auto;
  }
  .checkout {
    width: 100%;
    background-color: ${MainColor};
    border: transparent;
    border-radius: 10px;
    padding: 0.75rem 1.5rem;
    margin: 1.5rem auto;
    color: white;
    font-family: "Poppins", sans-serif;

    &:hover {
      cursor: pointer;
      box-shadow: 0 0 3px rgba(216, 0, 50, 0.6);
    }
  }
`;

export default CartPage;
