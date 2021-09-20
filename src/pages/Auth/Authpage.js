import React from "react";
import styled from "styled-components";
import img from "../../images/signup.jpg";
import { MainColor, SecondaryColor } from "../../utils/constants";
import LoginModal from "./LoginModal";
import { useModalContext } from "../../contexts/ModalContext";
import SignUpModal from "./SignUpModal";

function Authpage() {
  const [modal, setModal] = useModalContext();
  return (
    <Wrapper>
      <div className="container">
        <div className="title__container">
          <span className="title">Welcome to Burger Shop!</span>
        </div>

        <div className="auth__container">
          {modal.selectedModal === "sign up" ? <SignUpModal /> : <LoginModal />}

          <img src={img} alt="" />
        </div>
      </div>
    </Wrapper>
  );
}

export const Wrapper = styled.section`
  padding: 8rem 0 0;

  .title__container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .title {
    color: ${MainColor};
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

  .auth__container {
    margin-top: 3rem;
    margin-bottom: 6rem;

    p {
      text-align: center;
    }
  }

  img {
    height: 350px;
    object-fit: cover;
    margin: auto 0;
    position: relative;
  }

  @media (min-width: 768px) {
    .auth__options {
      display: flex;
      justify-content: space-between;
    }
    .title__container {
      margin-top: 5rem;
      margin-bottom: 10rem;
    }

    .auth__container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 5rem;
      gap: 3rem;
    }
    .no__account {
      color: #7a7a7a;
      text-align: center;
    }

    img {
      height: auto;
    }
  }
`;

export default Authpage;
