import styled from "styled-components";

export const Header = styled.header`
    position: relative;
    bottom: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3791b4;
    height:50px;
    width: 100%;
    color:white;
`;

export const Edit = styled.h3`

    position:absolute;
    left: 1em;
    color:white;
    font-size:1em;
    cursor: pointer;


`;

export const Admin = styled.h5`
    position:absolute;
    right: 1em;
    color:white;
    font-size:1.3em;
    cursor: pointer;
    padding:5px;
    animation: startAdmin 1s forwards ease;
    @keyframes startAdmin {
        from{
            opacity: 0;
            top:0em;
            right: 1em;
        }to{
            opacity: 1;
            top:0.7em;
            right:1em;
        }
    }

`
