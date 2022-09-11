import { useEffect, useState } from 'react'
import { Header } from './components/header';
import { Horarios } from './components/horarios';
import { Dia } from './components/dia';
import Global from "./GlobalStyles";
import { Agendar } from './components/agendar';
import { Registrar } from './components/registrar';
import { Agendas } from './components/agendas';
import { Auth } from './components/auth';
import { db} from './utils/firebase';
import { databaseRealTime } from './utils/firebase'
import { getDocs, getDoc, collection, doc, addDoc, deleteDoc, orderBy, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import { ref, get, child, set, onValue, runTransaction, off, goOffline, update, goOnline, push, remove } from 'firebase/database'
import { getAuth, RecaptchaVerifier } from "firebase/auth";

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
  const [modalAdmin, setModalAdmin] = useState(false);
  const [dia, setDia] = useState(0);
  const MAX_USER_PER_HOUR = 3;
  const [refAgenda, setRefAgenda]= useState(-1);
  const auth = getAuth();

  const carregar = async() => {
    // await getDocs(collection(db, 'agendas')).then(res => {setAgendas([]);res.docs.map(agenda => setAgendas(prev => [...prev, agenda]))})
    // await getDocs(collection(db, 'users')).then(res => setUsers(res.docs.map((doc) => ({...doc.data(), id: doc.id }))))
    // console.log("TUDO CARREGADO")
    await get(ref(databaseRealTime)).then(data => {setAgendas(data.val()); setAgendasRefOrded(data.val())})
    
  } 

  function orderByTimeFunc (a,b){
    let DateA = a
    let DateB = b

      DateA = DateA[0].split('-')
      DateA = new Date(`${DateA[1]}/${DateA[0]}/${DateA[2]}`).getTime()
      DateB = DateB[0].split('-')
      DateB = new Date(`${DateB[1]}/${DateB[0]}/${DateB[2]}`).getTime()
      if(DateA>DateB) return 1;
      if(DateA<DateB) return -1;
  }
  
  const orderByTime = (agenda)=>{

    agenda.sort(orderByTimeFunc)
    setAgendasOrded(agenda)
  }

  useEffect(()=>{

    orderByTime(agendas)
  },[agendas])
  useEffect(()=>{
  },[agendasOrded])

  useEffect(()=>{
    try{
      setRefAgenda(agendasRefOrded.findIndex(item => item.dia === agendas[dia].dia.replaceAll('.', '-')))
    }catch(e){

    }
  },[agendasRefOrded])
  
  useEffect(()=>{
    try{
      setRefAgenda(agendasRefOrded.findIndex(item => item.dia === agendas[dia].dia.replaceAll('.', '-')))
    }catch(e){
    }
  }, [dia])

  // useEffect(()=>{
  //   if(refAgenda!=-1){
  //     console.log("Modificando na ref", refAgenda+'/horarios')
      
  //     onValue(ref(databaseRealTime, refAgenda+"/horarios"),  (snapshot) => {
  //       console.log("ALTERANDO SOMENTE HORARIO")
  //       console.log('velha',agendas[dia])
  //       const newAgenda = agendasOrded;
  //       newAgenda[dia].horarios = snapshot.val()
  //       console.log('nova:',newAgenda)
  //       // newAgenda[dia].horarios = snapshot.val();
  //       // console.log(agendas[dia].horarios)
  //       // setAgendas([{dia:'00-00-00', horarios:{'':[]}}], setAgendas(newAgenda))
        

  //       , {onlyOnce:true}
        
  //     })
  //   }

  // }, [refAgenda])

  useEffect(()=>{

    onValue(child(ref(databaseRealTime),'agendas'), (snapshot) => {

      // let newAgenda = agendasOrded
      // newAgenda=snapshot.val()
      // Object.entries(agendasR).map(item => console.log(Object.values(item)))
      setAgendas(Object.entries(snapshot.val()))
      // setAgendasRefOrded(snapshot.val().filter(i => {return i}))
    })
    

  },[])

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
    try{
      if(agendas[dia][1].horarios[horario].includes(`${user.casa}`)){
        return true;
      }
      return false;

    }catch(e){

    }
  }

  const Agendamento = async (userGym = '', horario)=>{
    
    // console.log(userGym, horario)
    // console.log(agendas[dia][0])
    await runTransaction(ref(databaseRealTime,  'agendas/'+agendas[dia][0]+'/horarios/'+horario), (x)=>{
      const userUpdate = x;
      if(userUpdate[0]=='')userUpdate.length=0;
      if((x.length+userGym.length)<=MAX_USER_PER_HOUR){
        userGym.forEach(i => userUpdate.push(`${i.nome}, ${i.casa}`))
        return userUpdate;
      }else{
        console.log("Limite excedido!")
      }
    })

  }

  const LiberarHorario = async (horario)=>{
    let getUsers = agendas[dia][1].horarios[horario]
    let newUsers = [];
    newUsers.length=0;

    getUsers.forEach(item => {if(item.replaceAll(' ', '').split(',')[1] != user.casa){newUsers.push(item)}})

    runTransaction(ref(databaseRealTime,  'agendas/'+agendas[dia][0]+'/horarios/'+horario), (x)=>{
        console.log("Current Data", x, newUsers)
        if(x){

          if(horario!=undefined || horario!= null){
            console.log("Atualizado.", newUsers.length)
            if(newUsers.length == 0) return newUsers=['']
            return newUsers
          }
        }
      })
    // await update(ref(databaseRealTime, refAgenda+"/horarios/"), {[horario]:newUsers})

  }

  const updateAdminAgenda = async(agenda)=>{
    console.log("APP:", Object.keys(agenda)[0])
    console.log("APP HORARIOS:", agenda[Object.keys(agenda)[0]].horarios)
    
    await runTransaction(ref(databaseRealTime,  'agendas/'+Object.keys(agenda)[0]+"/horarios"), (x)=>{
      if(x){
        
        return agenda[Object.keys(agenda)[0]].horarios
      }
    }).then(console.log("Atualizado"))

  }

  const pushAdminAgenda = async (agenda)=>{
    console.log("AGENDA", agenda)
    await update(child(ref(databaseRealTime), "agendas/"), agenda)
  }
  const removeAdminAgenda = async (agenda)=>{
    await remove(child(ref(databaseRealTime), "agendas/"+agenda)).then(console.log("AGENDA REMOVIDA", agenda, "NÃO EXISTE MAIS")).catch(e=>{console.log("ALGO DEU ERRADO.")})
  }


  return (
    <div className="App">
      <Auth/>
      <Global/>
      {/* <Header Registrar={editRegister} AdminOpen={OpenAdmin}/> */}
      {/* <Dia getDia={agendasOrded[dia]} NextDia={UpDia} PrevDia={DownDia}/> */}
      {/* <Horarios Modal={ openModal } getData={getData} getHoras={agendasOrded[dia]}/>
      {isOpenModal ? <Agendar  casa={`${user.casa}`} nome={`${user.nome}`} horario={data} acompanhante={''} ModalAgenda={openModalAgenda} dia={agendasOrded[dia]} checkAgendamento={(userGym, horario)=>Agendamento(userGym, horario)} isOnAgenda={(horario)=>isOnAgenda(horario)} liberarHorario={(horario)=>{LiberarHorario(horario)}}/> : null}
      {register ? <Registrar Registro={ createUser }/> : null}
      {modalAdmin ? <Agendas Agendas={agendas} onClose={()=>setModalAdmin(false)} updateAdminAgenda={(agenda)=>{updateAdminAgenda(agenda)}} pushAdminAgenda={(agenda)=>{pushAdminAgenda(agenda)}} removeAdminAgenda={(agenda)=>{removeAdminAgenda(agenda)}}/> : null} */}
    </div>
  )
}

export default App
