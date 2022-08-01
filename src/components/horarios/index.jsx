import React, { useEffect } from 'react';
import { useState } from 'react';
import * as C from './styles';

export const Horarios = ({Modal, getData, getHoras}) => {
    
    const [data, setData] = useState([])
    const [hora, setHora] = useState(['01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00', '00:00'])
    const [horarios, setHorarios] = useState([]);
    const [reservados, setReservados] = useState(['']);

    useEffect(()=>{
        if(getHoras != undefined) setData(getHoras)
        setHorarios([])
        setReservados([])
        
    }, [getHoras])
    
    useEffect(()=>{
        try{
            
            hora.forEach((item) => {
                if(data.data()[item]) {
                    // console.log(data.data()[item])
                    // console.log(reservados[index])
                    setHorarios(prev => [...prev, item])}
                    if(data.data()[item] != undefined) setReservados(prev => [...prev, data.data()[item]])
                    
            })

            
        }catch{}
    }, [data])
    
    useEffect(()=>{
    }, [horarios])

    return (
        <>
           {data != undefined ? <C.Organize>{}{horarios.map((item, index) => <C.horas onClick={()=>{Modal(true); getData(item)}} key={item}>{item}<C.agendamentos>{reservados[index].length}</C.agendamentos></C.horas> )}</C.Organize> : null}
        </>
        

    )
}