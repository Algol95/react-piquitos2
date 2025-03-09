import { useState } from 'react'
import './App.css'
import Chronometer from './components/Chronometer/Chronometer'
import Countdown from './components/Countdown/Countdown'


function App() {
  const [timeMenu, setTimeMenu] = useState(null)

  if(timeMenu){
    return (
      
      <div>
        <button onClick={() => setTimeMenu(null)}><i className="bi bi-arrow-left"></i></button>
        {timeMenu === "Chronometer" && <Chronometer/>}
        {timeMenu === "Countdown" && <Countdown/>}
      </div>
    )
  }

  return (

    <div>
      <button onClick={() => setTimeMenu("Chronometer")}>Cronómetro</button>
      <button onClick={() => setTimeMenu("Countdown")}>Cuenta atrás</button>
    </div>

  )
}

export default App
