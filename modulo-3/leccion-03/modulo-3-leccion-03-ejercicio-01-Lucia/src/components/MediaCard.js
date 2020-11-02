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
            <img src={this.props.image} className="App-logo" alt="logo" />
            <div className="title-container">
              <p className="title">{this.props.name}</p>
              <p>{this.props.date}</p>
            </div>
          </header>
          <main>
            <p className="main-text">{this.props.text}</p>
          </main>
          <footer className="footer">
            <p className="footer-text">Leer más...</p>
            <div className="likes-container">
              <p>{this.props.likes}</p>
              <i class="fas fa-heart">{this.props.heart}</i>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default MediaCard;
