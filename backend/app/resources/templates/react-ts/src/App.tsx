import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import map from "./game/map.json";
import { GraphCanvas } from './components/GraphCanvas'
function App() {
  

  return (
      <GraphCanvas nodes={map.nodes} connections={map.connections}/>
  )
}

export default App
