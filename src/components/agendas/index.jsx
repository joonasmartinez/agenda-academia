import React, { useEffect, useState } from 'react';
import * as C from './styles';

import { db } from '../../utils/firebase';
import { getDocs, getDoc, setDoc, collection, doc, addDoc, deleteDoc } from "firebase/firestore";
import { IoMdClose } from 'react-icons/io'

export const Agendas = ({Agendas, onClose, Reload}) => {

    const [criarOn, setCriaron] = useState(false)
    const [horariosToAdd, setHorariosToAdd] = useState({'01:00':[],'02:00':[],'03:00':[],'04:00':[],'05:00':[],'06:00':[],'07:00':[],'08:00':[],'09:00':[],'10:00':[],'11:00':[],'12:00':[],'13:00':[],'14:00':[],'15:00':[],'16:00':[],'17:00':[],'18:00':[],'19:00':[],'20:00':[],'21:00':[],'22:00':[],'23:00':[],'00:00':[]})
    const [adicionar , setAdicionar] = useState(0);
    const createAgenda = async (date)=>{
        const InfoDate = new Date();
        await setDoc(doc(db, "agendas", date), horariosToAdd);
        console.log("Criando agenda",date)
        Reload();
    }

    const nextAgenda = ()=>{
        const date = Agendas[Agendas.length-1].id.split('.')
        console.log(date)
        // const date = '01.08.2022'.split('.')
        try{
            if(new Date(`${date[1]}/${Number(date[0])+adicionar}/${date[2]}`).toLocaleDateString('pt') == 'Invalid Date') { setAdicionar(adicionar+1), console.log(adicionar)}; 
            console.log(new Date(`${date[1]}/${Number(date[0])+adicionar}/${date[2]}`).toLocaleDateString('pt'), 'à criar')
            createAgenda(new Date(`${date[1]}/${Number(date[0])+adicionar}/${date[2]}`).toLocaleDateString('pt').replaceAll('/', '.'))
        }
        catch(e){
            console.log("Nao deu")
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
                <C.Title>{Agendas.map(item => <h2>{item.id}</h2>)}</C.Title>
                
                </>
            ) : 
            
            (<C.Agenda>
                {Agendas.map((item, index) => (<C.Title key={index}>{item.id}</C.Title>))}
            </C.Agenda>)
        }


            <C.Buttons>
                <C.Button onClick={()=>{setCriaron(true); nextAgenda()}}>Nova Agenda</C.Button>
                <C.Button primary onClick={()=>{setCriaron(false)}} >Exibir Agendas</C.Button>
            </C.Buttons>

        </C.Container>
    </C.Modal>

    )
}