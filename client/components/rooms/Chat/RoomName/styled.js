import styled from 'styled-components'

export const Body = styled.footer`
    height: 10vh;
    display: flex;
    align-items: center;
    padding: 0rem 1rem;
    background: var(--color-primary);
    /* border-radius: 25px 25px 0px 0px; */
    @media only screen and (max-width: 620px) {
        border-radius: 0px;
    }
`

export const Name = styled.div`
    h2{
        font-size: 1.475rem;
        color: #fff;
    }
`