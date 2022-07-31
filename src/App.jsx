import { useEffect, useState } from 'react'
import { Header } from './components/header';
import { Horarios } from './components/horarios';
import { Dia } from './components/dia';
import Global from "./GlobalStyles";
import { Agendar } from './components/agendar';
import { Registrar } from './components/registrar';
import { Agendas } from './components/agendas';
import { db} from './utils/firebase';
import { getDocs, getDoc, collection, doc, addDoc, deleteDoc } from "firebase/firestore";

function App() {

  const [nome, setNome] = useState('')
  const [casa, setCasa] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [user, setUser] = useState({nome:'', casa:'', id:''})
  const [users, setUsers] = useState('')
  const [data, setData] = useState()
  const [register, setRegister] = useState(false)
  const [agendas, setAgendas] = useState([]);
  const [modalAdmin, setModalAdmin] = useState(false);

  useEffect(()=>{

    const carregar = async () => {
      const agendas = await getDocs(collection(db, 'agendas')).then(res => {setAgendas(res.docs.map((doc) => ({...doc.data(), id: doc.id })))})
      const users = await getDocs(collection(db, 'users')).then(res => setUsers(res.docs.map((doc) => ({...doc.data(), id: doc.id }))))

    }
    carregar();
    if(localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')))
      return setRegister(false);
    }else{
      setRegister(true);
    }

  }, [])

  useEffect(()=>{
    // console.log(agendas)
    // console.log(user)
  }, [users])

  const openModal = (state)=>{
    setIsOpenModal(state)
  }
  const openModalAgenda = (state)=>{
    setIsOpenModal(state)
  }

  const getData = (info)=>{
    setData(info);
  }

  const createUser = ({nome, casa, id}) =>{
    setUser({nome, casa, id})
    setRegister(false);
  }

  const editRegister = ()=>{
    setRegister(true);
  }

  const OpenAdmin = ()=>{
    setModalAdmin(true)
  }



  return (
    <div className="App">
      {/* <input type="text" placeholder='nome...' onChange={(e)=>{setNome(e.target.value)}}/> */}
      {/* <input type="number" placeholder='casa...' onChange={(e)=>{setCasa(Number(e.target.value))}} /> */}
      {/* <button onClick={async ()=> await addDoc(userCollectionRef, {nome, casa})}>Criar</button> */}
      <Global/>
      <Header Registrar={editRegister} AdminOpen={OpenAdmin}/>
      <Dia/>
      <Horarios Modal={ openModal } getData={getData}/>
      {isOpenModal ? <Agendar  casa={`${user.casa}`} nome={`${user.casa}`} horario={data.hora} acompanhante={''} ModalAgenda={openModalAgenda}/> : null}
      {register ? <Registrar Registro={ createUser }/> : null}
      {modalAdmin ? <Agendas Agendas={agendas} onClose={()=>setModalAdmin(false)}/> : null}
    </div>
  )
}

export default App
