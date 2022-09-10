import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';

export const Dia = ({getDia, NextDia, PrevDia}) => {

    const [dia, setDia] = useState('');
    useEffect(()=>{
        try{
            setDia(getDia[0])
            // console.log(getDia.dia)

        }catch{
            // setDia(dia)

        }
    }, [getDia])

    return (

        <C.Container>
            <C.row><FaArrowCircleLeft onClick={()=>{PrevDia()}}/></C.row>
            {dia != 'loading...' ? <C.Dia key={dia}>{dia.replaceAll('-',' . ')}</C.Dia> : <C.Dia key={dia} noAnim>{dia}</C.Dia>}
            <C.row><FaArrowCircleRight onClick={()=>{NextDia()}}/></C.row>
        </C.Container>

    )
}