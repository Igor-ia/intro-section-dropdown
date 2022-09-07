import { createGlobalStyle } from "styled-components";
import * as colors from "../config/colors"
export default createGlobalStyle`
*{
margin: 0;
padding: 0;
outline: none;
box-sizing: border-box;
}

body{
    font-size: 18px;
    font-family: 'Epilogue', sans-serif;
    font-weight: 500,700;
}

html,body,#root{
    height: 100%;
    background: ${colors.almostWhite};
}
`