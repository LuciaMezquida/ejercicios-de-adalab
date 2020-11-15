import "../styleSheets/App.css";
import React from "react";

const users = [
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Gregory Goyle", time: 56 },
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const [name1, name2, name3] = users;
    return (
      <div className="App">
        <ul>
          <li key={name1.time}>{name1.name}</li>
          <li key={name2.time}>{name2.name}</li>
          <li key={name3.time}>{name3.name}</li>
        </ul>
      </div>
    );
  }
}

export default App;
