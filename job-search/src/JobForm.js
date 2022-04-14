import React, { Component } from "react";

export class JobForm extends Component {
  constructor(props) {
    super(props);

    // Initialize state with props or empty
    if (this.props.job) {
      this.state = {
        id: this.props.job.id || "",
        title: this.props.job.title || "",
        category: this.props.job.category || "",
        minExpYears: this.props.job.minExpYears || "",
        salaryPkr: this.props.job.salaryPkr || "",
      };
    } else {
      this.state = {
        id: "",
        title: "",
        category: "",
        minExpYears: "",
        salaryPkr: "",
      };
    }
  }

  handleFormSubmit = () => {
    const job = {
      id: this.state.id,
      title: this.state.title,
      category: this.state.category,
      minExpYears: this.state.minExpYears,
      salaryPkr: this.state.salaryPkr,
      // skills: ["C#", "JavaScript", ".NET"],
    };
    this.props.onFormSubmit(job);
    this.props.onCloseForm();
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value });
  };

  handleSalaryChange = (e) => {
    this.setState({ salaryPkr: e.target.value });
  };

  handleMinExpYearsChange = (e) => {
    this.setState({ minExpYears: e.target.value });
  };

  render() {
    return (
      <div className="ui aligned basic segment">
        <div className="ui form">
          <div className="field">
            <label>Job Title</label>
            <input
              value={this.state.title}
              onChange={this.handleTitleChange}
              type="text"
              placeholder="Job Title"
            />
          </div>
          <div className="three fields">
            <div className="field">
              <label>Category</label>
              <input
                value={this.state.category}
                onChange={this.handleCategoryChange}
                type="text"
                placeholder="Category"
              />
            </div>
            <div className="field">
              <label>Salary</label>
              <input
                value={this.state.salaryPkr}
                onChange={this.handleSalaryChange}
                type="number"
                placeholder="Salary"
              />
            </div>
            <div className="field">
              <label>Experience</label>
              <input
                value={this.state.minExpYears}
                onChange={this.handleMinExpYearsChange}
                type="number"
                placeholder="Experience"
              />
            </div>
          </div>
          <button
            className="ui submit secondary button"
            onClick={this.handleFormSubmit}
          >
            Submit
          </button>
          <button className="ui button" onClick={this.props.onCloseForm}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default JobForm;
