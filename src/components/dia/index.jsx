import React from 'react';
import * as C from './styles';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';

export const Dia = () => {
    return (

        <C.Container>
            <FaArrowCircleLeft/>
            <C.Dia>28/07 Quinta-feira</C.Dia>
            <FaArrowCircleRight/>
        </C.Container>

    )
}