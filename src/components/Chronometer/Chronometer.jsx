import React, { useEffect, useState } from "react";
import "/sounds/meow.mp3"

function Chronometer () {
    const [chrono, setChrono] = useState(0);
    const [isPause, setIsPause] = useState(false)
    const playMeow = () => {
        const meow = new Audio("/sounds/meow.mp3")
        meow.play()
    }

    useEffect(() => {
        if(isPause) return;

        const chronoInterval = setInterval(() => {
            setChrono((prev) => prev + 1)
        }, 1000)

        if(chrono == 10) playMeow();

        return () => clearInterval(chronoInterval);
    },[isPause, chrono])

    const bgHeader = () => {

        if (chrono < 10) return "bg-green-500";
        if (chrono <= 20) return "bg-yellow-500";
        return "bg-red-500";

    }

    return(
        <div className="max-w-sm bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mt-5 min-w-64">
            <div className={`h-16 ${bgHeader()} transition-colors duration-500 content-center`}>
                <h2 className="text-xl font-bold text-gray-900 mb-2"><i className="bi bi-hourglass-split"></i> Cronómetro</h2>
            </div>
            <div className="p-6 text-center">
                <p className="text-gray-600">Han pasado:</p>
                <h2 className="text-3xl font-bold text-blue-600 my-2">{chrono}</h2>
                <p className="text-gray-600">segundos</p>

                <div className="mt-4 flex justify-center gap-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
                        onClick={() => setIsPause(!isPause)}
                    >
                        {isPause ? <i className="bi bi-play-fill"></i> : <i className="bi bi-pause-fill"></i>}
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition"
                        onClick={() => { setChrono(0); setIsPause(false); }}
                    >
                        <i className="bi bi-arrow-repeat"></i>
                    </button>
                </div>
            </div>
        </div>
    );
    
    
}

export default Chronometer;