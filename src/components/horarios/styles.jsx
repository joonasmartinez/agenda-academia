import styled from "styled-components";

export const Organize = styled.div`
    margin-top: 15px;
    width:100%;
    height:90vh;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:start;
    /* background-color:grey; */
`;
export const horas = styled.h4`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:white;
    width:20%;
    max-height:100%;
    border-radius:10px;
    border-left: 1px solid #307e9c;
    margin:5px;
    box-shadow:0 0 3px 0.5px #00000028;
    cursor: pointer;
    :hover{
        animation: borda 0.3s forwards ease;
        @keyframes borda {
            from{
                border-left:1px solid #307e9c;

            }to{
                border-left:5px solid #307e9c;
            }
        }
        color:grey;
    }

    @media screen and (max-width: 500px) {
        width:80%;
    }
`;

export const agendamentos = styled.div`
    width: 15px;
    height: 15px;
    padding: 5px;
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