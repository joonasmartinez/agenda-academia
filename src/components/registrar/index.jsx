import React, { useEffect, useState } from 'react';
import * as C from './styles';

export const Registrar = ( {Registro}) => {

    const [nome, setNome] = useState('')
    const [casa, setCasa] = useState('')

    useEffect(() =>{
        if(localStorage.getItem('user')){
            let user = JSON.parse(localStorage.getItem('user'))
            setNome(user.nome)
            setCasa(user.casa)
        }
    }, [])

    const check = ()=>{
        if(nome != '' && casa != ''){
            return Registro({nome, casa})
        }
    }

    return (
        <C.align >
            <C.Agendar >
                <C.Header>
                    {/* <h5>Modal</h5> */}
                    <h4>Confirme seus dados</h4>
                </C.Header>

                <C.Section>
                    <label>Seu nome</label>
                    <C.Input onChange={(e)=>setNome(e.target.value)} placeholder='Ex.: João' value={nome}/>
                    <label>Sua casa</label>
                    <C.Input type='number' onChange={(e)=>setCasa(e.target.value)} placeholder='Ex.: 12' value={casa}/>

                </C.Section>

                <C.Footer>
                    <C.Button onClick={()=>check()}>Confirmar</C.Button>
                </C.Footer>

            </C.Agendar>
        </C.align>
    )
}