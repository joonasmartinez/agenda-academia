import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { AiOutlineClose } from 'react-icons/ai';
import { db } from '../../utils/firebase';
import { getDoc, collection, doc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore';

export const Registrar = ( {Registro}) => {

    const [nome, setNome] = useState('')
    const [casa, setCasa] = useState('')
    const [id, setId] = useState('')
    const [userActual, setUserActual] = useState({nome, casa, id})

    useEffect(() =>{
        if(localStorage.getItem('user')){
            let user = JSON.parse(localStorage.getItem('user'))
            setNome(user.nome)
            setCasa(user.casa)
            setId(user.id)
            if(id!='')load();

        }
    }, [])
    
    const load = async ()=>{
        
        await getDoc(doc(db, 'users', id)).then(res => {setUserActual(res.data())});
    }
    const check = async ()=>{
        if(!localStorage.getItem('user')){
            await addDoc(collection(db, 'users'), {nome, casa}).then(res => {setId(res.id); localStorage.setItem('user', JSON.stringify({nome, casa, id:res.id}));console.log("Usuário criado com sucesso!")})
        }else{
            try{
                await updateDoc(doc(db, 'users', id), {nome, casa}).then(res => {console.log("Usuário atualizado com sucesso!");localStorage.setItem('user', JSON.stringify({nome, casa, id}))})

            }catch(e){
                console.error("Houve algum problema com a localização de sua conta. Novo ID gerado para você!");
                await addDoc(collection(db, 'users'), {nome, casa}).then(res => {setId(res.id); localStorage.setItem('user', JSON.stringify({nome, casa, id:res.id}));console.log("Usuário criado com sucesso!")})
            }
        }
        console.log({nome, casa, id})
        return Registro({nome, casa, id})
    }

    const close = ()=>{
        return Registro({nome, casa, id})
    }

    return (
        <C.align >
            <C.Agendar >
                <C.Header>
                    {/* <h5>Modal</h5> */}
                    <h4>Confirme seus dados</h4>
                    <AiOutlineClose onClick={close} />
                </C.Header>

                <C.Section>
                    <label>Nome</label>
                    <C.Input type='text' onChange={(e)=>setNome(e.target.value)} placeholder='Ex.: João' value={nome}/>
                    <label>Casa</label>
                    <C.Input type='number' onChange={(e)=>setCasa(e.target.value)} placeholder='Ex.: 12' value={casa}/>
                    <label>Unique ID</label>
                    <C.Input disabled type='text' placeholder='Não possui ID' value={id}/>

                </C.Section>

                <C.Footer>
                    <C.Button onClick={()=>check()}>Confirmar</C.Button>
                </C.Footer>

            </C.Agendar>
        </C.align>
    )
}