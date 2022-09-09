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
import { ref, get, child, set, onValue, runTransaction, off, goOffline, update } from 'firebase/database'

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
  const [agendaAtualizada, setAgendaAtualizada] = useState([]);

  const carregar = async() => {
    // await getDocs(collection(db, 'agendas')).then(res => {setAgendas([]);res.docs.map(agenda => setAgendas(prev => [...prev, agenda]))})
    // await getDocs(collection(db, 'users')).then(res => setUsers(res.docs.map((doc) => ({...doc.data(), id: doc.id }))))
    console.log("TUDO CARREGADO")
    await get(ref(databaseRealTime)).then(data => {setAgendas(data.val()); setAgendasRefOrded(data.val())})
    
  } 
  
  const orderByTime = (agenda)=>{
    if(agendas == []) return 0;
    agenda.sort((a,b)=>{
      a = a.dia.split('-')
      a = new Date(`${a[1]}/${a[0]}/${a[2]}`).getTime()
      b = b.dia.split('-')
      b = new Date(`${b[1]}/${b[0]}/${b[2]}`).getTime()
      if(a>b) return 1;
      if(a<b) return -1;
    })
    setAgendasOrded(agenda)
  }

  useEffect(()=>{
    orderByTime(agendas)
    console.log("MUDANDO:", agendas)
    console.log("Mudança detectada")
  },[agendas])

  useEffect(()=>{
    setRefAgenda(agendasRefOrded.findIndex(item => item.dia === agendas[dia].dia.replaceAll('.', '-')))
  },[agendasRefOrded])
  
  useEffect(()=>{
    setRefAgenda(agendasRefOrded.findIndex(item => item.dia === agendas[dia].dia.replaceAll('.', '-')))
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
    onValue(ref(databaseRealTime), (snapshot) => {
      console.log(snapshot.val())
      console.log("ALTERANDO TUDO")
      //  console.log("Alteração detectada val em",refAgenda,snapshot.val())
      let newAgenda = agendasOrded
      // console.log(snapshot.val(), "AgendasOrded:",agendasOrded)
      // console.log(dia)
      newAgenda=snapshot.val()
      // console.log('nre',newAgenda)
      setAgendas(snapshot.val())
      setAgendasRefOrded(snapshot.val())
      console.log('data', snapshot.val())
    })
    // carregar()

  },[])


  // useEffect(()=>{
    

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
  // }, [])

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
      console.log("iSoNaGENDA ANALISADO", (agendas[dia].horarios[horario].includes(`${user.nome}, ${user.casa}`)))
      if(agendas[dia].horarios[horario].includes(`${user.nome}, ${user.casa}`)){
        return true;
      }
      return false;

    }catch(e){

    }
  }

  const Agendamento = async (userGym = '', horario)=>{
    
    console.log(userGym, horario)

    runTransaction(ref(databaseRealTime,  refAgenda+"/horarios/"+horario), (x)=>{
      console.log("Current Data", x)
      const userUpdate = x;
      if(userUpdate[0]=='')userUpdate.length=0;
      if((x.length+userGym.length)<=MAX_USER_PER_HOUR){
        console.log("PERMITIDO")
        userGym.forEach(i => userUpdate.push(`${i.nome}, ${i.casa}`))
        return userUpdate;
      }else{
        console.log("Limite excedido!")
      }
    })

  }

  const LiberarHorario = async (horario)=>{
    let getUsers = agendas[dia].horarios[horario]
    let newUsers = [];
    newUsers.length=0;

    getUsers.forEach(item => {if(item.replaceAll(' ', '').split(',')[1] != user.casa){newUsers.push(item)}})

    runTransaction(ref(databaseRealTime,  refAgenda+"/horarios/"+horario), (x)=>{
        console.log("Current Data", x, newUsers)
        if(horario!=undefined || horario!= null){
          console.log("Atualizado.", newUsers.length)
          if(newUsers.length == 0) return newUsers=['']
          return newUsers
        }
      })
    // await update(ref(databaseRealTime, refAgenda+"/horarios/"), {[horario]:newUsers})

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
