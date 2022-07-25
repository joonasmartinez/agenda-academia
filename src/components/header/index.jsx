import React from 'react';
import * as C from './styles';
import { BsFillGearFill } from 'react-icons/bs';

export const Header = ({Registrar}) => {
    return (
        <>
            
            <C.Header><C.Edit onClick={()=>{Registrar()}}><BsFillGearFill/></C.Edit> Academia Residencial do Lago</C.Header>
        </>

    )
}