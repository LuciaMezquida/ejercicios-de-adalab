import React from "react";

class FruitBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popularFruits: ["kiwi", "pinneaple", "strawberry"],
      newFruit: "",
    };
    this.handleButton = this.handleButton.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleInput(ev) {
    let newItem = ev.currentTarget.value;
    this.setState((prevState) => {
      return {
        newFruit: newItem,
      };
    });
  }
  handleButton() {
    this.setState((prevState) => {
      return {
        popularFruits: [...prevState.popularFruits, prevState.newFruit],
        newFruit: "",
      };
    });
  }
  handleDelete(ev) {
    let fruit = ev.currentTarget.value;
    let arrFilter = this.state.popularFruits.filter((item) => item !== fruit);
    this.setState({
      popularFruits: arrFilter,
    });
  }

  render() {
    const arrFruit = [...this.state.popularFruits];
    const fruitList = arrFruit.map((item, index) => {
      return (
        <>
          <li key={index}>{item}</li>
          <button onClick={this.handleDelete} value={item}>
            Eliminar
          </button>
        </>
      );
    });

    return (
      <div className="container">
        <ul>{fruitList}</ul>
        <input onChange={this.handleInput} type="text" />
        <button onClick={this.handleButton}>Añadir</button>
      </div>
    );
  }
}

export default FruitBasket;
