import React from 'react'
import styled from 'styled-components'

import img from "../../images/burgerIG.jpg"
import img2 from "../../images/BurgerIG2.jpg"
import img3 from "../../images/BurgerIG3.jpg"
import img4 from "../../images/BurgerIG4.jpg"
function InstagramPhotos() {
    return (
        <Wrapper>
            <div className="container">
                <div className="row__1">
                    <img src={img} alt="burger" className="smaller__img"/>
                    <img src={img2} alt="burger" />
                    <img src={img3} alt="burger" className="smaller__img"/>
                </div>
                <div className="row__2">
                    <img src={img4} alt="burger" />
                    <img src={img} alt="burger" />
                </div>
            </div>
        </Wrapper>
    )
}




export const Wrapper = styled.section`


    img{
        width: 100%;
        height: 350px;
        object-fit: cover;
        display: block;
        text-align: center;
        margin: 2rem 0;
    }


    @media (min-width:768px){
        img{
            width: 350px;
            margin: 0;
        }
        .row__1{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
        }
        .row__2{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 3rem;
            margin-top: 3rem;
        }
        .smaller__img{
            height: 300px;
        }
    }
    

`;










export default InstagramPhotos
