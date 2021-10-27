import styled from 'styled-components'

export const User = styled.header`
    padding: .5rem 0rem;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    align-items: center;
    margin: .2rem 0rem 0rem 0rem;
`
export const UserImage = styled.div`
    display: flex;
    img{
        border-radius: 50%;
        width: 50px;
        height: 50px;  
    }
    :after{
        display: block;
        transform: translate(-18px, 35px);
        border-radius: 50%;
        border: 1px solid #fff;
        content: ' ';
        width: 15px;
        height: 15px;
        background: #3fc5b7;
    }
`
export const UserName = styled.div`
    margin: 0rem 0rem 0rem -.4rem;
`