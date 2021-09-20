import React from "react";
import styled from "styled-components";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MainColor, SecondaryColor } from "../../utils/constants";
import { useModalContext } from "../../contexts/ModalContext";

function SignUpModal() {
  const [modal, setModal] = useModalContext();
  return (
    <Wrapper>
      <h3 className="h3">Create a new account</h3>
      <input type="text" className="input" placeholder="Enter your full name" />
      <input
        type="text"
        className="input"
        placeholder="Enter your email address"
      />
      <input
        type="text"
        className="input"
        placeholder="Enter your phone number"
      />
      <input type="password" className="input" placeholder="Your password" />

      <button className="button">
        Sign up
        <FontAwesomeIcon icon={faSignInAlt} />
      </button>
      <p className="no__account">
        Already have an account?{" "}
        <span
          className="login"
          onClick={() => setModal({ ...modal, selectedModal: "login" })}
        >
          Login
        </span>
      </p>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  margin: auto 0;
  .input {
    padding: 1rem;
    margin: 0.5rem 0;
    border: 1px solid #9c9c9c;
    border-radius: 10px;
    width: 100%;
    font-family: "Poppins", sans-serif;
    &:focus {
      outline: transparent;
    }
  }

  .h3 {
    font-size: 2rem;
    color: ${MainColor};
    margin-bottom: 0.5rem;
    position: relative;
    &::after {
      content: "Sign up";
      position: absolute;
      top: 50%;
      left: 0;
      z-index: -1;
      opacity: 0.1;
      transform: translate(0%, -50%);
      font-size: 8rem;
    }
  }
  .checkbox {
    margin-right: 0.5rem;
  }

  .forgot__password,
  .login {
    color: ${MainColor};
    text-decoration: underline;
    cursor: pointer;
  }

  .no__account {
    color: "#7a7a7a";
    text-align: center;
  }

  .button {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 10px;
    background-color: ${MainColor};
    border: transparent;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    color: white;
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 5px rgba(216, 0, 50, 0.6);
    }
  }
`;
export default SignUpModal;
