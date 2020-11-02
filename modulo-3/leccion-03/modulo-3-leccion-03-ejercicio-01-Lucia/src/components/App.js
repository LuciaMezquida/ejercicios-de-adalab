import React from "react";
import MediaCard from "./MediaCard";
import lucia from "../Lucia.jpg";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MediaCard
          name="Lucia Mezquida"
          date="Sábado 31 de Octubre de 2020"
          image={lucia}
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quo ducimus facilis
          libero, natus maxime dolorem voluptatem officiis. Fugit laudantium sed architecto
          commodi eum quae maiores corrupti recusandae consequuntur necessitatibus. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Cumque dignissimos saepe molestiae quidem
          provident voluptates sunt ea natus alias rem? Perspiciatis, dolorem! At in omnis animi
          similique fugit eius doloribus."
          likes="37"
          heart="🤍"
        />
      </div>
    );
  }
}

export default App;
