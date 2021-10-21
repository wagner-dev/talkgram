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
export const Title = styled.div`
    margin: 0rem 0rem 2rem 0rem;
    text-align: center;
    h2{
        font-size: .975rem;
        font-weight: 500;
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


export const GoogleButton = styled.button`
    width: 100%;
    margin: 3rem 0rem 0rem 0rem;
    display: flex;
    background: ${({ disabled }) => disabled ? '#fafafa' : '#fff'};
    border: none;
    box-shadow: rgb(0 0 0 / 24%) 0px 2px 2px 0px, rgb(0 0 0 / 24%) 0px 0px 1px 0px;
    border-radius: 3px;
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    align-items: center;
    padding: .8rem 1rem;
    div:first-child{
        svg{
            width: 25px;
        }
    }
    div:last-child{
        span{
            font-size: .9rem;
            margin: 0rem 0rem 0rem .5rem;
        }
    }
`

export const BodyData = styled.div`
    width: 50%;

    @media only screen and (max-width: 620px){
        width: 80%;
    }
`

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