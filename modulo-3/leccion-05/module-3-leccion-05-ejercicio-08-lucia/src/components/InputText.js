// InputText.js
import React from "react";

const InputText = (props) => {
  const handleKeyUp = (ev) => {
    const data = {
      name: props.name,
      value: ev.currentTarget.value,
    };
    props.handleInput(data);
  };

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type="text" name={props.name} onKeyUp={handleKeyUp} />
    </div>
  );
};

export default InputText;
