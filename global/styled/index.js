import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary: #835afd;
    }
    * {
        margin: 0px;
        padding: 0px;
    }
    body{
        box-sizing: border-box;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
    }
`