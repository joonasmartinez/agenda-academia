import { useEffect } from 'react';
import {React, useState} from 'react';
import { Number } from '../number';
import { getDocs, getDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from '../../utils/firebase'; 
import * as C from './styles';

export const Agendar = ({casa, nome, horario, ModalAgenda, dia, Reload, checkAgendamento, updateAgenda, isOnAgenda, liberarHorario}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [valueInput, setValueInput] = useState(0);
    const [acompanhantes, setAcompanhantes] = useState([{nome, casa}]); //Usuários Gym
    const [warning, setWarning] = useState(false);
    
    const createAcompanhante = ()=>{
        const result = [];
        for(let a=1;a<=valueInput; a++){
            if((dia.data()[horario].length + a) < 3){
                result.push(<C.InputConv key={a} onChange={(name)=>{
                    let data = acompanhantes;
                    data[a] = {nome:name.target.value, casa}
                    setAcompanhantes(data), console.log(acompanhantes)}}
                     placeholder={`Nome acompanhante ${a}`}/>);
            }else{
                return <p>Máximo 3 pessoas por horário!</p>
            }
        }
        return (
            result
        )
    }

    const create = async ()=>{
        let userGym = [];
        for(let a = 0; a <= valueInput; a++){
            // console.log("teste:",acompanhantes[a])
            if(acompanhantes[a]=={casa:user.casa, nome: ""} || acompanhantes[a] == undefined){
                return (setWarning(true), setTimeout(()=>{setWarning(false)}, 4000))
            }
            userGym.push(acompanhantes[a])
        }
        // console.log('Usuarios:',userGym)
        if(await checkAgendamento(userGym, horario)){
            console.log("Criado com sucesso.")
            alert("Reservado com sucesso!")
            // setTimeout(()=>{ModalAgenda(false)},1500)
        }else{
            
            console.log("Horario indisponivel");
        }
    }

    
    return (
            <C.align >
                <C.Agendar >
                    <C.Header>
                        <h4>Agendar horário</h4>
                        <h5>{dia.id.replaceAll('.','/')} - {horario} horas</h5>
                    </C.Header>

                    <C.Section>
                        <C.Dados center>
                            <label><C.b>{`Seu nome:`}</C.b> {user.nome}</label>
                            <label><C.b>{`Sua casa:`}</C.b> {user.casa}</label>
                        </C.Dados>
                        <C.Header>
                            {(dia.data()[horario].length + 1) >= 3 ? <p>Acompanhante indisponível!</p> : 
                            <>
                            <h6>Levar acompanhante com você?</h6>
                            <Number changeValue={(val)=>setValueInput(val)}/>
                            {valueInput > 0 ? <>{createAcompanhante()}</> : <p>Apenas eu irei.</p>}
                            {warning ? <p>Preencha o campo acima</p> : null}
                            </>
                            }

                        </C.Header>
                        <C.Acomp>
                        </C.Acomp>
                        <C.b>Já reservados neste horário: </C.b>{}
                        <C.Dados>{dia.data()[horario].length == 0 ? <C.NomeReser empty>Sem reservas até o momento.</C.NomeReser> : (Object.values(dia.data()[horario].map(nome => <C.NomeReser key={nome}>{nome}</C.NomeReser>)))}</C.Dados>
                    </C.Section>

                        <h6>*Máximo de 3 pessoas por horário.</h6>
                    <C.Footer>
                        {isOnAgenda({name:user.nome, casa:user.casa}, horario) ? <C.Button onClick={()=>{liberarHorario(horario)}}>Liberar horario</C.Button> : dia.data()[horario].length == 3 ? <C.ButtonDisable>Indisponível</C.ButtonDisable> : <C.Button onClick={()=>{create()}}>Confirmar</C.Button>}
                        <C.Button primary onClick={()=>{ModalAgenda(false)}}>Cancelar</C.Button>
                        
                    </C.Footer>

                </C.Agendar>


            </C.align>
    )
}
