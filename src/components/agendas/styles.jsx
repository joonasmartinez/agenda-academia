import styled from "styled-components";

export const Modal = styled.div`

    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    width: 100vw;
    height: 100vh;
    background-color:#03030396;

`

export const Container = styled.div`
    width: 50%;
    height: auto;
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-radius: 15px;
`

export const Title = styled.header`
    margin: 15px;
`
export const Agenda = styled.section`
    width: 100%;
    max-height: 70vh;
    height:50%;
    border-bottom: 1px solid grey;
    border-top: 1px solid grey;
    margin: 5px;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        width: 2px;
    }
`

export const Close = styled.div`
    position:relative;
    padding: 15px;
    cursor: pointer;
`
export const Header = styled.footer`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const Buttons = styled.footer`
    margin: 15px;
`

export const Button = styled.button`
    background: ${props => props.primary ? "white" : "#307e9c"};
    color: ${props => props.primary ? "#307e9c" : "white"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #307e9c;
    border-radius: 3px;
    cursor: pointer;

    :hover{
        background: ${props => props.primary ? "#e9e9e9" : "#286983"};
    }
`
export const quadroHorario = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:90%;
    flex-wrap:wrap;
`
    

export const horario = styled.h4`
    margin: 1px;
    padding: 5px;
    border-radius: 15px;
    background-color: #80808024;
    cursor: pointer;
    :active{
        background-color:blue;
    }
`

export const input = styled.input`
outline:none;
width:30%;
height:1.3rem;
text-align:center;
border: 1px solid grey;
margin:5px;

`