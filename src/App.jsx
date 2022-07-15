import { useState } from 'react'
import { Header } from './components/header';
import Global from "./GlobalStyles";

function App() {

  return (
    <div className="App">
      <Global/>
      <Header/>
      <h3>Hello World</h3>
      <p>Agende seu horário.</p>
    </div>
  )
}

export default App
