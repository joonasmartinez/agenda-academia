import styled from "styled-components";

export const Organize = styled.div`
    margin-top: 15px;
    width:100%;
    height:90vh;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-between;
    /* background-color:grey; */
`;
export const horas = styled.h4`
    display:flex;
    cursor: pointer;
    :hover{
        color:grey;
    }
`;

export const agendamentos = styled.div`
    width: 15px;
    height: 15px;
    position:relative;
    bottom:10px;
    border-radius: 50%;
    background-color:#307e9c;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    font-size:0.7rem;
`;