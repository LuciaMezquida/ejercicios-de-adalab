import React from "react";
import "../App.css";

const MediaCard = (props) => {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={props.image} className="App-logo" alt="logo" />
          <div className="title-container">
            <p className="title">{props.name}</p>
            <p>{props.date}</p>
          </div>
        </header>
        <main>
          <p className="main-text">{props.text}</p>
        </main>
        <footer className="footer">
          <p className="footer-text">Leer más...</p>
          <div className="likes-container">
            <p>{props.likes}</p>
            <i class="fas fa-heart">{props.heart}</i>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MediaCard;
