import { useEffect, useState } from 'react'
import { Header } from './components/header';
import { Horarios } from './components/horarios';
import { Dia } from './components/dia';
import Global from "./GlobalStyles";
import { Agendar } from './components/agendar';
import { Registrar } from './components/registrar';
import { Agendas } from './components/agendas';
import { db} from './utils/firebase';
import { getDocs, getDoc, collection, doc, addDoc, deleteDoc, orderBy } from "firebase/firestore";

function App() {

  const [nome, setNome] = useState('')
  const [casa, setCasa] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [user, setUser] = useState({nome:'', casa:'', id:''})
  const [users, setUsers] = useState('')
  const [data, setData] = useState()
  const [register, setRegister] = useState(false)
  const [agendas, setAgendas] = useState([]);
  const [agendasOrded, setAgendasOrded] = useState([]);
  const [modalAdmin, setModalAdmin] = useState(false);
  const [dia, setDia] = useState(0);

  const carregar = async () => {
    console.log("Carregando")
    await getDocs(collection(db, 'agendas')).then(res => res.docs.map(agenda => setAgendas(prev => [...prev, agenda])))
    await getDocs(collection(db, 'users')).then(res => setUsers(res.docs.map((doc) => ({...doc.data(), id: doc.id }))))
  }

  const orderByTime = (agenda)=>{
    agenda.sort((a,b)=>{
      a = a.id.split('.')
      a = new Date(`${a[1]}/${a[0]}/${a[2]}`).getTime()
      b = b.id.split('.')
      b = new Date(`${b[1]}/${b[0]}/${b[2]}`).getTime()
      if(a>b) return 1;
      if(a<b) return -1;
  })
  setAgendasOrded(agenda)
  }
  useEffect(()=>{
    orderByTime(agendas)
  },[agendas])
  useEffect(()=>{

    carregar();
    setAgendas([])
    if(localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')))
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

  const UpDia = ()=>{
    // console.log("Clicou", dia)
    if(dia+2>agendas.length)return console.log("Limite up")
    setDia(dia+1)
    ReloadAgenda();
  }
  const DownDia = ()=>{
    // console.log("Clicou", dia)
    if(dia-1<0)return console.log("Limite down")
    setDia(dia-1)
    ReloadAgenda();
  }

  const ReloadAgenda = ()=>{
    setAgendas([])
    carregar();
  }



  return (
    <div className="App">
      {/* <input type="text" placeholder='nome...' onChange={(e)=>{setNome(e.target.value)}}/> */}
      {/* <input type="number" placeholder='casa...' onChange={(e)=>{setCasa(Number(e.target.value))}} /> */}
      {/* <button onClick={async ()=> await addDoc(userCollectionRef, {nome, casa})}>Criar</button> */}
      <Global/>
      <Header Registrar={editRegister} AdminOpen={OpenAdmin}/>
      <Dia getDia={agendasOrded[dia]} NextDia={UpDia} PrevDia={DownDia}/>
      <Horarios Modal={ openModal } getData={getData} getHoras={agendasOrded[dia]}/>
      {isOpenModal ? <Agendar  casa={`${user.casa}`} nome={`${user.casa}`} horario={data} acompanhante={''} ModalAgenda={openModalAgenda}/> : null}
      {register ? <Registrar Registro={ createUser }/> : null}
      {modalAdmin ? <Agendas Agendas={agendas} onClose={()=>setModalAdmin(false)} Reload={ReloadAgenda}/> : null}
    </div>
  )
}

export default App
