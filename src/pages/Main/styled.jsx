import styled from "styled-components";
import * as colors from '../../config/colors';

// -------------     Section    --------------//

export const Section = styled.section`

width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

img.image-section-desktop{
    width: 30%;

    @media screen and (max-width: 710px) {
        display: none;
    }
}

`;

// ------------    Description     ------------//

export const Description = styled.div`

padding-top: 80px;
max-width: 50%;
margin-right: 7%;

@media screen and (max-width: 710px){
    max-width: 100%;
    margin-right: 0;
    padding-top: 0;
}

img.image-section-mobile{
    width: 100%;
    display: none;

    @media screen and (max-width: 710px) {
        display: block;
    }
}


h1{
font-size:4em;

    @media screen and (max-width: 945px){
        font-size: 3.5em;
    }
    @media screen and (max-width: 825px){
            font-size: 3em;
    }
    @media screen and (max-width: 710px){
        margin: 30px 0 20px 0;
        font-size: 2em;
        text-align: center;
        display: block;
        & br{
            display: none;
        }
    }
}


p{
color: ${colors.mediumGray};
width: 470px;
margin: 50px 0 40px 0;
line-height: 1.5;
text-align:justify ;

@media screen and (max-width: 945px) {
    width: 400px;
}
@media screen and (max-width: 825px) {
    width:350px;
}
@media screen and (max-width: 710px) {
    width:70%;
    margin: auto;
    text-align: justify;
}
}

button{
    background: ${colors.almostBlack};
    color:${colors.almostWhite};
    border: 2px solid ${colors.almostBlack};
    text-align: center;
    padding: 15px 20px 15px 20px;
    border-radius: 15px;
    font-weight: bold;
    font-size: 20px;
    margin-bottom:50px;


    @media screen and  (max-width: 825px){
        padding: 10px 15px 10px 15px;
        font-size: 15px;
        margin-bottom:30px;
    }
    @media screen and  (max-width: 710px){
        display: block;
        margin: 20px auto 30px auto;
    }
}

button:hover{
    background: #fff;
    color:${colors.almostBlack};
}

.brand{
    display: flex;
    flex-direction: row;
    gap: 5%;
    align-items: center;
    justify-content: center;

    img{
        width: 50%;
        height: 50%;
    @media screen and  (max-width: 710px){
        margin-bottom: 50px;
        width: 20%;
        height: 20%;
    }
    }
}
`;