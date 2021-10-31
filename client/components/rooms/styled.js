import styled, { createGlobalStyle } from 'styled-components'

export const Body = styled.main`
    margin: 0rem auto 0rem auto;
    width: 60%;
    height: 100vh;
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 10px 5px #f1f1f1;

    @media only screen and (max-width: 920px){
        width: 75%;
    }
    @media only screen and (max-width: 620px){
        width: 100%;
    }
`

export const GlobalStyle = createGlobalStyle`
    body{
        background: #f5f7fb;
    }
`