import { useState } from "react";
import "./App.css";
import Chronometer from "./components/Chronometer/Chronometer";
import Countdown from "./components/Countdown/Countdown";
import ReactionGame from "./components/ReactionGame/ReactionGame";

function App() {
  const [timeMenu, setTimeMenu] = useState(null);

  if (timeMenu) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
        <button
          onClick={() => setTimeMenu(null)}
          className="absolute top-4 left-4 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition"
        >
          <i className="bi bi-arrow-left text-xl"></i>
        </button>

        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          {timeMenu === "Chronometer" && <Chronometer />}
          {timeMenu === "Countdown" && <Countdown />}
          {timeMenu === "ReactionGame" && <ReactionGame />}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-4 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-700 text-center">Selecciona una opción</h1>
        <button
          onClick={() => setTimeMenu("Chronometer")}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          <i className="bi bi-clock"></i> Cronómetro
        </button>
        <button
          onClick={() => setTimeMenu("Countdown")}
          className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition"
        >
          <i className="bi bi-hourglass-split"></i> Cuenta atrás
        </button>
        <button
          onClick={() => setTimeMenu("ReactionGame")}
          className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition"
        >
          <i className="bi bi-lightning-charge"></i> Juego de reacción
        </button>
      </div>
    </div>
  );
}

export default App;
