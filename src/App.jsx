import { useEffect, useState } from 'react'
import { Header } from './components/header';
import { Horarios } from './components/horarios';
import { Dia } from './components/dia';
import Global from "./GlobalStyles";
import { Agendar } from './components/agendar';
import { Registrar } from './components/registrar';
import { Agendas } from './components/agendas';
import { db} from './utils/firebase';
import { getDocs, getDoc, collection, doc, addDoc, deleteDoc, orderBy, setDoc, updateDoc } from "firebase/firestore";

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

  const carregar = async() => {
    await getDocs(collection(db, 'agendas')).then(res => {setAgendas([]);res.docs.map(agenda => setAgendas(prev => [...prev, agenda]))})
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

  const registred = () => {
    if(localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')))
      return true;
    }else{
      return setRegister(true);
    }
  }

  const openModal = (state)=>{
    if(registred()){
      setIsOpenModal(state)
    }
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
    if(dia+2>agendas.length)return console.log("Limite up")
    setDia(dia+1)
    ReloadAgenda();
  }
  const DownDia = ()=>{
    if(dia-1<0)return console.log("Limite down")
    setDia(dia-1)
    ReloadAgenda();
  }

  const ReloadAgenda = ()=>{
    setAgendas([])
    carregar();
  }

  const Agendamento = async (userGym = '', horario)=>{
    await carregar();
    console.log(agendas[dia].data()[horario].length, userGym)
    if((agendas[dia].data()[horario].length + userGym.length)<=3){
      console.log('info:','agendas', agendas[dia].id, horario, `${userGym[0].nome}, ${userGym[0].casa}`)
      
      let newUsers = {};
      await getDoc(doc(db, 'agendas', agendas[dia].id)).then(res => newUsers=res.data()[horario])
      newUsers.push(`${userGym[0].nome}, ${userGym[0].casa}`)
      console.log('Users', newUsers)
      await updateDoc(doc(db, 'agendas', agendas[dia].id), {[horario]:newUsers}).then(console.log("Updated!"))
      return true;
    }else{
      return false;
    }
  }



  return (
    <div className="App">
      <Global/>
      <Header Registrar={editRegister} AdminOpen={OpenAdmin}/>
      <Dia getDia={agendasOrded[dia]} NextDia={UpDia} PrevDia={DownDia}/>
      <Horarios Modal={ openModal } getData={getData} getHoras={agendasOrded[dia]}/>
      {isOpenModal ? <Agendar  casa={`${user.casa}`} nome={`${user.nome}`} horario={data} acompanhante={''} ModalAgenda={openModalAgenda} dia={agendasOrded[dia]} Reload={ReloadAgenda} checkAgendamento={(userGym, horario)=>Agendamento(userGym, horario)} updateAgenda={carregar}/> : null}
      {register ? <Registrar Registro={ createUser }/> : null}
      {modalAdmin ? <Agendas Agendas={agendas} onClose={()=>setModalAdmin(false)} Reload={ReloadAgenda}/> : null}
    </div>
  )
}

export default App
