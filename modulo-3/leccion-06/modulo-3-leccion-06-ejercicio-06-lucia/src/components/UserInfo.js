import React from "react";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Ada",
      lastName: "Lovelace",
      birthDate: {
        day: 10,
        month: "diciembre",
        year: 1815,
      },
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput() {
    const newName = document.getElementById("name").value;
    const newLastName = document.getElementById("lastname").value;
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    this.setState((prevState) => {
      return {
        firstName: newName,
        lastName: newLastName,
        birthDate: {
          ...prevState.birthDate,
          day: day,
          month: month,
          year: year,
        },
      };
    });
  }

  render() {
    console.log(this.state);
    return (
      <>
        <form action="">
          <label htmlFor="name">Nombre</label>
          <input onChange={this.handleInput} type="text" id="name" />
          <label htmlFor="lastname">Apellido</label>
          <input onChange={this.handleInput} type="text" id="lastname" />
          <label htmlFor="day">Día de nacimiento</label>
          <input onChange={this.handleInput} type="text" id="day" />
          <label htmlFor="month">Mes de nacimiento</label>
          <input onChange={this.handleInput} type="text" id="month" />
          <label htmlFor="year">Día, mes y año de nacimiento</label>
          <input onChange={this.handleInput} type="text" id="year" />
        </form>
        <p>
          {this.state.firstName} {this.state.lastName} nació el {this.state.birthDate.day} de{" "}
          {this.state.birthDate.month} de {this.state.birthDate.year}
        </p>
      </>
    );
  }
}

export default UserInfo;
