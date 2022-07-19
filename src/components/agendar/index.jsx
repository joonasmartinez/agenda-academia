import React from 'react';
import * as C from './styles';

export const Agendar = () => {
    return (
        
        <C.align onClick={()=> alert("Saiu")}>
            <C.Agendar >
                <C.Header>
                    {/* <h5>Modal</h5> */}
                    <h4>Agendar horário - Confirmação</h4>
                    <h2> X </h2>
                </C.Header>

                <C.Section>
                    <label>Seu nome: João Rodrigues</label>
                    <label>Sua casa: 44</label>
                    <label>Agendar para o horários das: 13:00</label>
                    <label>Acompanhante: </label>
                    <C.Input placeholder='Nome(s) acompanhante(s)'/>

                </C.Section>

                <C.Footer>
                    <C.Button>Confirmar</C.Button>
                    <C.Button primary>Cancelar</C.Button>
                </C.Footer>

            </C.Agendar>
        </C.align>

    )
}
