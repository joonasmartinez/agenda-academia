import styled from "styled-components";

export const Agendar = styled.div`
    width:50%;
    height:50%;
    min-width: 300px;
    background-color:white;
    display:flex;
    flex-direction:column;
    z-index:0;
    animation: 1s entrada ease;
    
    @media screen and (max-width: 500px) {
        width:100%;
    }
    
    @media screen and (min-width: 500px) {
        width:25%;
        height: 25%;
        top:50%;
    }
    @keyframes entrada {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    
`;

export const align = styled.div`
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
    height: 2em;
`

export const Header = styled.header`
    width:100%;
    height:25%;
    padding: 0 5px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const Section = styled.section`
    width:100%;
    height:100%;
    padding: 15px;
    border-top: 0.5px groove #6e6e6e60;
    border-bottom: 0.5px groove #6e6e6e60;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    flex-wrap:wrap;
`
export const Footer = styled.footer`
    width:100%;
    height:25%;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
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