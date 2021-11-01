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

    a, span, textarea, p {
        font-size: .975rem;

        @media only screen and (max-width: 620px){
            font-size: .875rem;
        }
    }
`