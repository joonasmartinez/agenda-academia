import React from 'react';
import { useState } from 'react';
import * as C from './styles';

export const Horarios = ({Modal, getData}) => {
    const [horas, setHoras] = useState(
        [
            {hora:'06:00', agendados:[{nome:'', casa:''}, {nome:'', casa:''}, {nome:'', casa:''}]},
            {hora:'07:00', agendados:[{nome:'', casa:''}]},
            {hora:'08:00', agendados:[{nome:'', casa:''}]},
            {hora:'09:00', agendados:[{nome:'', casa:''}]},
            {hora:'10:00', agendados:[{nome:'', casa:''}, {nome:'', casa:''}]},
            {hora:'11:00', agendados:[{nome:'', casa:''}]},
            {hora:'12:00', agendados:[{nome:'', casa:''}]},
            {hora:'13:00', agendados:[{nome:'', casa:''}]},
            {hora:'14:00', agendados:[{nome:'', casa:''}, {nome:'', casa:''}]},
            {hora:'15:00', agendados:[{nome:'', casa:''}]},
            {hora:'16:00', agendados:[{nome:'', casa:''}, {nome:'', casa:''}]},
            {hora:'17:00', agendados:[{nome:'', casa:''}]},
            {hora:'18:00', agendados:[{nome:'', casa:''}]},
            {hora:'19:00', agendados:[{nome:'', casa:''}, {nome:'', casa:''}, {nome:'', casa:''}]},
            {hora:'20:00', agendados:[{nome:'', casa:''}]},
            {hora:'21:00', agendados:[{nome:'', casa:''}]},
            {hora:'22:00', agendados:[{nome:'', casa:''}]},
            {hora:'23:00', agendados:[{nome:'', casa:''}]},
            {hora:'00:00', agendados:[{nome:'', casa:''}]},
        ]
        );


    return (
        <>
           <C.Organize>{horas.map(item => <C.horas onClick={()=>{Modal(true); getData(item)}} key={item.hora}>{item.hora}<C.agendamentos>{item.agendados.length}</C.agendamentos></C.horas> )}</C.Organize>
        </>
        

    )
}