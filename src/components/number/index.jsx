import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';


export const Number = ({changeValue}) => {
    
        const [value, setValue] = useState(0)

        const upValue = (number)=>{
            if((number+1)<=2) return setValue(value+1);
        }
        const downValue = (number)=>{
            if((number-1)>=0) return setValue(value-1);
        }

        useEffect(()=>{
            changeValue(value);
        },[value])

        return (
        <C.Modal>
            <C.Button onClick={()=>{downValue(value)}}><IoIosArrowDropleftCircle/></C.Button><C.Input disabled type="text" value={value} onChange={()=>{return value}}/><C.Button onClick={()=>{upValue(value)}}><IoIosArrowDroprightCircle/></C.Button>
        </C.Modal>

    )
}