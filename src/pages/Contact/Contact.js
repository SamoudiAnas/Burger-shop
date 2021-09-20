import React from 'react'
import styled from 'styled-components'
import img from "../../images/desktop-sm.png"



function Contact() {
    return (
        <Wrapper>
            <div className="container">
                <h3 className="section__title">Reach out to us!</h3>

            </div>
        </Wrapper>
    )
}


export const Wrapper = styled.section`
    
    background-image: url(${img});
    background-repeat: no-repeat;

    .container{
        min-height: 100vh;
        padding: 8rem 0 0;
    }


    .section__title{
        color: white;
        text-align: center;
    }

`;



export default Contact
