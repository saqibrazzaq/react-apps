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
    // console.log(timer);
    this.createTimer(timer);
  };

  handleEditFormSubmit = (timer) => {
    this.updateTimer(timer);
  };

  createTimer = (timer) => {
    const t = newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t),
    });
  };

  updateTimer = (argsTimer) => {
    // Read all timers in state
    const timers = this.state.timers.map((t) => {
      if (argsTimer.id === t.id) {
        return Object.assign({}, t, {
          title: argsTimer.title,
          project: argsTimer.project
        });
      } else {
        return t;
      }
    });
    // Update state
    this.setState({timers: timers});
  }

  handleTrashClick = (id) => {
    this.deleteTimer(id);
  }

  deleteTimer = (id) => {
    // filter timers from state, exclude id
    const timers = this.state.timers.filter(t => t.id !== id);
    // Set state
    this.setState({timers: timers});
  }

  render() {
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTimerList
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
            timers={this.state.timers}
          />
          <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
        </div>
      </div>
    );
  }
}

export default TimersDashboard;
