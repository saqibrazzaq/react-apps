import React, { Component } from "react";
import api from "../api/api";

export class AvailabilitiesList extends Component {
  constructor(props) {
    super(props);

    this.state = { availabilities: [] };
  }

  componentDidMount() {
    this.loadAvailabilities();
  }

  loadAvailabilities() {
    api
      .get("/availabilities")
      .then((res) => {
        if (res.data && res.data.success && res.data.success === true) {
          this.setState({ availabilities: res.data.data });
        }
      })
      .catch((err) => {
        console.error("Error loading availabilities. " + err);
      });
  }
  render() {
    // List all availabilities
    const availabilities = this.state.availabilities.map((a) => {
      const { id, name, position } = a;
      return (
        <div key={id} className="item">
          {name}
        </div>
      );
    });
    return (
      <div className="ui segment">
        <h2>Availabilities</h2>

        <div className="ui list">{availabilities}</div>
      </div>
    );
  }
}

export default AvailabilitiesList;
