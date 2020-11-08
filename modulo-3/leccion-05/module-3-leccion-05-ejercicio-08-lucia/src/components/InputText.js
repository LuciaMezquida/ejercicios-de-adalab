// InputText.js
import React from "react";

const InputText = (props) => {
  const handleKeyUp = (ev) => {
    let name = props.name;
    let value = ev.currentTarget.value;

    props.handleInput(name, value);
  };

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type="text" name={props.name} onKeyUp={handleKeyUp} />
    </div>
  );
};

export default InputText;
