import styled from "styled-components";

export const Container = styled.div`

    width:100vw;
    height:100vh;
    background-color:#0000008b;
    color:white;
    position:absolute;
    padding:5px;
    display:flex;

`
export const Itens = styled.div`

    width:100%;
    height:100%;
    color:white;
    display:flex;
    flex-direction:column;

`
export const labelNumber = styled.label`
    font-size:1rem;
`

export const InputNumber = styled.input`

    width:20%;
    height:5%;
    padding:5px;
    font-size:1.5rem;
    ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`