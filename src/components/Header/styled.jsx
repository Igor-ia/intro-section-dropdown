import styled from "styled-components";
import * as colors from '../../config/colors'
export const Nav = styled.nav`
display: flex;
height: 50px;
padding: 10px 30px 10px 10px;
text-align: center;
/* Logo */
img{
    margin-right:10px;
}

/* mobile toggle menu hidden in desktop version */
button.mobile-toggle{
    display: none;
}


ul.navbar{
    display: inline-flex;
    align-items: center;
    width: 100%;
    gap: 15px;
}

@media screen and (max-width: 768px) {
    ul.navbar{

        right: 0;
        top: 0;
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding-left: 10px;
        height: 100vh;
        max-width: 200px;
        position: absolute;
        background: #fff;

       
    }
    button.mobile-toggle{
        display: flex;
        margin-left: auto;
        border: none;
        background: none;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
        margin: 10px;
        img{
            margin: auto;
        }

    }

    .hidden{
        display: none !important;
    }
    
}


li{list-style: none;}

a{
    text-decoration: none;
    color: ${colors.mediumGray};
    cursor: pointer;

    &:hover{
        color: ${colors.almostBlack};
        filter:brightness(0) saturate(100%);
    }
}



ul.dropdown-menu{
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    background: #fff;
    box-shadow: 0 0 40px  gray;
    padding: 15px;
    margin-top: 20px;
    border-radius:10px;
    visibility: hidden;

    li{
        margin-bottom: 15px;
        color: ${colors.mediumGray};
    }

    @media screen and (max-width: 768px){
        margin-top: 0;
        visibility: hidden;
        border: none;
        background: none;
        box-shadow: none;
        padding: 0;
        
        li{
            margin-left: 15px;
            margin-bottom: 10px;
        }
    }
}

ul.active{
    visibility:visible;

    @media screen and (max-width: 768px){
        visibility: visible;
        position: relative;
    }
}

.login{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-left:auto;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        height: 80px;
        align-content: space-around;
        justify-content: space-around;
    }
}
.register{
    border: 2px solid ${colors.almostBlack};
    text-align: center;
    padding: 10px;
    border-radius: 15px;

    @media screen and (max-width: 768px) {
        margin-top: 10px;
        padding: 10px 45px 10px 45px;
    }
}
`;