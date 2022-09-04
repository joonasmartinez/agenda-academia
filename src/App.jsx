import { useEffect, useState } from 'react'
import { Header } from './components/header';
import { Horarios } from './components/horarios';
import { Dia } from './components/dia';
import Global from "./GlobalStyles";
import { Agendar } from './components/agendar';
import { Registrar } from './components/registrar';
import { Agendas } from './components/agendas';
import { db} from './utils/firebase';
import { databaseRealTime } from './utils/firebase'
import { getDocs, getDoc, collection, doc, addDoc, deleteDoc, orderBy, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import { ref, get, child, set } from 'firebase/database'

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
  const MAX_USER_PER_HOUR = 3;

  const carregar = async() => {
    await getDocs(collection(db, 'agendas')).then(res => {setAgendas([]);res.docs.map(agenda => setAgendas(prev => [...prev, agenda]))})
    // await getDocs(collection(db, 'users')).then(res => setUsers(res.docs.map((doc) => ({...doc.data(), id: doc.id }))))
    console.log("TUDO CARREGADO")
  }

  async function write (){
    console.log("Função ativada.")
    await set(ref(databaseRealTime, 'cliente1/'), {
      'agendas':{
        '01-09-2022':{
          '06:00':['Jonas, 12', 'Carlos, 26', 'Lais, 12'],
          '07:00':['Maria, 6'],
          '08:00':['José, 54']
        }
      }
      
    })
  }
  
  // get(child(ref(databaseRealTime), 'user/nome')).then((snapshot) => {
  //   if(snapshot.exists()){
  //     console.log(snapshot.val())
  //   }
  // })
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
    write()
    // carregar()
    onSnapshot(collection(db, 'agendas'), ((snapshot) => {
      console.log("Alteração detectada.")
        setAgendas([])
        snapshot.docs.map(doc => {setAgendas(prev => [...prev, doc])})
        }))
  }, [])
  useEffect(()=>{

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
  }
  const DownDia = ()=>{
    if(dia-1<0)return console.log("Limite down")
    setDia(dia-1)
  }

  const isOnAgenda = (horario)=>{
    if(agendas[dia].data()[horario].includes(`${user.nome}, ${user.casa}`)){
      return true
    }
    return false;
  }

  const Agendamento = async (userGym = '', horario)=>{
    let snap = onSnapshot(doc(db, 'agendas', agendas[dia].id), (snapshot)=>{
      if(snapshot.metadata.hasPendingWrites === true){

        // console.log('hasPendingTrue.', snapshot.data()[horario])
      }
      // console.log('hasPendingfalse.', snapshot.data()[horario])
    })
    // console.log(agendas[dia].data()[horario].length, userGym)
    if((agendas[dia].data()[horario].length + userGym.length)<=MAX_USER_PER_HOUR){
      let newUsers = {};
      await getDoc(doc(db, 'agendas', agendas[dia].id)).then(res => newUsers=res.data()[horario])
      // console.log(newUsers)
      for(let i = 0; i<userGym.length;i++){
        newUsers.push(`${userGym[i].nome}, ${userGym[i].casa}`)

      }
      await updateDoc(doc(db, 'agendas', agendas[dia].id), {[horario]:newUsers}).then(console.log("Updated!"))
      // console.log("Dia",agendas[dia].data()[horario])
      snap()
      return true;
    }else{
      return false;
    }
  }

  const LiberarHorario = async (horario)=>{
    let newUsers = agendas[dia].data()[horario];

    agendas[dia].data()[horario].forEach(item => {
      let userSplit = item.split(',')

      if(Number(userSplit[1]) === Number(user.casa)) {
        newUsers.splice(newUsers.indexOf(item), 1)
      }
    })
    // console.log("Final", newUsers)
    try{
      await updateDoc(doc(db, 'agendas', agendas[dia].id), {[horario]:newUsers})
      return true

    }catch (e){
      console.error(e)
      return false
    }
  }



  return (
    <div className="App">
      <Global/>
      <Header Registrar={editRegister} AdminOpen={OpenAdmin}/>
      <Dia getDia={agendasOrded[dia]} NextDia={UpDia} PrevDia={DownDia}/>
      <Horarios Modal={ openModal } getData={getData} getHoras={agendasOrded[dia]}/>
      {isOpenModal ? <Agendar  casa={`${user.casa}`} nome={`${user.nome}`} horario={data} acompanhante={''} ModalAgenda={openModalAgenda} dia={agendasOrded[dia]} checkAgendamento={(userGym, horario)=>Agendamento(userGym, horario)} isOnAgenda={(horario)=>isOnAgenda(horario)} liberarHorario={(horario)=>{LiberarHorario(horario)}}/> : null}
      {register ? <Registrar Registro={ createUser }/> : null}
      {modalAdmin ? <Agendas Agendas={agendas} onClose={()=>setModalAdmin(false)}/> : null}
    </div>
  )
}

export default App
