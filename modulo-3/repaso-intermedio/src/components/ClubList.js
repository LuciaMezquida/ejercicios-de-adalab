import React from "react";
import PropTypes from "prop-types";
import Club from "./Club";

class ClubList extends React.Component {
  render() {
    const dataList = this.props.data.map((item) => (
      <li>
        <Club class={item.fa} name={item.name} members={item.members} />
      </li>
    ));
    return <ul>{dataList}</ul>;
  }
}

export default ClubList;
