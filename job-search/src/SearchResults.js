import React, { Component } from "react";
import FilteredJobList from "./FilteredJobList";
import SearchResultsSummary from "./SearchResultsSummary";

export class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui aligned basic segment">
        <SearchResultsSummary jobs={this.props.jobs} />
        <FilteredJobList
          onDeleteJob={this.props.onDeleteJob}
          onFormSubmit={this.props.onFormSubmit}
          jobs={this.props.jobs}
        />
      </div>
    );
  }
}

export default SearchResults;
