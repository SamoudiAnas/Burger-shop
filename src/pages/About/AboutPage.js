import React from 'react'
import styled from 'styled-components'
import img from "../../images/desktop-sm.png"
import aboutImg from "../../images/about.jpg"
import {  SecondaryColor } from '../../utils/constants';


function AboutPage() {
    return (
        <Wrapper>
            <div className="container info__container">
                <div className="title__container">
                    <span className="title">About</span>
                </div>

                <div className="about">
                    <img src={aboutImg} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, voluptate nesciunt. Ex cumque eligendi iste ipsa asperiores facere, ullam magni nam. Cupiditate vel tenetur quam blanditiis sunt, ratione quasi dolores. <br /><br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, voluptate nesciunt. Ex cumque eligendi iste ipsa asperiores facere, ullam magni nam. Cupiditate vel tenetur quam blanditiis sunt, ratione quasi dolores.<br /> <br />
                     Ex cumque eligendi iste ipsa asperiores facere, ullam magni nam. Cupiditate vel tenetur quam blanditiis sunt, ratione quasi dolores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, voluptate nesciunt. <br /><br />
                     </p>
                </div>
            </div>
        </Wrapper>
    )
}


export const Wrapper = styled.section`

    background-image: url(${img});
    background-repeat: no-repeat;
    
    
    .info__container{
        padding: 8rem 0 0;
    }

    .title__container{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .title{
        color: white;
        font-size: 2rem;
        font-weight: 700;
        position: relative;

        &::before{
            content: '';
            width: 80%;
            height: 4px;
            background-color: ${SecondaryColor};
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, 30px);
        }
    }

    .about{
        margin-top: 3rem;
        margin-bottom: 6rem;

        p{
            text-align: center;
        }
    }

    img{
        height: 350px;
        object-fit: cover;
        margin: auto 0;
        position: relative;
    }


    @media (min-width:768px){
        .title__container{
            margin-top: 5rem;
            margin-bottom: 10rem;
        }


        .about{
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin-top: 5rem;
            gap: 3rem;

            p{
                margin: auto 0;
                text-align: initial;
            }
        }




        img{
            height: auto;
        }
    }



`;



export default AboutPage
