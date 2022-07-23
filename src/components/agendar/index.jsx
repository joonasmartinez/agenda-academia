import React from 'react';
import * as C from './styles';

export const Agendar = ({casa, nome, horario, ModalAgenda}) => {
    return (
        <C.align >
            <C.Agendar >
                <C.Header>
                    {/* <h5>Modal</h5> */}
                    <h4>Agendar horário - Confirmação</h4>
                </C.Header>

                <C.Section>
                    <label>{`Seu nome: ${nome}`}</label>
                    <label>{`Sua casa: ${casa}`}</label>
                    <label>{`Agendar horário: ${horario}`}</label>
                    <label>Acompanhante: </label>
                    <C.Input placeholder='Nome(s) acompanhante(s)'/>

                </C.Section>

                <C.Footer>
                    <C.Button>Confirmar</C.Button>
                    <C.Button primary onClick={()=>ModalAgenda(false)}>Cancelar</C.Button>
                </C.Footer>

            </C.Agendar>
        </C.align>
    )
}