import styled from "styled-components";

export const Agendar = styled.div`
    position:relative;
    border-radius:15px;
    min-width:300px;
    min-height: 300px;
    background-color:white;
    display:flex;
    flex-direction:column;
    animation: 0.3s entrada ease;
    box-shadow: 1px 1px 10px 0px black;
    
    @media screen and (max-width: 500px) {
        width:90%;
        min-height:40%;
    }

    @keyframes entrada {
        from{
            left:-20px;
            opacity: 0;
        }
        to{
            opacity: 1;
            left:0px;
        }
    }
    
`;

export const align = styled.div`
    font-size: 1em;
    width: 100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    background-color: rgba(0, 0, 0, 0.05);
    z-index:1;

`

export const Input = styled.input`
    width: 100%;
    height: 2em;
    outline:none;
    border: 1px solid grey;
    text-align:center;
    margin: 10px 0px 5px 0px;
    border-radius: 15px;

`
export const b = styled.b`
    text-align:center;
`

export const Header = styled.header`
    width:100%;
    height:auto;
    padding: 10px;
    display:flex;
    gap: 10px;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const Section = styled.section`
    width:100%;
    height:100%;
    padding: 15px;
    border-top: 0.5px groove #6e6e6e60;
    border-bottom: 0.5px groove #6e6e6e60;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    /* align-items:flex-start; */
    background-color:white;
`
export const Footer = styled.footer`
    width:100%;
    height:auto;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
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
export const ButtonDisable = styled.button`

    background: #696969;
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #696969;
    border-radius: 3px;
`
export const Dados = styled.div`
    display:flex;
    justify-content:${props => props.center ? 'center' : 'start'};
    gap:20px;
    align-items:center;
    margin-bottom:10px;
`
export const Acomp = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items:center;
    margin-bottom:10px;
`
export const NomeReser = styled.div`
    background-color:${props => props.empty ? '' : '#ebebeb'};
    padding:5px;
    border-radius: 15px;
    overflow-x:hidden;
    overflow-y:hidden;
`

export const InputConv = styled.input`
    font-size:1rem;
    color:black;
    outline:none;
    padding:2%;
    margin:1%;
    border-radius:15px;
    width:100%;
`