import styled from 'styled-components'


export const Title = styled.div`
    margin: 0rem 0rem 2rem 0rem;
    text-align: center;
    h2{
        font-size: .975rem;
        font-weight: 500;
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