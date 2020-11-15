import React from "react";
import PropTypes from "prop-types";

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isUp: false,
    };
    this.handleCollapse = this.handleCollapse.bind(this);
  }
  handleCollapse() {
    this.setState({
      isOpen: !this.state.isOpen,
      isUp: !this.state.isUp,
    });
    console.log(this.state.isOpen);
    console.log(this.state.isUp);
  }
  render() {
    const openCollapsible = this.state.isOpen ? "" : "collapsed";
    const upArrow = this.state.isUp ? "turn" : "";
    return (
      <>
        <div onClick={this.handleCollapse} className="App">
          <h2>{this.props.name}</h2>
          <i className={upArrow + " fas fa-angle-down"}></i>
        </div>
        <div className={openCollapsible}>{this.props.children}</div>
      </>
    );
  }
}
Collapsible.propTypes = {};
export default Collapsible;
