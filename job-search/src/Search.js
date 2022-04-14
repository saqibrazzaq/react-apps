import React, { Component } from "react";
import JobAddContainer from "./JobAddContainer";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import jobs from "./Seed";
import { v4 as uuidv4 } from "uuid";

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: jobs,
    };
  }

  handleFormSubmit = (job) => {
    job.id === "" ? this.createJob(job) : this.updateJob(job);
  };

  createJob = (job) => {
    // console.log(job);
    // set new id
    job.id = uuidv4();
    job.skills = [];
    this.setState({ jobs: this.state.jobs.concat(job) });
    console.log("New job created");
  };

  updateJob = (job) => {
    // Update jobs array
    const jobs = this.state.jobs.map((j) => {
      if (job.id === j.id) {
        return Object.assign({}, j, job);
      } else {
        return j;
      }
    });
    // Update state
    this.setState({ jobs: jobs });
    console.log("Job updated");
  };

  handleDeleteJob = (id) => {
    // Remove from array
    const jobs = this.state.jobs.filter((job) => job.id !== id);
    // Set state
    this.setState({ jobs: jobs });
    console.log('Job deleted');
  };

  handleSearch = (q) => {
    this.setState({
      jobs: jobs.filter((job) => {
        // Search in title
        if (job.title.toLowerCase().indexOf(q.toLowerCase()) !== -1) {
          return true;
        }
        // Search in skills
        const skillsFound = job.skills.filter((skill) => {
          if (skill.toLowerCase().indexOf(q.toLowerCase()) !== -1) {
            return true;
          }
        });
        // console.log('skills: ' + skillsFound.length + ' ' + skillsFound);
        return skillsFound.length > 0 ? true : false;
      }),
    });
  };

  componentDidMount() {
    //this.handleSearch("dev");
  }

  render() {
    // console.log(this.state.jobs);
    return (
      <div>
        <h1>Job Search</h1>
        <SearchBar onSearch={this.handleSearch} />
        <JobAddContainer onFormSubmit={this.handleFormSubmit} />
        <SearchResults
          onDeleteJob={this.handleDeleteJob}
          onFormSubmit={this.handleFormSubmit}
          jobs={this.state.jobs}
        />
      </div>
    );
  }
}

export default Search;
