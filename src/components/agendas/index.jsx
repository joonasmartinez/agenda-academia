import React, { useEffect, useState } from 'react';
import * as C from './styles';

import { db } from '../../utils/firebase';
import { getDocs, getDoc, setDoc, collection, doc, addDoc, deleteDoc, deleteField, updateDoc } from "firebase/firestore";
import { IoMdClose } from 'react-icons/io'
import { BsPencilFill } from 'react-icons/bs'

export const Agendas = ({Agendas, onClose, Reload}) => {

    const [editingAgenda, setEditingAgenda] = useState('');
    const [criarOn, setCriaron] = useState(false)
    const [editOn, setEditon] = useState(false);
    const [agendaToEdit, setAgendaToEdit] = useState('');
    const [horariosToAdd, setHorariosToAdd] = useState({'00:00':[],'01:00':[],'02:00':[],'03:00':[],'04:00':[],'05:00':[],'06:00':[],'07:00':[],'08:00':[],'09:00':[],'10:00':[],'11:00':[],'12:00':[],'13:00':[],'14:00':[],'15:00':[],'16:00':[],'17:00':[],'18:00':[],'19:00':[],'20:00':[],'21:00':[],'22:00':[],'23:00':[]})
    const [msgErro, setMsgErro] = useState('');
    let horariosAdd = {'01:00':[],'02:00':[],'03:00':[],'04:00':[],'05:00':[],'06:00':[],'07:00':[],'08:00':[],'09:00':[],'10:00':[],'11:00':[],'12:00':[],'13:00':[],'14:00':[],'15:00':[],'16:00':[],'17:00':[],'18:00':[],'19:00':[],'20:00':[],'21:00':[],'22:00':[],'23:00':[],'00:00':[]};
    
    const createAgenda = async (date)=>{

        if(Object.entries(horariosToAdd).length === 0)  { 
            setTimeout(()=>{setMsgErro(""); setHorariosToAdd(horariosAdd);}, 3000); 
             return setMsgErro("Agenda não pode estar vazia. Agenda será resetada.")
        }

        await setDoc(doc(db, "agendas", date), horariosToAdd).then(()=>{setCriaron(false);
        Reload();});
        
    }
    const update = (data)=>{
        let newState = horariosToAdd;
        if(horariosToAdd[data]) {
            let newState = {...horariosToAdd}
            delete newState[data];
            setHorariosToAdd(newState)

        }else{

        }
    }
    const updateEdit = (data)=>{
        let newState = agendaToEdit;
        if(agendaToEdit[data]) {
            newState = {...agendaToEdit}
            delete newState[data];
            setAgendaToEdit(newState)

        }else{
            newState = {...agendaToEdit}
            newState[data]=[];
            setAgendaToEdit(newState)
        }
    }

    const AgendaEdit = async (agenda)=>{
        setEditingAgenda(agenda);
        await getDoc(doc(db, 'agendas', agenda)).then(agenda => setAgendaToEdit(agenda.data()));
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
                <C.Title>Administração</C.Title> 
                <C.Close onClick={()=>{onClose();Reload()}}><IoMdClose/></C.Close>
            </C.Header>
            {editOn && !criarOn && <>
            
                <>
                <C.Title>EDITANDO AGENDA {editingAgenda}</C.Title>
                {agendaToEdit == '' ?  <C.Title>Carregando...</C.Title> : (
                    <>
                    <C.Title>Horarios da agenda - Clique para remover</C.Title>
                    <C.quadroHorario>{Object.keys(agendaToEdit).sort().map(item => <><C.horario onClick={()=>{updateEdit(item)}}>{item}</C.horario></>)}</C.quadroHorario>
                    <C.Title>Deseja adicionar novo horário? - Clique para adicionar</C.Title>
                    <C.quadroHorario>{Object.keys(horariosToAdd).map(item =><C.horario onClick={()=>{updateEdit(item)}}>{item}</C.horario>)}</C.quadroHorario>
                    <C.Button onClick={()=>{setDoc(doc(db, 'agendas', editingAgenda), agendaToEdit);Reload()}}>Confirmar</C.Button>
                    </>
                )}
                </>
            
            </>}
            {criarOn && (
                <>
                <h3>{nextAgenda().replaceAll('.','/')}</h3>
                <C.Title>Deseja remover algum horário? Basta clicar nele.</C.Title>
                    <C.quadroHorario>{Object.keys(horariosToAdd).map(item =>  
                        <C.horario key={item} onClick={()=>{ update(item) }}>
                            {item}
                        </C.horario>)}
                    </C.quadroHorario>
                    <C.Button onClick={()=>{createAgenda(nextAgenda())}}>Criar agenda</C.Button>
                {msgErro != '' ? <C.Title>{msgErro}</C.Title> : null}
                
                </>
            ) }
            {!criarOn && !editOn &&
            (<C.Agenda>
                <C.agendas column>{Agendas.map((item, index) => (
                    <C.agendas key={index}  >

                        <C.horario >{item.id}</C.horario> 

                        <C.horario><IoMdClose onClick={()=>{if(confirm("deseja realmente excluir esta agenda?")) {deleteDoc(doc(db, 'agendas', item.id));Reload();}}}/></C.horario>

                        <C.horario><BsPencilFill onClick={()=> {setEditon(true); AgendaEdit(item.id)} }/></C.horario> 

                    </C.agendas>))}
                </C.agendas>
            </C.Agenda>)
        }


            <C.Buttons>
                <C.Button onClick={()=>{setCriaron(true); nextAgenda(); setEditon(false)} }>Gerar nova Agenda</C.Button>
                <C.Button primary onClick={()=>{setCriaron(false);setEditon(false)}} >Exibir Agendas</C.Button>
            </C.Buttons>

        </C.Container>
    </C.Modal>

    )
}