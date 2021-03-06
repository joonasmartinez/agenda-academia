import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';

export const Dia = ({getDia, NextDia, PrevDia}) => {

    const [dia, setDia] = useState('');

    useEffect(()=>{
        try{
            setDia(getDia.id)

        }catch{
            setDia('loading...')

        }
    }, [getDia])

    return (

        <C.Container>
            <C.row><FaArrowCircleLeft onClick={()=>{PrevDia()}}/></C.row>
            <C.Dia key={dia}>{dia != 'loading...' ? dia : ''}</C.Dia>
            <C.row><FaArrowCircleRight onClick={()=>{NextDia()}}/></C.row>
        </C.Container>

    )
}