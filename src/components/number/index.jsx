import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';


export const Number = (showValue) => {
    
        const [value, setValue] = useState(0)

        useEffect(()=>{
            showValue=value;
        }, [value])

        return (
        <C.Modal>
            <C.Button onClick={()=>{setValue(value-1)}}><IoIosArrowDropleftCircle/></C.Button>{value}<C.Button onClick={()=>{setValue(value+1)}}><IoIosArrowDroprightCircle/></C.Button>
        </C.Modal>

    )
}