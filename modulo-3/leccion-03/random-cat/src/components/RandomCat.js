import React from "react";

const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  render() {
    const cat = getRandomInteger(NUMBER_OF_CATS);
    return (
      <a href="http://lorempixel.com">
        <img src={`http://lorempixel.com/400/200/cats/${cat}`} alt="Random cat" />
      </a>
    );
  }
}

export default RandomCat;
