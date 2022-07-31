import React, { useEffect, useState } from 'react';
import * as C from './styles';

import { db } from '../../utils/firebase';
import { getDocs, getDoc, collection, doc, addDoc, deleteDoc } from "firebase/firestore";
import { IoMdClose } from 'react-icons/io'

export const Agendas = ({Agendas, onClose}) => {

    // const [Agenda, setAgenda] = useState(Agendas);


    // useEffect(()=>{
        
    //     console.log(Agenda, 'dentro')

    // }, [Agenda])

    return (

        <C.Modal>
        <C.Container>
            <C.Header>

            <C.Title>AGENDAS (Admin) </C.Title> 
            <C.Close onClick={()=>onClose()}><IoMdClose/></C.Close>
            </C.Header>

            <C.Agenda>
                {Agendas.map((item, index) => (<C.Title key={index}>{item.id}</C.Title>))}
            </C.Agenda>

            <C.Buttons>
                <C.Button>Criar agenda</C.Button>
                {/* <C.Button primary ></C.Button> */}
            </C.Buttons>

        </C.Container>
    </C.Modal>

    )
}