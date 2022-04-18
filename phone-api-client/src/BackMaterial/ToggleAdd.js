import React, { Component } from "react";
import AddEditForm from "./AddEditForm";

export class ToggleAdd extends Component {
  constructor(props) {
    super(props);

    this.state = { isFormOpen: this.props.isFormOpen };
  }

  handleFormOpen = () => {
    this.setState({ isFormOpen: true });
  };

  handleFormClose = () => {
    this.setState({ isFormOpen: false });
  };

  render() {
    // console.log('render - form state: ' + this.state.isFormOpen);
    if (this.state.isFormOpen) {
      return (
        <AddEditForm
          onFormSubmit={this.props.onFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <div>
          <button className="ui basic button" onClick={this.handleFormOpen}>
            <i className="icon plus"></i>
            Add Back Material
          </button>
        </div>
      );
    }
  }
}

export default ToggleAdd;
