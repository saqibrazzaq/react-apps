import React, { Component } from "react";
import JobForm from "./JobForm";
import Job from "./Job";

export class JobViewEditContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { isFormOpen: false };
  }

  handleCloseForm = () => {
    this.setState({ isFormOpen: false });
  };

  handleOpenForm = () => {
    this.setState({ isFormOpen: true });
  };

  render() {
    if (this.state.isFormOpen) {
      return (
        <JobForm
          job={this.props.job}
          onFormSubmit={this.props.onFormSubmit}
          onCloseForm={this.handleCloseForm}
        />
      );
    } else {
      return (
        <Job
          onOpenForm={this.handleOpenForm}
          onCloseForm={this.handleOpenForm}
          key={this.props.job.id}
          job={this.props.job}
          onDeleteJob={this.props.onDeleteJob}
        />
      );
    }
  }
}

export default JobViewEditContainer;
