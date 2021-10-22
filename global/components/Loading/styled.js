import styled from 'styled-components'

export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({ height }) => height ? height : 'auto'};
    padding: ${({ padding }) => padding ? padding : '0rem'};
`
export const Loading = styled.div`
    width: 25px;
    height: 25px;
    border: 3px solid #c3c3c3;
    border-top-color: #000;
    border-radius: 50%;
    animation: rotate .8s linear infinite;


    @keyframes rotate {
        to{
            transform: rotate(0deg)
        }
        from{
            transform: rotate(-360deg)
        }
    }

`