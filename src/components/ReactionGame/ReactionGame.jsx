import React, { useState, useEffect } from "react";

function RestartButton({ onClick }) {
    return (
        <button 
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
            onClick={onClick}
        >
            Reiniciar
        </button>
    );
}

function ReactionGame() {
    const [boxColor, setBoxColor] = useState("bg-gray-500");
    const [startTime, setStartTime] = useState(null);
    const [reactionTime, setReactionTime] = useState(null);
    const [bestTime, setBestTime] = useState(null);
    const [isClickable, setIsClickable] = useState(false);
    const [hardMode, setHardMode] = useState(false);

    useEffect(() => {
        const savedBestTime = localStorage.getItem("bestTime");
        if (savedBestTime) {
            setBestTime(Number(savedBestTime));
        }
        startGame();
    }, []);

    const startGame = () => {
        setBoxColor("bg-gray-500");
        setReactionTime(null);
        setIsClickable(false);

        const delay = Math.floor(Math.random() * (7000 - 3000 + 1)) + 3000; // Entre 3 y 7 segundos

        setTimeout(() => {
            setBoxColor("bg-yellow-500");
            setStartTime(Date.now());
            setIsClickable(true);

            if (hardMode) {
                setTimeout(() => {
                    if (boxColor === "bg-yellow-500") {
                        setBoxColor("bg-red-500");
                        setIsClickable(false);
                    }
                }, 800); 
            }
        }, delay);
    };

    const handleClick = () => {
        if (!isClickable) return;
        
        const reactionTime = Date.now() - startTime;
        setReactionTime(reactionTime);
        setIsClickable(false);
        setBoxColor("bg-green-500");

        if (bestTime === null || reactionTime < bestTime) {
            setBestTime(reactionTime);
            localStorage.setItem("bestTime", reactionTime); 
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4 text-black">¡Juego de reacción!</h1>
            <div 
                className={`w-40 h-40 ${boxColor} rounded-lg shadow-lg transition-colors duration-200 cursor-pointer`}
                onClick={handleClick}
            ></div>
            <p className="mt-4 text-lg text-stone-500">{reactionTime ? `Tiempo de reacción: ${reactionTime} ms` : "Haz clic cuando sea amarillo"}</p>
            <p className="text-sm text-stone-500">{bestTime ? `Mejor tiempo: ${bestTime} ms` : "No hay récord aún"}</p>
            <RestartButton onClick={startGame} />
            <button 
                className="mt-4 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition"
                onClick={() => setHardMode(!hardMode)}
            >
                {hardMode ? "Modo Normal" : "Modo Difícil"}
            </button>
        </div>
    );
}

export default ReactionGame;
