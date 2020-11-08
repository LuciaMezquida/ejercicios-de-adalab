import React from "react";

class ShowAllButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(ev) {
    this.props.handleButton(ev);
  }

  render() {
    return <button onClick={this.props.handleButton}>Todos</button>;
  }
}

export default ShowAllButton;
