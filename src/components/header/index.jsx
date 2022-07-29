import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { BsFillGearFill } from 'react-icons/bs';
import { MdViewAgenda } from 'react-icons/md';

import { db } from '../../utils/firebase';
import { getDocs, getDoc, collection, doc, addDoc, deleteDoc } from "firebase/firestore";


export const Header = ({Registrar, isAdmin}) => {
    
    const [Admin, setAdmin] = useState(false);
    useEffect(()=>{
        const isAdmin = async ()=>{
            if(JSON.parse(localStorage.getItem('user')).id != '') await getDoc(doc(db, 'users', JSON.parse(localStorage.getItem('user')).id)).then(res => {setAdmin(res.data().admin)});
          }
          isAdmin();
        }, [])
        return (
        <>
            <C.Header><C.Edit onClick={()=>{Registrar()}}><BsFillGearFill/></C.Edit> Academia Residencial do Lago{Admin ? (<C.Admin><MdViewAgenda/></C.Admin>) : null}</C.Header>
        </>

    )
}