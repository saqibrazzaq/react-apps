import React, { Component } from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import { v4 as uuidv4 } from "uuid";
import { newTimer } from "./helpers";

export class TimersDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timers: [
        {
          title: "Practice squat",
          project: "Gym chores",
          id: uuidv4(),
          elapsed: 5456099,
          runningSince: Date.now(),
        },
        {
          title: "Bake squash",
          project: "Kitchen chores",
          id: uuidv4(),
          elapsed: 1273998,
          runningSince: null,
        },
      ],
    };
  }

  handleCreateFormSubmit = (timer) => {
    console.log(timer);
    this.createTimer(timer);
  };

  createTimer = (timer) => {
    const t = newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t),
    });
  };

  render() {
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTimerList timers={this.state.timers} />
          <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
        </div>
      </div>
    );
  }
}

export default TimersDashboard;
