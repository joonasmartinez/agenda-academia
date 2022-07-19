import React from 'react';
import * as C from './styles';

export const Agendar = () => {
    return (
        
        <C.align>
            <C.Agendar>
                <C.Header>
                    {/* <h5>Modal</h5> */}
                    <h4>Agendar horário - Confirmação</h4>
                    <h2> X </h2>
                </C.Header>

                <C.Section>
                    <C.Input/>
                </C.Section>

                <C.Footer>
                    <C.Button>Confirmar</C.Button>
                    <C.Button primary>Cancelar</C.Button>
                </C.Footer>

            </C.Agendar>
        </C.align>

    )
}
