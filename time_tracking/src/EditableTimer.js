import React, { Component } from "react";
import Timer from "./Timer";
import TimerForm from "./TimerForm";

export class EditableTimer extends Component {
  constructor(props) {
    super(props);

    this.state = { editFormOpen: false };
  }

  handleEditClick = () => {
    // console.log('Edit clicked');
    this.openForm();
  }

  handleFormSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.closeForm();
  }

  handleFormClose = () => {
    this.closeForm();
  }

  openForm = () => {
    this.setState({editFormOpen: true});
  }

  closeForm = () => {
    this.setState({editFormOpen: false});
  }

  render() {
    // Open edit form
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          onFormClose={this.handleFormClose}
          onFormSubmit={this.handleFormSubmit}
        />
      );
    } else {
      // Open Timer
      return (
        <Timer
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
          onEditClick={this.handleEditClick}
          onTrashClick={this.props.onTrashClick}
        />
      );
    }
  }
}

export default EditableTimer;
