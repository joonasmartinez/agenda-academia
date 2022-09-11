import React, { useState } from 'react';
import * as C from './styles';

export const Auth = () => {

    return (

        <C.Container>
            <C.Itens>
                <h3>AUTENTICAÇÃO NECESSÁRIA</h3>
                <C.labelNumber itemRef='inputNumero'>Numero telefone</C.labelNumber>
                <C.InputNumber name='inputNumero' placeholder='(12) 3 4567 8910 ' type='number'/>
            </C.Itens>
        </C.Container>

    )
}