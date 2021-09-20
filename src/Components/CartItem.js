import { faMinus, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { useCartContext } from "../contexts/CartContext";
import burger from "../images/burger.png";
import { MainColor, SecondaryColor } from "../utils/constants";

function CartItem({ item }) {
  const { removeItem, addToItem, subtractFromItem } = useCartContext();
  console.log(item);
  return (
    <Wrapper>
      <div className="cart__item__container">
        <img src={burger} alt="burger" className="food__image" />
        <div className="info__container">
          <h3 className="food__name">{item.food.name}</h3>
          <p className="food__size">{item.food.name}</p>
          <p className="food__price">{item.food.price}$</p>
        </div>

        <div className="count__container">
          <div className="count__btn" onClick={() => addToItem(item.id)}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <p className="count">{item.numberOfItems}</p>
          <div className="count__btn" onClick={() => subtractFromItem(item.id)}>
            <FontAwesomeIcon icon={faMinus} />
          </div>

          <hr />
          <div className="delete__btn" onClick={() => removeItem(item.id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  margin: 3rem 0;
  .cart__item__container {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 2rem;
  }

  .info__container,
  .count__container {
    margin: auto 0;
  }

  .food__image {
    width: 200px;
  }
  .food__name {
    text-align: left;
  }
  .food__size {
    color: #7a7a7a;
    font-style: italic;
    margin: 0.3 rem 0;
  }
  .count__container {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .count__btn,
  .delete__btn {
    color: white;
    background-color: ${MainColor};
    padding: 5px 10px;
    border-radius: 2px;
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 5px rgba(216, 0, 50, 0.6);
    }
  }
  .delete__btn {
    color: ${SecondaryColor};
  }
  .count {
    color: ${MainColor};
    font-size: 2rem;
    font-weight: 700;
  }
  hr {
    width: 1px;
    height: 70px;
    background-color: #7a7a7a;
  }
`;

export default CartItem;
