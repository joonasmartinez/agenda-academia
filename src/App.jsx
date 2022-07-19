import { useEffect, useState } from 'react'
import { Header } from './components/header';
import { Horarios } from './components/horarios';
import { Dia } from './components/dia';
import Global from "./GlobalStyles";
import { Agendar } from './components/agendar';

function App() {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [data, setData] = useState()
  useEffect(()=>{
    console.log(isOpenModal)
  }, [isOpenModal])

  const openModal = (state)=>{
    setIsOpenModal(state)
  }
  const openModalAgenda = (state)=>{
    setIsOpenModal(state)
  }

  const getData = (info)=>{
    setData(info);
    console.log(info)
  }

  return (
    <div className="App">
      <Global/>
      <Header/>
      <Dia/>
      <Horarios Modal={ openModal } getData={getData}/>
      {isOpenModal ? <Agendar  casa={'44'} nome={'João Rodrigues'} horario={data.hora} acompanhante={''} ModalAgenda={openModalAgenda}/> : null}
    </div>
  )
}

export default App
