import { useEffect, useState } from 'react'
import { Header } from './components/header';
import { Horarios } from './components/horarios';
import { Dia } from './components/dia';
import Global from "./GlobalStyles";
import { Agendar } from './components/agendar';

function App() {

  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(()=>{
    console.log(isOpenModal)
  }, [isOpenModal])

  const openModal = (state)=>{
    setIsOpenModal(state)
  }
  const openModalAgenda = (state)=>{
    setIsOpenModal(state)
  }

  return (
    <div className="App">
      <Global/>
      <Header/>
      <Dia/>
      <Horarios Modal={ openModal }/>
      {isOpenModal ? <Agendar  casa={'44'} nome={'João Rodrigues'} horario={'13:00'} acompanhante={''} ModalAgenda={openModalAgenda}/> : null}
    </div>
  )
}

export default App
