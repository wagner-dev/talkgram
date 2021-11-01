import styled from 'styled-components'

export const Body = styled.article`
    width: 27%;
    display: flex;
    justify-content: center;
    background: var(--color-primary);
    box-shadow: 0px 0px 10px 5px #cfbfff;

    @media only screen and (max-width: 920px){
        display: none;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const Svg = styled.div`
    img{
        width: 60%;
    }
`
export const Text = styled.div`
    padding: 0rem .5rem;
    text-align: center;
    span{
        font-size: 1.075rem;
        color: #fff;
    }
`