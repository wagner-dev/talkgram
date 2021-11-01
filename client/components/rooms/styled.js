import styled, { createGlobalStyle } from 'styled-components'

export const Body = styled.main`
    margin: 0rem auto 0rem auto;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 920px){
        justify-content: center;
    }
`

export const GlobalStyle = createGlobalStyle`
    body{
        background: #f5f7fb;
    }
`