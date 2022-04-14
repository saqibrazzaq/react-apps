import React, { Component } from "react";
import JobForm from "./JobForm";

export class JobAddContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormOpen: false,
    };
  }

  handleFormClose = () => {
    this.setState({ isFormOpen: false });
  };

  handleFormOpen = () => {
    this.setState({ isFormOpen: true });
  };

  render() {
    if (this.state.isFormOpen) {
      return (
        <JobForm
          onCloseForm={this.handleFormClose}
          onFormSubmit={this.props.onFormSubmit}
        />
      );
    } else {
      return (
        <div className="ui aligned basic segment">
          <button className="ui basic button" onClick={this.handleFormOpen}>
            <i className="icon plus"></i>
            Add new Job
          </button>
        </div>
      );
    }
  }
}

export default JobAddContainer;
