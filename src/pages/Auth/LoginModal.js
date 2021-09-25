import React from "react";
import styled from "styled-components";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MainColor } from "../../utils/constants";
import { useModalContext } from "../../contexts/ModalContext";

function LoginModal() {
  const [modal, setModal] = useModalContext();
  return (
    <Wrapper>
      <h3 className="h3">Login</h3>
      <input
        type="text"
        className="input"
        placeholder="Enter your username / email"
      />
      <input type="password" className="input" placeholder="Your password" />
      <div className="auth__options">
        <div>
          <input type="checkbox" value="lsRememberMe" className="checkbox" />
          <label for="rememberMe">Remember me</label>
        </div>
        <a className="forgot__password" href="/forgotPassword">
          Forgot password?
        </a>
      </div>
      <button className="button">
        Login
        <FontAwesomeIcon icon={faSignInAlt} />
      </button>
      <p className="no__account">
        Don't have an account?{" "}
        <span
          className="login"
          onClick={() => setModal({ ...modal, selectedModal: "sign up" })}
        >
          Sign up
        </span>
      </p>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  margin: auto 0;
  .input {
    padding: 1rem;
    margin: 1rem 0;
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
      content: "Login";
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
    margin: 1rem 0;
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
export default LoginModal;
