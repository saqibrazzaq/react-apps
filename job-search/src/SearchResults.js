import React, { Component } from 'react'
import FilteredJobList from './FilteredJobList'
import SearchResultsSummary from './SearchResultsSummary'

export class SearchResults extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchResultsSummary jobs={this.props.jobs} />
        <FilteredJobList jobs={this.props.jobs} />
      </div>
    )
  }
}

export default SearchResults