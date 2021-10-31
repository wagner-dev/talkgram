import styled from 'styled-components'

export const Body = styled.div`
    height: 76vh;
`

export const ItemMessage = styled.div`
    width: ${({ type_message }) => 
           type_message ? '100%' : 'auto'};

    padding: 0rem;
    display: flex;
    margin: .4rem 0rem 0rem 0rem;
    justify-content: ${({ type_message }) => 
                     type_message ? 'flex-end': 'flex-start'};
`

export const ItemMessageImage = styled.div`
    display: flex;
    align-items: ${({ type_message }) => 
                     type_message ? 'flex-end': 'flex-start'};
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`

export const ItemMessageContent = styled.div`
    width: 100%;
    padding: 1rem 1rem;
    background: ${({ type_message }) => 
                   type_message ? 'var(--color-primary)': '#f5f7fc'};

    border-radius: ${({ type_message }) => 
                   type_message ? '15px 15px 0px 15px': '0px 15px 15px 15px '};
    
    color: ${({ type_message }) => 
                   type_message ? '#fff': '#000'};
`

export const ItemMessageDate = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: ${({ type_message }) => 
            type_message ? 'none' : '0rem -1.8rem 0rem 0rem'};
    color: #9c9c9c;
    span{
        font-size: .775rem !important;
    }
`

export const ItemContent = styled.div`
    margin: ${({ type_message }) => 
            type_message ? '.2rem 2.5rem 0rem 0rem' : '.2rem 0rem 0rem .5rem'};
    max-width: calc( 70% - 50px);

    @media only screen and (max-width: 620px){
        max-width: calc( 80% - 50px);
    }
`

export const ItemMessageName = styled.div`
    margin: ${({ type_message }) => 
            type_message ? '0rem -1.5rem 0rem 0rem' : 'none'};
    display: flex;
    justify-content: ${({ type_message }) => 
                    type_message ? 'flex-end' : 'flex-start'};
`


export const ItemMessageData = styled.div`
    display: flex;
    justify-content: space-between;
`