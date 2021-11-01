import styled from 'styled-components'

export const Body = styled.article`
    width: 50%;
    background: #f1f1f1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 720px){
        width: 100%;        
    }
`

export const Logo = styled.div`

`

export const BodyData = styled.div`
    width: 50%;

    @media only screen and (max-width: 620px){
        width: 80%;
    }
`
export const ErrorText = styled.div`
    span{
        font-size: .875rem;
        color: red;
    }
`