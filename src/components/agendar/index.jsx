import {React, useState} from 'react';
import { Number } from '../number';
import * as C from './styles';

export const Agendar = ({casa, nome, horario, ModalAgenda, dia, Reload}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [acompanhante, setAcompanhante] = useState(false);
    const [value, setValue] = useState(0);

    const show = (value)=>{
        console.log("val",value)
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
                            <Number hidden showValue={(val)=>show(val)}/>
                            {console.log("Valor:", value)}
                            
                            {/* <label><input type='number' onChange={()=>{setAcompanhante(!acompanhante)}}></input> Levar acompanhante? </label>
                            {acompanhante ? <C.Input maxLength={10} placeholder='Quem vai acompanhar você?'/> : null} */}
                        <C.Acomp>
                        </C.Acomp>
                        <C.b>Já reservados neste horário: </C.b>{}
                        <C.Dados>{dia.data()[horario].length == 0 ? <C.NomeReser empty>Sem reservas até o momento.</C.NomeReser> : (Object.values(dia.data()[horario].map(nome => <C.NomeReser key={nome}>{nome}</C.NomeReser>)))}</C.Dados>
                    </C.Section>

                        <h6>*Máximo de 3 pessoas por horário.</h6>
                    <C.Footer>
                        <C.Button onClick={()=>{}}>Confirmar</C.Button>
                        <C.Button primary onClick={()=>ModalAgenda(false)}>Cancelar</C.Button>
                    </C.Footer>

                </C.Agendar>


            </C.align>
    )
}
