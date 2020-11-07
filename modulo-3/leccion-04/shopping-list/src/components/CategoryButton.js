import React from "react";

class CategoryButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(ev) {
    this.props.handleClick(ev);
    this.forceUpdate();
  }

  render() {
    return <button onClick={this.props.handleClick}>{this.props.category}</button>;
  }
}

export default CategoryButton;
