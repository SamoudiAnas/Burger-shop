import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components'
import { MainColor, SecondaryColor } from '../utils/constants';
function Footer() {
    return (
        <>
        <Wrapper>
            <div className="container">
                <div className="logo">
                    <div className="icon">
                        <FontAwesomeIcon icon={faHamburger} />
                    </div>
                    
                    <h3>BURGER SHOP</h3>
                </div>

                <div className="infos">
                    <div className="info_container">
                        <h3 className="title">Address</h3>
                        <p>000 8th Ave, New York, YK 10018 United States</p>
                    </div>
                    <hr />
                    <div className="info_container">
                        <h3 className="title">Book a table</h3>
                        <p className="info">000 8th Ave, New York, YK 10018 United States</p>
                    </div>
                    <hr />
                    <div className="info_container">
                        <h3 className="title">Openings hours</h3>
                        <p className="info">Monday - Friday <br /> 10.00 AM - 11.00 PM</p>
                    </div>
                </div>
            </div>
           
        </Wrapper>
        <Copyright> 2021 All Rights Reserved. <span>BurgerShop</span></Copyright>
        </>
    )
}

export const Wrapper = styled.section`
    padding-top: 3rem;
    .logo{
        display: flex;
        align-items: center;
        gap: 1rem;

        .icon{
            background-color: ${MainColor};
            padding: 10px;
            color: ${SecondaryColor};
            font-size: 1.5rem;
        }

        h3{
            font-weight: 500;
            color: ${MainColor};
        }

    }

    .infos{
        margin: 3rem 0;
    }

    .info_container{
        margin-bottom: 2rem;
    }

    hr{
        width: 90%;
        border: 1px dashed ${MainColor};
        margin: 0 auto;
        margin-bottom: 2rem;
    }


    .title{
        color: ${MainColor};
        margin-bottom: 1rem;
    }


    @media (min-width:576px){
        .infos{
            display: flex;
            flex-wrap: wrap;
        }
        .info_container{
            flex: 1 1 0px;
        }
        hr{
            width: 1px;
            margin: 0 2rem;
        }
    }

    @media (min-width:768px){
        .infos{
            display: flex;
        }
        .info_container{
            flex: 1 1 0px;
        }
        hr{
            width: 1px;
            margin: 0 2rem;
        }
    }













`;

export const Copyright = styled.div`
    
    background-color: ${MainColor};
    color: white;
    font-weight: 400;
    padding: 1rem;
    text-align: center;
    
    span{
        font-weight: 700;
        color: ${SecondaryColor};
    }
    
`;

export default Footer
