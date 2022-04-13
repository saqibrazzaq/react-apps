import React, { Component } from "react";
import EditableTimer from "./EditableTimer";

export class EditableTimerList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // Get timers from props
    const timers = this.props.timers.map((t) => {
      return (
        <EditableTimer
          key={t.id}
          id={t.id}
          title={t.title}
          project={t.project}
          elapsed={t.elapsed}
          runningSince={t.runningSince}
          onFormSubmit={this.props.onFormSubmit}
          onTrashClick={this.props.onTrashClick}
        />
      );
    });
    return (
      <div id="timers">
        {timers}
      </div>
    );
  }
}

export default EditableTimerList;
