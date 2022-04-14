import React, { Component } from "react";
import Job from "./Job";
import JobViewEditContainer from "./JobViewEditContainer";

export class FilteredJobList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const jobList = this.props.jobs.map((job) => {
      return (
        <JobViewEditContainer
          key={job.id}
          job={job}
          onFormSubmit={this.props.onFormSubmit}
          onDeleteJob={this.props.onDeleteJob}
        />
      );
    });
    return <div className="ui divided items">{jobList}</div>;
  }
}

export default FilteredJobList;
