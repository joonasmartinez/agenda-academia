import { Suspense, useEffect, useState } from 'react'
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
import { ref, get, child, set, onValue, runTransaction } from 'firebase/database'

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
  const [agendasRefOrded, setAgendasRefOrded] = useState([]);
  let refAgenda=0;
  const [modalAdmin, setModalAdmin] = useState(false);
  const [dia, setDia] = useState('Vazio');
  const MAX_USER_PER_HOUR = 3;

  const carregar = async() => {
    // await getDocs(collection(db, 'agendas')).then(res => {setAgendas([]);res.docs.map(agenda => setAgendas(prev => [...prev, agenda]))})
    // await getDocs(collection(db, 'users')).then(res => setUsers(res.docs.map((doc) => ({...doc.data(), id: doc.id }))))
    // console.log("TUDO CARREGADO")
    await get(ref(databaseRealTime)).then(data => {setAgendas(data.val()); setAgendasRefOrded(data.val()); console.log(data.val())})
  } 

  // async function write (dados){
  //   console.log("Sobre escrevendo dados...")
  //   console.log("dados",dados)
  //   await set(ref(databaseRealTime),
  //   dados
  //     ).then(e=>{console.log("Executado:",e)})
  // }
  
  const orderByTime = (agenda)=>{
    if(agendas == []) return 0;
    agenda.sort((a,b)=>{
      console.log('A',a)
      console.log('B',b)
      a = a.dia.split('-')
      a = new Date(`${a[1]}/${a[0]}/${a[2]}`).getTime()
      b = b.dia.split('-')
      b = new Date(`${b[1]}/${b[0]}/${b[2]}`).getTime()
      if(a>b) return 1;
      if(a<b) return -1;
    })
    setAgendasOrded(agenda)
  }
  // const novaAgenda = [{dia:'01-08-2022', horarios:{'06:00':[''],'07:00':[''],'08:00':[''],'09:00':[''],'10:00':[''],'11:00':[''],'12:00':[''],'13:00':[''],'14:00':[''],'15:00':[''],'16:00':[''],'17:00':[''],'18:00':[''],'19:00':[''],'20:00':[''],'21:00':[''],'22:00':[''],'23:00':[''],}}, {dia:'02-10-2022', horarios:{'06:00':[''],'07:00':[''],'08:00':[''],'09:00':[''],'10:00':[''],'11:00':[''],'12:00':[''],'13:00':[''],'14:00':[''],'15:00':[''],'16:00':[''],'17:00':[''],'18:00':[''],'19:00':[''],'20:00':[''],'21:00':[''],'22:00':[''],'23:00':[''],}}, {dia:'03-09-2022', horarios:{'06:00':[''],'07:00':[''],'08:00':[''],'09:00':[''],'10:00':[''],'11:00':[''],'12:00':[''],'13:00':[''],'14:00':[''],'15:00':[''],'16:00':[''],'17:00':[''],'18:00':[''],'19:00':[''],'20:00':[''],'21:00':[''],'22:00':[''],'23:00':[''],}}, {dia:'04-07-2022', horarios:{'06:00':[''],'07:00':[''],'08:00':[''],'09:00':[''],'10:00':[''],'11:00':[''],'12:00':[''],'13:00':[''],'14:00':[''],'15:00':[''],'16:00':[''],'17:00':[''],'18:00':[''],'19:00':[''],'20:00':[''],'21:00':[''],'22:00':[''],'23:00':[''],}}]
  // set(ref(databaseRealTime),novaAgenda)
  useEffect(()=>{
    orderByTime(agendas)
  },[agendas])
  useEffect(()=>{
    console.log('ref',agendasRefOrded)
  },[agendasRefOrded])
  useEffect(()=>{

  },[agendasOrded])

  useEffect(()=>{
      // if(!(isNaN(dia))) {console.log(dia, " é um numero"); 
      try{
        console.log('agenda atual',agendasOrded[dia].dia, "|||", "agenda ref", agendasRefOrded.findIndex(item => item.dia == agendasOrded[dia].dia))
        refAgenda = agendasRefOrded.findIndex(item => item.dia == agendasOrded[dia].dia);
        onValue(ref(databaseRealTime, `${refAgenda}/horarios`), (snapshot) => {
          console.log("Alteração detectada val",snapshot.val())
          // console.log(agendasOrded[dia].horarios)
          let newAgenda = Object.assign({}, agendasOrded)
          newAgenda[dia].horarios=snapshot.val()
          setAgendas(newAgenda)
          // console.log('AGENDA ATUALIZADA:',newAgenda)
          // let n = agendasOrded[dia].horarios
          // console.log(agendas)
      })
      }catch(e){
      }
      
  }, [agendasOrded[dia]])

  useEffect(()=>{
    

    // runTransaction(ref(databaseRealTime, 'agendas/01-09-2022/06:00'), (x)=>{
    //   console.log("Current Data", x)
    //   if(x.length<=3){
    //     return {0:'Jonas', 1:'Carlos', 2:"Elizabeth", 3:"Lais", 4:"Brad Pitt"}
    //   }else{
    //     console.log("Necessario alteração")
    //     return x.slice(0, MAX_USER_PER_HOUR)
    //   }
    // })
    // onValue(ref(databaseRealTime, 'agendas/01-09-2022'), (snapshot) => {
    //   // console.log("Alteração detectada val", 'KEY',snapshot,snapshot.val())
    // })
    // console.log(agendas)
    // carregar()
    // onSnapshot(collection(db, 'agendas'), ((snapshot) => {
    //   console.log("Alteração detectada.")
    //   setAgendas([])
    //   snapshot.docs.map((doc, index) => {setAgendas(prev => [...prev, doc]); 
    //     let a = Object.assign(doc.data(), {})
    //     let b = {}
    //     Object.entries(a).map(item => b[item[0]]= (item[1] == '' ? [''] : item[1]))
    //     console.log('B',b)

    //     conjunto.agendas[doc.id.replaceAll('.', '-')]=b
        
      // })
      // write(conjunto)
    //   console.log("Antes", conjunto)
    // }))
    // let obj = {...conjunto}
    // console.log('aqui', obj)
  }, [])
  useEffect(()=>{
    
    setAgendas([])
    setDia(0)
    carregar()
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
    if(agendas[dia].horarios[horario].includes(`${user.nome}, ${user.casa}`)){
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
