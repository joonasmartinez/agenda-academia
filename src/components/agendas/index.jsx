import React, { useEffect, useState } from 'react';
import * as C from './styles';

import { db } from '../../utils/firebase';
import { getDocs, getDoc, setDoc, collection, doc, addDoc, deleteDoc } from "firebase/firestore";
import { IoMdClose } from 'react-icons/io'

export const Agendas = ({Agendas, onClose, Reload}) => {

    const [criarOn, setCriaron] = useState(false)
    const [horariosToAdd, setHorariosToAdd] = useState({'01:00':[],'02:00':[],'03:00':[],'04:00':[],'05:00':[],'06:00':[],'07:00':[],'08:00':[],'09:00':[],'10:00':[],'11:00':[],'12:00':[],'13:00':[],'14:00':[],'15:00':[],'16:00':[],'17:00':[],'18:00':[],'19:00':[],'20:00':[],'21:00':[],'22:00':[],'23:00':[],'00:00':[]})
    let horariosAdd = {'00:00':[]};
    const createAgenda = async (date)=>{
        await setDoc(doc(db, "agendas", date), horariosAdd);
        console.log("Criando agenda",date)
        Reload();
    }

    const nextAgenda = ()=>{

        const date = Agendas[Agendas.length-1].id.split('.')
        try{
            let d = new Date(`${date[1]}/${Number(date[0])}/${date[2]}`)
            d.setDate(d.getDate()+1)
            return d.toLocaleDateString('pt').replaceAll('/', '.')
        }
        catch(e){
            console.log("Erro ao gerar data da agenda.")
        }
    }


    return (

        <C.Modal>
        <C.Container>
            <C.Header>

            <C.Title>AGENDAS (Admin) </C.Title> 
            <C.Close onClick={()=>onClose()}><IoMdClose/></C.Close>
            </C.Header>

            {criarOn ? (
                <>
                <h3>{nextAgenda()}</h3>
                <C.Title>Deseja remover algum horário? Basta clicar nele.</C.Title>
                <C.quadroHorario>{Object.keys(horariosToAdd).map(item => <C.horario>{item}</C.horario>)}</C.quadroHorario><C.Button onClick={()=>{setCriaron(false); createAgenda(nextAgenda())}}>Criar agenda</C.Button>
                
                </>
            ) : 
            
            (<C.Agenda>
                {Agendas.map((item, index) => (<C.Title key={index}>{item.id}</C.Title>))}
            </C.Agenda>)
        }


            <C.Buttons>
                <C.Button onClick={()=>{setCriaron(true); nextAgenda()}}>Gerar nova Agenda</C.Button>
                <C.Button primary onClick={()=>{setCriaron(false)}} >Exibir Agendas</C.Button>
            </C.Buttons>

        </C.Container>
    </C.Modal>

    )
}