import styled from "styled-components";

export const Modal = styled.div`
    width: 100%;
    height:50%;
    /* background-color:green; */
    position:relative;
    overflow:hidden;
    display:flex;
    justify-content:center;
    column-gap: 1em;
    align-items:center;
    font-size: 1em;
    color:black;
`
export const Button = styled.button`
    width: 100%;
    height:100%;
    outline: none;
    background-color:transparent;
    border:none;
    cursor: pointer;
    font-size: 1.2em;

`

export const Input = styled.input`
    color:black;
    font-size:1rem;
    width:100%;
    text-align:center;
    border:none;
`