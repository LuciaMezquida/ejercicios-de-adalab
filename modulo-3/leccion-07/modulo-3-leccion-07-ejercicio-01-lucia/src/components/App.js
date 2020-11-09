import "../styleSheets/App.css";
import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(38);
  const [gift, setGift] = useState(1);
  // const getOlder = () => {
  //   setNumber(number + 1);
  // };
  const getMoreGifts = () => {
    setNumber(number + 1);
    setGift(gift + 1);
  };
  return (
    <div className="App">
      <p className="text">Hoy tengo {number} años de edad</p>
      {/* <button onClick={getOlder} className="btn">
        Hazme más viejo
      </button> */}
      <p className="text">Tengo {gift} regalos</p>
      <button onClick={getMoreGifts} className="btn">
        Dame más regalos
      </button>
    </div>
  );
}

export default App;
