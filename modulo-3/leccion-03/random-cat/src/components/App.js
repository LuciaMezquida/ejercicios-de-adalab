import React from "react";
import "../App.css";
import CatList from "./CatList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CatList />
      </div>
    );
  }
}
export default App;
