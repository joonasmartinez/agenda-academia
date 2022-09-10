import React, { useEffect } from 'react';
import { useState } from 'react';
import * as C from './styles';

export const Horarios = ({Modal, getData, getHoras}) => {
    
    const [data, setData] = useState(getHoras)
    const [horarios, setHorarios] = useState([]);
    const [reservados, setReservados] = useState(['']);

    useEffect(()=>{
        if(getHoras != undefined) {
            setData(getHoras); 
            setHorarios(getHoras[1].horarios)
        }
    }, [getHoras])

    return (
        <>
           {/* {data != undefined ? <C.Organize>{}{horarios.map((item, index) => <C.horas onClick={()=>{Modal(true); getData(item)}} key={item}>{item}<C.agendamentos>{reservados[index].length}</C.agendamentos></C.horas> )}</C.Organize> : null} */}
            { horarios != [] ? <C.Organize>{}{Object.keys(horarios).map((item) => <C.horas onClick={()=>{try{Modal(true); getData(item)}catch(e){return <C.horas>Não foi possivel carregar agenda</C.horas>}}} key={item}>{item}<C.agendamentos key={item.length}>{horarios[item] != '' ? horarios[item].length : 0}</C.agendamentos></C.horas> )}</C.Organize> : null}
        </>
        

    )
}