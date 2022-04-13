import React, { Component } from "react";

export class SearchResultsSummary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h4 className="ui header">
        Jobs found: {this.props.jobs.length}
      </h4>
    );
  }
}

export default SearchResultsSummary;
