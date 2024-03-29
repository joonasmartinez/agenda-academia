import styled from "styled-components";

export const Dia = styled.header`
    position: relative;
    bottom: 0%;
    display: flex;
    justify-content: center;
    margin: 3rem;
    color:white;
    animation: ${props => props.noAnim ? 'none' : 'start 0.6s ease'};
    @keyframes start {
        from{
            opacity: 0;
            left:-50px
        }
        to{
            opacity: 1;
            left:0px;
        }
    }

`
export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    height:25px;
    width: 100%;
    background-color: #307e9c;
    color:white;
`

export const row = styled.button`
    background-color:transparent;
    outline:none;
    border:none;
    color:white;
    cursor: pointer;
    padding: 8px;
    position:relative;
`