import {React, useState} from 'react';
import * as C from './styles';

export const Agendar = ({casa, nome, horario, ModalAgenda, dia}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [acompanhante, setAcompanhante] = useState(0);
    return (
            <C.align >
                <C.Agendar >
                    <C.Header>
                        <h4>Agendar horário</h4>
                        <h5>{dia.id.replaceAll('.','/')} - {horario} horas</h5>
                    </C.Header>

                    <C.Section>
                        <C.Dados>
                            <label><C.b>{`Seu nome:`}</C.b> {user.nome}</label>
                            <label><C.b>{`Sua casa:`}</C.b> {user.casa}</label>
                        </C.Dados>
                            <label><input type='checkbox'></input> Levar acompanhante? </label>
                            {}
                        <C.Acomp>
                            {/* <C.Input placeholder='Quem vai acompanhar você?'/> */}
                        </C.Acomp>
                        <C.b>Já reservados neste horário: </C.b>{}
                        <C.Dados>{dia.data()[horario].length == 0 ? <C.NomeReser>Sem reservas até o momento.</C.NomeReser> : (Object.values(dia.data()[horario].map(nome => <C.NomeReser>{nome}</C.NomeReser>)))}</C.Dados>
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
