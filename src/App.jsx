import { useState } from 'react'
import './App.css'
import Chronometer from './components/Chronometer/Chronometer'
import Countdown from './components/Countdown/Countdown'
import ReactionGame from './components/ReactionGame/ReactionGame'


function App() {
  const [timeMenu, setTimeMenu] = useState(null)

  if(timeMenu){
    return (
      
      <div>
        <button onClick={() => setTimeMenu(null)}><i className="bi bi-arrow-left"></i></button>
        {timeMenu === "Chronometer" && <Chronometer/>}
        {timeMenu === "Countdown" && <Countdown/>}
        {timeMenu === "ReactionGame" && <ReactionGame/>}
      </div>
    )
  }

  return (

    <div bg-white max-w-300>
      <button onClick={() => setTimeMenu("Chronometer")}>Cronómetro</button>
      <button onClick={() => setTimeMenu("Countdown")}>Cuenta atrás</button>
      <button onClick={() => setTimeMenu("ReactionGame")}>Juego de reacción</button>
    </div>

  )
}

export default App
