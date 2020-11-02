import lucia from "../Lucia.jpg";
import React from "react";
import "../App.css";

class MediaCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="App-header">
            <img src={lucia} className="App-logo" alt="logo" />
            <div className="title-container">
              <p className="title">Lucía Mezquida</p>
              <p>Sábado 31 de Octubre de 2020</p>
            </div>
          </header>
          <main>
            <p className="main-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quo ducimus facilis
              libero, natus maxime dolorem voluptatem officiis. Fugit laudantium sed architecto
              commodi eum quae maiores corrupti recusandae consequuntur necessitatibus. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Cumque dignissimos saepe molestiae quidem
              provident voluptates sunt ea natus alias rem? Perspiciatis, dolorem! At in omnis animi
              similique fugit eius doloribus.
            </p>
          </main>
          <footer className="footer">
            <p className="footer-text">Leer más...</p>
            <div className="likes-container">
              <p>37</p>
              <i class="fas fa-heart"></i>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default MediaCard;
