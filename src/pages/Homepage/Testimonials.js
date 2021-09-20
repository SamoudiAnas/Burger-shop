import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MainColor } from "../../utils/constants";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([
    { name: "", image: "", testimony: "" },
  ]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/SamoudiAnas/Burger-shop/testimonials"
    )
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  console.log(testimonials);
  return (
    <Wrapper>
      <div className="container">
        <div className="info__container">
          <div className="section__welcome">Testimonials</div>
          <div className="title">
            <span className="section__title">Our Clients reviews</span>
          </div>
        </div>

        <div className="testimony__container">
          <div className="avatar__container">
            <div className="red__background"></div>
            <img src={testimonials[0].image} alt="avatar" />
          </div>
          <div className="testimony__info">
            <p className="testimony">{testimonials[0].testimony}</p>
            <h3 className="name">{testimonials[0].name}</h3>
            <hr />
            <p className="status">{testimonials[0].status}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export const Wrapper = styled.section`
  padding-top: 5em;

  margin-bottom: 10rem;
  .section__welcome {
    font-family: "Parisienne";
    font-size: 2em;
    text-align: center;
    color: ${MainColor};
  }

  .title {
    margin-bottom: 30px;
    text-align: center;
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
      left: 50%;
      transform: translate(-50%, 800%);
    }
  }

  .avatar__container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  .red__background {
    width: 300px;
    height: 300px;
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: ${MainColor};
  }

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }

  .testimony::before {
    font-family: "Font Awesome 5 Free";
    content: "\f291";
    margin-right: 10px;
  }

  .testimony {
    text-align: center;
    position: relative;
  }
  .testimony::before {
    position: absolute;
    font-family: "Font Awesome 5 Free";
    content: "\f10d";
    margin-right: 10px;
    font-weight: 900;
    font-size: 2em;
    width: 40px;
    top: -30%;
    opacity: 0.2;
  }

  .name {
    text-align: center;
    font-size: 1.75em;
    color: ${MainColor};
  }

  hr {
    width: 10%;
    height: 3px;
    background-color: ${MainColor};
    margin: 0 auto 10px;
  }

  .status {
    font-size: 1em;
    text-align: center;
    color: #a9a9a9;
  }

  @media (min-width: 768px) {
    .testimony__container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .testimony__info {
      margin: auto 0;
      .name,
      .status,
      .testimony {
        text-align: initial;
      }

      .name {
        margin: 10px 0;
      }
      hr {
        margin: 0 0 10px;
      }
    }
    .testimony::before {
      position: absolute;
      font-family: "Font Awesome 5 Free";
      content: "\f10d";
      margin-right: 10px;
      font-weight: 900;
      font-size: 2em;
      width: 40px;
      top: -40%;
      opacity: 0.2;
    }
  }

  @media (max-width: 300px) {
    .section__title {
      &::after {
        top: 70%;
        left: 60%;
      }
    }

    img {
      width: 220px;
      height: 220px;
      border-radius: 50%;
    }

    .red__background {
      width: 120%;
      height: 120%;
    }

    .testimony::before {
      top: -20%;
    }
  }
`;

export default Testimonials;
