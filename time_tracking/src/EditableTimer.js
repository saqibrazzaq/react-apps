import React, { Component } from "react";
import Timer from "./Timer";
import TimerForm from "./TimerForm";

export class EditableTimer extends Component {
  constructor(props) {
    super(props);

    this.state = { editFormOpen: false };
  }
  render() {
    // Open edit form
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
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
        />
      );
    }
  }
}

export default EditableTimer;
