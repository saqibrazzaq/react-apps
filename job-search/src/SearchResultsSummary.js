import React, { Component } from "react";

export class SearchResultsSummary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <h2 className="ui sub header">Jobs found: {this.props.jobs.length}</h2>
      </div>
    );
  }
}

export default SearchResultsSummary;
