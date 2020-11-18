import "../styleSheets/App.css";
import React from "react";
import Header from "./Header";
import Counter from "./Counter";
import Relax from "./Relax";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/counter" component={Counter} />
          <Route path="/relax" component={Relax} />
        </Switch>
      </div>
    );
  }
}

export default App;
