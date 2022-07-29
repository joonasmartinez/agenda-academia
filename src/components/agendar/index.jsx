import {React, useState} from 'react';
import * as C from './styles';

export const Agendar = ({casa, nome, horario, ModalAgenda}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    return (
        <C.align >
            <C.Agendar >
                <C.Header>
                    <h4>Agendar horário - Confirmação</h4>
                </C.Header>

                <C.Section>
                    <C.b>29/7 - Sexta-feira - {horario} Horas</C.b>
                    <label><C.b>{`Seu nome:`}</C.b> {user.nome}</label>
                    <label><C.b>{`Sua casa:`}</C.b> {user.casa}</label>
                    <label>Acompanhante: </label>
                    <C.Input placeholder='Quem vai acompanhar você?'/>
                    <C.b>Já reservados neste horário: </C.b><label>João, 14; Fátima, 16;</label>
                </C.Section>

                <C.Footer>
                    <C.Button>Confirmar</C.Button>
                    <C.Button primary onClick={()=>ModalAgenda(false)}>Cancelar</C.Button>
                </C.Footer>

            </C.Agendar>
        </C.align>
    )
}
