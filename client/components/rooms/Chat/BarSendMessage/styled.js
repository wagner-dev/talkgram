import styled from 'styled-components'

export const Body = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0rem 0rem;
    height: 12vh;
`

export const InputMessage = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    textarea {
        width: 100%;
        padding: 1.22rem .3rem;
        border: none;
        text-align: center;
        background: #f1f1f1;
        outline: none;
        border-radius: 8px;
        resize: none;
        height: 3vh;
    }

    @media only screen and (max-width: 1024px){
        width: 65%;
    }
`

export const InputSubmit = styled.div`
    cursor: pointer;
    border-radius: 8px;
    width: 24%;
    text-align: center;
    padding: .971rem 0rem;
    background: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        width: 25px;
        height: 25px;
    }
`