import React from 'react';
import * as C from './styles';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';

export const Dia = () => {
    return (

        <C.Container>
            <C.row><FaArrowCircleLeft/></C.row>
            <C.Dia>28/07 Quinta-feira</C.Dia>
            <C.row><FaArrowCircleRight/></C.row>
        </C.Container>

    )
}