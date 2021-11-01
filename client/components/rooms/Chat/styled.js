import styled from 'styled-components'

export const Body = styled.article`
    border-radius: 25px 25px 0px 0px;
    width: 70%;
    background: #fff;
    box-shadow: 0px 0px 10px 5px #f1f1f1;


    @media only screen and (max-width: 920px){
        width: 80%;
        box-shadow: none;
        border-radius: none;
    }
    
    @media only screen and (max-width: 820px){ width: 100%; }
    
`

export const RoomName = styled.header`
    
`