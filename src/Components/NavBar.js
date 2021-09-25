import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useLocation } from "react-router";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHamburger,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

//colors
import { MainColor, SecondaryColor } from "../utils/constants";

import img from "../images/desktop-sm.png";
import { useCartContext } from "../contexts/CartContext";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCartContext();
  const location = useLocation();
  const menuItems = useRef();
  console.log(menuItems);

  return (
    <Wrapper className="section" isOpen={isOpen}>
      <div className="container">
        <div className="logo__container">
          <div className="logo">
            <FontAwesomeIcon icon={faHamburger} />
          </div>

          <h3>BURGER SHOP</h3>
        </div>
        <div className="menu" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="menu__items" ref={menuItems}>
          <ul>
            <li className="menu__item">
              <NavLink exact to="/" activeClassName="active">
                {" "}
                Home
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="menu__item">
              <NavLink exact to="/about" activeClassName="active">
                {" "}
                About
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="menu__item">
              <NavLink exact to="/products" activeClassName="active">
                {" "}
                Shop
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="menu__item">
              <NavLink to="/contact" activeClassName="active">
                {" "}
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="cart_and_login">
          <ul>
            <li>
              <Cart count={cart.itemsCount}>
                <Link to="/cart" className="link">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
              </Cart>
            </li>
          </ul>
          <ul>
            <Link to="/authentication" className="link">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

export const Wrapper = styled.header`
  width: 100%;
  position: absolute;
  background-color: transparent;
  height: 4rem;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }
  .logo {
    font-size: 1.75rem;
    color: ${MainColor};
    background: ${SecondaryColor};
    padding: 10px;
  }

  .menu {
    font-size: 1.5em;
    color: ${SecondaryColor};
  }

  .menu__items {
    position: fixed;
    top: ${(props) => (props.isOpen ? "4rem" : "-100%")};
    left: 0;
    right: 0;
    width: 90%;
    margin: 0 auto;
    padding: 0;
    background-color: white;
    color: ${MainColor};
    transition: 0.3s;
    box-shadow: 0 0 4px rgba(216, 0, 50, 0.8);
    border-radius: 8px;
    z-index: 100;
    text-align: center;
  }

  .show__menu {
    height: 4rem;
  }

  ul {
    margin: 1rem 0;
  }
  li {
    font-weight: 500;
  }
  a {
    color: ${MainColor};
  }

  .logo__container {
    h3 {
      display: none;
    }
  }

  .cart_and_login {
    display: none;
  }

  @media (min-width: 768px) {
    &::before {
      content: "";
      width: 100vw;
      height: 3.9rem;
      background-image: url(${img});
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }

    .menu {
      display: none;
    }
    .menu__items {
      position: initial;
      display: flex;
      justify-content: center;
      gap: 3rem;
      color: white;
      background-color: transparent;
    }
    .cart_and_login {
      display: flex;
      justify-content: center;
      gap: 2rem;
      color: ${SecondaryColor};
    }

    a {
      color: white;
    }
    .link {
      color: ${SecondaryColor};
    }

    .menu__item {
      a {
        position: relative;
      }
      a:hover {
        cursor: pointer;
      }
      a::before {
        content: "";
        width: 0;
        height: 3px;
        transition: all 0.3s ease;
        position: absolute;
        background-color: ${SecondaryColor};
        top: 50%;
        left: 50%;
        transform: translate(-50%, 400%);
      }
      .active::before {
        content: "";
        width: 70%;
        height: 3px;
        transition: all 0.3s ease;
        position: absolute;
        background-color: ${SecondaryColor};
        top: 50%;
        left: 50%;
        transform: translate(-50%, 400%);
      }

      &:hover > a::before {
        width: 70%;
      }
    }

    .logo__container {
      display: flex;
      align-items: center;
      gap: 1rem;
      h3 {
        display: initial;
        white-space: nowrap;
        color: ${SecondaryColor};
      }
    }
  }
`;

export const Cart = styled.div`
  position: relative;
  color: ${SecondaryColor};
  &::after {
    content: "${(props) => props.count}";
    padding: 2px 5px;
    font-size: 0.7rem;
    font-weight: 700;
    background-color: white;
    color: ${MainColor};
    border-radius: 50%;
    position: absolute;
    top: -10px;
    right: -10px;
  }
`;

export default NavBar;
