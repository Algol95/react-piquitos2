import React, { useEffect, useState } from "react";
import "/sounds/meow.mp3"


function Countdown () {
    const [countdown, setCountdown] = useState(30);
    const [isPause, setIsPause] = useState(false)
    const playMeow = () => {
        const meow = new Audio("/sounds/meow.mp3")
        meow.play()
    }

    useEffect(() => {
        if(isPause) return;

        const countdownInterval = setInterval(() => {
            setCountdown((prev) => prev - 1)
        }, 1000)

        if(countdown == 0){
          playMeow();
          clearInterval(countdownInterval);
        } 

        return () => clearInterval(countdownInterval);
    },[isPause, countdown])

    const bgHeader = () => {

        if (countdown >= 20) return "bg-green-500";
        if (countdown > 10) return "bg-yellow-500";
        return "bg-red-500";

    }

    const message = () => {

      if (countdown >= 15) return "¡Vamos bien!";
      if (countdown > 0) return "¡Casi, casí!";
      return "Tiempo agotado"; 
  }

  const progress = (countdown / 30) * 100;
  console.log(progress );
  

    return(
        <div className="max-w-sm bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mt-5 min-w-64">
            <div className={`h-16 ${bgHeader()} transition-colors duration-500 content-center`}>
                <h2 className="text-xl font-bold text-gray-900 mb-2"><i className="bi bi-hourglass-split"></i> Cuenta atrás</h2>
            </div>
            <div className="p-6 text-center">
                <p className="text-gray-600"> Quedan:</p>
                <h2 className="text-3xl font-bold text-blue-600 my-2">{countdown}</h2>
                <p className="text-gray-600">segundos</p>
                <div className="mt-5" style={{ width: "100%", height: "5px", background: "#ddd", borderRadius: "10px", overflow: "hidden"}}>
                  <div
                      style={{
                        width: `${progress}%`,
                        height: "100%",
                        background: "black",
                        transition: "width .3s linear"
                    }}
                  ></div>
                </div>
                <p className="text-black text-xl font-bold mt-2">{message()}</p>
                <div className="mt-4 flex justify-center gap-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
                        onClick={() => setIsPause(!isPause)}
                    >
                        {isPause ? <i className="bi bi-play-fill"></i> : <i className="bi bi-pause-fill"></i>}
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition"
                        onClick={() => { setCountdown(30); setIsPause(false); }}
                    >
                        <i className="bi bi-arrow-repeat"></i>
                    </button>
                </div>
            
        </div>
        </div>
    );
    
    
}

export default Countdown;