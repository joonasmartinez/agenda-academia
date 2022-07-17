import { useState } from 'react'
import { Header } from './components/header';
import { Horarios } from './components/horarios';
import Global from "./GlobalStyles";

function App() {

  return (
    <div className="App">
      <Global/>
      <Header/>
      <Horarios/>
    </div>
  )
}

export default App
