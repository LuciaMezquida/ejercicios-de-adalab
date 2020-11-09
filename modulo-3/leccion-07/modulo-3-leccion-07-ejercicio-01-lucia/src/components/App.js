import "../styleSheets/App.css";
import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(38);
  const getOlder = () => {
    setNumber(number + 1);
  };
  return (
    <div className="App">
      <p className="text">Hoy tengo {number} años de edad</p>
      <button onClick={getOlder} className="btn">
        Hazme más viejo
      </button>
    </div>
  );
}

export default App;
