import { useEffect, useState } from 'react'
import { Header } from './components/header';
import { Horarios } from './components/horarios';
import { Dia } from './components/dia';
import Global from "./GlobalStyles";
import { Agendar } from './components/agendar';
import { Registrar } from './components/registrar';
import { db} from './utils/firebase';
import { getDocs, collection } from "firebase/firestore";

function App() {
  const [name, setName] = useState('');
  const [casa, setCasa] = useState('');

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [user, setUser] = useState({nome:'', casa:''})
  const [data, setData] = useState()
  const [register, setRegister] = useState(false)
  useEffect(()=>{
    const userCollectionRef = collection(db, 'users')
    const carregar = async () => {
      const data = await getDocs(userCollectionRef).then(res => console.log(res.docs))
    }
    carregar();
    if(localStorage.getItem('user')) {
      return setRegister(false);
    }else{
      setRegister(true);
    }
  }, [])

  const openModal = (state)=>{
    setIsOpenModal(state)
  }
  const openModalAgenda = (state)=>{
    setIsOpenModal(state)
  }

  const getData = (info)=>{
    setData(info);
  }

  const createUser = ({nome, casa}) =>{
    setUser({nome, casa})
    localStorage.setItem('user', JSON.stringify({nome, casa}))
    setRegister(false);
  }

  const editRegister = ()=>{
    setRegister(true);
  }



  return (
    <div className="App">
      <Global/>
      <Header Registrar={editRegister}/>
      <Dia/>
      <Horarios Modal={ openModal } getData={getData}/>
      {isOpenModal ? <Agendar  casa={`${user.casa}`} nome={`${user.casa}`} horario={data.hora} acompanhante={''} ModalAgenda={openModalAgenda}/> : null}
      {register ? <Registrar Registro={ createUser }/> : null}
    </div>
  )
}

export default App
