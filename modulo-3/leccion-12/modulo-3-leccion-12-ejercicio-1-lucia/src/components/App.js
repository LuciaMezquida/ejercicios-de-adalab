import "../styleSheets/App.css";
import Header from "./Header";
import Counter from "./Counter";
import Relax from "./Relax";
import { Route, Switch } from "react-router-dom";
import FormInput from "./FormInput";
import React, { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "data";

const App = () => {
  const [inputValue, setInputValue] = useState(localStorage.getItem(LOCAL_STORAGE_KEY));

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, inputValue);
  });

  const handleInput = (ev) => {
    setInputValue(ev.currentTarget.value);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <FormInput handleInput={handleInput} />
        </Route>
        <Route path="/counter" component={Counter} />
        <Route path="/relax" component={Relax} />
      </Switch>
    </div>
  );
};
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue: "",
//     };
//     this.handleInput = this.handleInput.bind(this);
//   }
//   componentDidMount() {
//     const data = localStorage.getItem(LOCAL_STORAGE_KEY);
//     this.setState({
//       inputValue: data,
//     });
//   }
//   componentDidUpdate() {
//     localStorage.setItem(LOCAL_STORAGE_KEY, this.state.inputValue);
//   }

//   handleInput(ev) {
//     this.setState({
//       inputValue: ev.currentTarget.value,
//     });
//   }

//   render() {
//     console.log(this.state.inputValue);
//     return (
//       <div className="App">
//         <Switch>
//           <Route exact path="/">
//             <Header />
//             <FormInput handleInput={this.handleInput} />
//           </Route>
//           <Route path="/counter" component={Counter} />
//           <Route path="/relax" component={Relax} />
//         </Switch>
//       </div>
//     );
//   }
// }

export default App;
