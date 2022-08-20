import {React, useState} from 'react';
import { Number } from '../number';
import * as C from './styles';

export const Agendar = ({casa, nome, horario, ModalAgenda, dia, Reload}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [valueInput, setValueInput] = useState(0);

    const createAcompanhante = ()=>{
        const result = [];
        for(let a=1;a<=valueInput; a++){
            if((dia.data()[horario].length + a) < 3){
                console.log(dia.data()[horario].length,a)
                result.push(<C.InputConv placeholder={`Nome acompanhante ${a}`}></C.InputConv>);
            }else{
                return <p>Máximo 3 pessoas por horário!</p>
            }
        }
        return (
            result
        )
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
                            {valueInput > 0 ? <>{createAcompanhante()}</> : <p>Irei sozinho</p>}
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
                        {dia.data()[horario].length == 3 ? <C.ButtonDisable>Indisponível</C.ButtonDisable> : <C.Button onClick={()=>{}}>Confirmar</C.Button>}
                        <C.Button primary onClick={()=>ModalAgenda(false)}>Cancelar</C.Button>
                    </C.Footer>

                </C.Agendar>


            </C.align>
    )
}
