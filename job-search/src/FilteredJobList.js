import React, { Component } from 'react'
import Job from './Job'

export class FilteredJobList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const jobList = this.props.jobs.map((job) => {
      return (
        <Job key={job.id} job={job} />
      );
    });
    return (
      <div className='ui divided items'>
        {jobList}
      </div>
    )
  }
}

export default FilteredJobList