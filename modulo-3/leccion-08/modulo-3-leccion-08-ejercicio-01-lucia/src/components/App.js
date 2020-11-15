import "../styleSheets/App.css";
import React, { useState, useRef } from "react";
// import React, { useRef } from 'react';
function App() {
  const fr = new FileReader();
  let textInput = useRef(null);
  let introImage = useRef(null);
  const [input, setInput] = useState("");
  const [textarea, setTextarea] = useState("");
  const [selectArea, setSelectArea] = useState("");
  function handleInput(ev) {
    if (ev.target.id === "input") {
      setInput(ev.target.value);
    } else if (ev.target.id === "textarea") {
      setTextarea(ev.target.value);
    } else if (ev.target.id === "select") {
      setSelectArea(ev.target.value);
    }
    textInput.current.focus();
  }
  function getImage(e) {
    const myFile = e.currentTarget.files[0];
    fr.readAsDataURL(myFile);
  }
  return (
    <div className="App">
      <form>
        <label> Nombre </label>
        <input ref={textInput} id="input" value={input} onChange={handleInput} />
        <label>Descripción</label>
        <textarea id="textarea" value={textarea} onChange={handleInput}></textarea>
        <select id="select" value={selectArea} onChange={handleInput}>
          <option value="español">Español</option>
          <option value="inglés">Inglés</option>
          <option value="portugués">Portugués</option>
        </select>
        <br />
        <div class="action">
          <button class="action__upload-btn js__profile-trigger" type="button">
            Añadir imagen
          </button>
          <input
            onChange={getImage}
            type="file"
            name=""
            id="img-selector"
            class="action__hiddenField js__profile-upload-btn"
          />
          <div class="profile">
            <div class="visualize profile__preview js__profile-preview"></div>
          </div>
        </div>
      </form>
      <p>{"El nombre es: " + input}</p>
      <p>{"La descripción es: " + textarea}</p>
      <p>{"El idioma seleccionado es: " + selectArea}</p>
    </div>
  );
}
export default App;
