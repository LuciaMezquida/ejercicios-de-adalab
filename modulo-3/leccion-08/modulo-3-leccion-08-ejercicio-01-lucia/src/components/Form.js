import React from "react";
import PropTypes from "prop-types";
import "../styleSheets/App.css";

const fr = new FileReader();
//From https://github.com/Adalab/react-or-file/blob/master/src/App.js

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      inputDescription: "",
      inputLanguage: "",
      fileName: "Nombre de archivo por defecto",
      fileUrl: "https://placehold.it/200x200",
    };
    this.handleInput = this.handleInput.bind(this);
    this.fakeClick = this.fakeClick.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.writeImage = this.writeImage.bind(this);
    this.fileInput = React.createRef();
  }
  fakeClick() {
    console.log("Yay");
    this.fileInput.current.click();
  }

  writeImage() {
    const url = fr.result;
    this.setState({
      fileUrl: url,
    });
  }

  handleFileChange(e) {
    const myFile = e.currentTarget.files[0];
    const name = myFile.name;

    fr.addEventListener("load", this.writeImage);
    fr.readAsDataURL(myFile);

    this.setState({
      fileName: name,
    });
  }
  handleInput(ev) {
    console.log(ev.currentTarget.value);
    if (ev.currentTarget.id === "name") {
      this.setState({
        input: ev.currentTarget.value,
      });
    } else if (ev.currentTarget.id === "description") {
      this.setState({
        inputDescription: ev.currentTarget.value,
      });
    } else if (ev.currentTarget.id === "language") {
      this.setState({
        inputLanguage: ev.currentTarget.value,
      });
    }
  }

  render() {
    const fr = new FileReader();
    function getImage(e) {
      const myFile = e.currentTarget.files[0];
      fr.readAsDataURL(myFile);
    }
    return (
      <>
        <form action="" className="form">
          <label htmlFor="name">Nombre</label>
          <input onChange={this.handleInput} type="text" id="name" />
          <label htmlFor="description">Descripción</label>
          <textarea
            onChange={this.handleInput}
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
          <select onClick={this.handleInput} name="language" id="language">
            <option value="default" disabled>
              Elige un idioma
            </option>
            <option value="Español">Español</option>
            <option value="Inglés">Inglés</option>
            <option value="Portugués">Portugués</option>
          </select>
          <div className="app">
            <input type="file" ref={this.fileInput} onChange={this.handleFileChange} />

            <button onClick={this.fakeClick}>Click</button>

            <h2>{this.state.fileName}</h2>

            <img className="img" src={this.state.fileUrl} alt={this.state.fileName} />

            <div className="bg" style={{ backgroundImage: `url(${this.state.fileUrl})` }}></div>
          </div>
        </form>
        <p>{this.state.input}</p>
        <p>{this.state.inputDescription}</p>
        <p>{this.state.inputLanguage}</p>
      </>
    );
  }
}

export default Form;
