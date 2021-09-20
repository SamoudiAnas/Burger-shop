import React from 'react'
import styled from 'styled-components'
import { MainColor } from '../../utils/constants';
import burgerImage from "../../images/burger.png"

function Welcome() {
    return (
        <Wrapper>
            <div className="container">
                <div className="info__container">
                    <div className="section__welcome">Welcome</div>
                    <h1 className="section__title">We make the best burger in town</h1>
                    <p className="section__descsription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ullam veritatis quae harum sapiente consequatur! Excepturi, facilis accusantium!</p>
                </div>
                
                <div className="img__container">
                    <img src={burgerImage} alt="" srcset="" />
                </div>
            </div>
            
        </Wrapper>
    )
}



export const Wrapper = styled.section`


    .container{
        text-align: center;
        margin-bottom: 6rem;
    }

    .section__welcome{
        font-family: "Parisienne";
        font-size: 2em;
        color:${MainColor};
    }

    .section__title{
        font-size: 1.75em;
    }

    .section__descsription{
        margin-bottom: 30px;
    }
    


    @media (min-width:768px) {

        .container{
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
        }
        
        .info__container{
            text-align: right;
            padding-top :6rem ;
        }
        
        .section__welcome{
            font-size: 2rem;
        }

        .section__title{
            font-size: 2rem;
            margin: 0 0 10px;
            margin-left: 40%;
            
        }

        .img__container{
            grid-row: 1
        }
        img{
            max-height: 400px;
        }

    }

`;



export default Welcome
