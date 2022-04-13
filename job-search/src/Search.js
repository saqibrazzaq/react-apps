import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import jobs from "./Seed";

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { jobs: jobs };
  }

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
        })
        // console.log('skills: ' + skillsFound.length + ' ' + skillsFound);
        return (skillsFound.length > 0) ? true : false;
      }),
    });
  };

  componentDidMount() {
    //this.handleSearch("dev");
  }

  render() {
    return (
      <div>
        <h1>Job Search</h1>
        <SearchBar onSearch={this.handleSearch} />
        <SearchResults jobs={this.state.jobs} />
      </div>
    );
  }
}

export default Search;
