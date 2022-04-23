import React, { Component } from "react";

export class BasicForm extends Component {

  onGreatClick = (e) => {
    console.log('great click', e.target.value);
  }

  onAmazingClick = (e) => {
    console.log('amazing click', e.target.value);
  }

  render() {
    return (
      <div className="ui container">
        <h1>What do you think of React?</h1>

        <button
          className="ui button"
          name="button1"
          value={"great"}
          onClick={this.onGreatClick}
        >
          Great
        </button>
        <button
          className="ui button"
          name="button2"
          value={"amazing"}
          onClick={this.onAmazingClick}
        >
          Amazing
        </button>
      </div>
    );
  }
}

export default BasicForm;
