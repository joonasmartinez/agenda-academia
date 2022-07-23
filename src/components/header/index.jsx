import React from 'react';
import * as C from './styles';

export const Header = ({Registrar}) => {
    return (
        <>
            
            <C.Header><C.Edit onClick={()=>{Registrar()}}>Alterar</C.Edit> Academia Residencial do Lago</C.Header>
        </>

    )
}