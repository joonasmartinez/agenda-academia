import { useState } from 'react'
import { Header } from './components/header';
import { Horarios } from './components/horarios';
import { Dia } from './components/dia';
import Global from "./GlobalStyles";
import { Agendar } from './components/agendar';

function App() {

  return (
    <div className="App">
      <Global/>
      <Header/>
      <Dia/>
      <Horarios>
          <Agendar/>
      </Horarios>
    </div>
  )
}

export default App
