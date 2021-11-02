import styled from 'styled-components'

export const Body = styled.article`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: var(--color-primary);


    @media only screen and (max-width: 720px){
        display: none;
    }
`

export const Icon = styled.div`

    img{
        width: 50%;
    }
`
export const Title = styled.div`
    margin: 2rem 0rem 0rem 0rem;
    padding: 0rem .8rem;
    h2{
        color: #fff;
        font-size: 1.6rem;
        font-weight: bold;
    }
`

export const SubTitle = styled.div`
    margin: .5rem 0rem 0rem 0rem;
    h3{
        color: #fff;
        font-size: 1.3rem;
        font-weight: 200;
    }
    
`