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
    align-items:center;
    justify-content:center;
    background-color:white;
    width:20%;
    height:100%;
    border-radius:10px;
    margin:5px;
    box-shadow:0 0 3px 0.5px #00000028;
    cursor: pointer;
    :hover{
        color:grey;
    }

    @media screen and (max-width: 500px) {
        width:80%;
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