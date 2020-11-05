import "./App.css";
import React from "react";
import HalfPage from "./HalfPage";
import OtherHalfPage from "./OtherHalfPage";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <HalfPage>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus magni voluptate nisi
            odit? Reprehenderit adipisci officia ducimus obcaecati similique, dolorem corrupti
            laboriosam amet rem ullam, asperiores magni, corporis veritatis quasi. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Hic aliquam alias maxime saepe temporibus culpa
            suscipit soluta accusantium quo sapiente voluptates est molestias mollitia,
            exercitationem vero voluptas officia, recusandae dolorum!
          </p>
        </HalfPage>
        <OtherHalfPage>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus magni voluptate nisi
            odit? Reprehenderit adipisci officia ducimus obcaecati similique, dolorem corrupti
            laboriosam amet rem ullam, asperiores magni, corporis veritatis quasi. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Hic aliquam alias maxime saepe temporibus culpa
            suscipit soluta accusantium quo sapiente voluptates est molestias mollitia,
            exercitationem vero voluptas officia, recusandae dolorum!
          </p>
        </OtherHalfPage>
      </div>
    );
  }
}

export default App;
