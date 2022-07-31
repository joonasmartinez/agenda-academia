import React, { useEffect, useState } from 'react';
import * as C from './styles';

import { db } from '../../utils/firebase';
import { getDocs, getDoc, collection, doc, addDoc, deleteDoc } from "firebase/firestore";
import { IoMdClose } from 'react-icons/io'

export const Agendas = ({Agendas, onClose}) => {

    const [Agenda, setAgenda] = useState([]);

    useEffect(()=>{
        const loadAgenda = async ()=>{
            console.log("Carregando agendas.")
            await getDocs(collection(db, 'agendas')).then(res => res.docs.map(agenda => setAgenda(prev => [...prev, agenda])))
        }
        loadAgenda();
        
        
    }, [])
    useEffect(()=>{
        
        console.log(Agenda, 'dentro')

    }, [Agenda])

    return (

        <C.Modal>
        <C.Container>
            <C.Header>

            <C.Title>AGENDAS (Admin) </C.Title> 
            <C.Close onClick={()=>onClose()}><IoMdClose/></C.Close>
            </C.Header>

            <C.Agenda>
                {Agenda.map((item, index) => (<C.Title key={index}>{item.id}</C.Title>))}
            </C.Agenda>

            <C.Buttons>
                <C.Button>Criar agenda</C.Button>
                <C.Button primary ></C.Button>
            </C.Buttons>

        </C.Container>
    </C.Modal>

    )
}