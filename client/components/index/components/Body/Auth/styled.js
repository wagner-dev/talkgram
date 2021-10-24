import styled from 'styled-components'

export const InputCode = styled.div`
    width: 100%;
    margin: 0rem 0rem 0rem 0rem;
    input{
        width: 100%;
        padding: 1rem 0rem;
        font-size: 1rem;
        border-radius: 4px;
        text-align: center;
        border: 1px solid #f2f2f2;
        outline: none;
    }
`
export const InputSubmit = styled.div`
    width: 100%;
    margin: ${({space}) => space ? '3rem 0rem 0rem 0rem' : '.4rem 0rem'};
    input{
        width: 100%;
        border-radius: 4px;
        padding: 1rem 0rem;
        font-size: 1rem;
        border: none;
        background: var(--color-primary);
        color: #fff;
        border: 2px solid var(--color-primary);
        cursor: pointer;
    
        :hover{
            transition: .3s linear;
            background: #7550e5;
        }
    }
`

export const TextHelp = styled.div`
    text-align: center;
    margin: 1.3rem 0rem;
    justify-content: space-between;
    align-items: center;
    display: flex;

    span{
        white-space: nowrap;
        width: 100%;
        padding: 0rem .5rem;
        font-size: .9rem;
        color: #a8a8b3;
    }

    :before, :after{
        content: ' ';
        display: block;
        width: 80%;
        background: #a8a8b3;
        height: 1px;
    }

`

export const TextLogo = styled.div`
    display: none;
    margin: 0rem 0rem 2rem 0rem;
    text-align: center;
    h2{
        font-size: .975rem;
        font-weight: 500;
    }

    @media only screen and (max-width: 720px){
        display: block;
    }
`
