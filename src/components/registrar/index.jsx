import React from 'react';
import { useState } from 'react';
import * as C from './styles';

export const Registrar = () => {

    return (
        <C.align >
            <C.Agendar >
                <C.Header>
                    {/* <h5>Modal</h5> */}
                    <h4>Registre-se</h4>
                </C.Header>

                <C.Section>
                    {/* <label>{`Seu nome: ${nome}`}</label>
                    <C.Input/>
                    <label>{`Sua casa: ${casa}`}</label> */}

                </C.Section>

                <C.Footer>
                    <C.Button>Confirmar</C.Button>
                    {/* <C.Button primary onClick={()=>ModalAgenda(false)}>Cancelar</C.Button> */}
                </C.Footer>

            </C.Agendar>
        </C.align>
    )
}