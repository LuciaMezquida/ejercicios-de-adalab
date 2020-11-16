import React from "react";
import PropTypes from "prop-types";

class FilterList extends React.Component {
  render() {
    return (
      <form action="" className="filter-form">
        <label htmlFor="male">Hombre</label>
        <input onClick={this.props.handleFilter} type="checkbox" name="male" id="gender" />
        <label htmlFor="female">Mujer</label>
        <input onClick={this.props.handleFilter} type="checkbox" name="female" id="gender" />
        <label htmlFor="Inverness">Inverness</label>
        <input onClick={this.props.handleFilter} type="checkbox" name="Inverness" id="Inverness" />
        <label htmlFor="Ballina">Ballina</label>
        <input onClick={this.props.handleFilter} type="checkbox" name="Ballina" id="Ballina" />
        <label htmlFor="Sydney">Sydney</label>
        <input onClick={this.props.handleFilter} type="checkbox" name="Sydney" id="Sydney" />
      </form>
    );
  }
}
FilterList.propTypes = {};
export default FilterList;
