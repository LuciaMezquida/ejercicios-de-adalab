import React from "react";
import MediaCard from "./MediaCard";
import lucia from "../Lucia.jpg";

class MediaList extends React.Component {
  render() {
    return (
      <section className="section-cats">
        <h1>Mis tarjetas</h1>
        <ul className="section-cats_list">
          <li>
            <MediaCard
              name="Lissandra"
              date="31 de Octubre de 2020"
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
          </li>
          <li>
            <MediaCard
              name="Mora"
              date="31 de Octubre de 2020"
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
          </li>
          <li>
            <MediaCard
              name="Lucia"
              date="31 de Octubre de 2020"
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
          </li>
        </ul>
      </section>
    );
  }
}

export default MediaList;
