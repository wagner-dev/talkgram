import styled from 'styled-components'

export const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
`

export const AlertContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const AlertMessage = styled.div`
    padding: .5rem;
    background: var(--color-primary);
    border-radius: 8px;
    max-width: 90%;
    text-align: center;
    span{
        color: #fff;
    }
`

export const AlertDate = styled.div`
    display: flex;
    justify-content: flex-end;
    color: #9c9c9c;
    span{
        font-size: .775rem !important;
    }
`