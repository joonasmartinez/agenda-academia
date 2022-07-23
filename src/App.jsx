import { useEffect, useState } from 'react'
import { Header } from './components/header';
import { Horarios } from './components/horarios';
import { Dia } from './components/dia';
import Global from "./GlobalStyles";
import { Agendar } from './components/agendar';
import { Registrar } from './components/registrar';

function App() {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [user, setUser] = useState({nome:'', casa:''})
  const [data, setData] = useState()
  const [register, setRegister] = useState(false)
  useEffect(()=>{

    if(localStorage.getItem(user)) {
      return console.log("Existe")
    }else{
      setRegister(true);
    }
    console.log(user)
  }, [isOpenModal])

  const openModal = (state)=>{
    setIsOpenModal(state)
  }
  const openModalAgenda = (state)=>{
    setIsOpenModal(state)
  }

  const getData = (info)=>{
    setData(info);
  }

  return (
    <div className="App">
      <Global/>
      <Header/>
      <Dia/>
      <Horarios Modal={ openModal } getData={getData}/>
      {isOpenModal ? <Agendar  casa={'44'} nome={'João Rodrigues'} horario={data.hora} acompanhante={''} ModalAgenda={openModalAgenda}/> : null}
      {register ? <Registrar/> : null}
    </div>
  )
}

export default App
