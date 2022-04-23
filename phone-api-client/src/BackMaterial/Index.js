import React, { Component } from "react";
import AllBackMaterials from "./AllBackMaterials";
import ToggleAdd from "./ToggleAdd";

export class Index extends Component {
  constructor(props) {
    super(props);

    this.state = { isFormOpen: false, isLoaded: false, error: null, items: [] };
  }

  handleFormOpen = () => {
    console.log("form open");
    this.setState({ isFormOpen: true });
    console.log("form state: " + this.state.isFormOpen);
  };

  handleFormClose = () => {
    console.log("form close");
    this.setState({ isFormOpen: false });
    console.log("form state: " + this.state.isFormOpen);
  };

  componentDidMount() {
    this.getBackMaterialList();
  }

  getBackMaterialList = () => {
    const url = "https://localhost:7294/api/v1/BackMaterials";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data,
          });
          // console.log("data fetch from server.");
        },
        (error) => {
          this.setState({
            isLoaded: true,
            items: [],
            error,
          });
        }
      );
  }

  handleFormSubmit = (createDto) => {
    console.log(createDto);
    const url = "https://localhost:7294/api/v1/BackMaterials";
    fetch(url, {
      method: "post",
      body: JSON.stringify(createDto),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Added: " + res.success);
        if (res.success) {
          console.log("Back Material added. ID: " + res.data.id);
          this.getBackMaterialList();
        } else {
          console.error(res.message);
        }
      });
  };

  render() {
    return (
      <div className="ui segment">
        <h2>Back Material</h2>
        <ToggleAdd
          isFormOpen={this.state.isFormOpen}
          onFormOpen={this.handleFormOpen}
          onFormClose={this.handleFormClose}
          onFormSubmit={this.handleFormSubmit}
          shouldRefresh={this.state.shouldRefresh}
        />
        <AllBackMaterials
          isLoaded={this.state.isLoaded}
          error={this.state.error}
          items={this.state.items}
        />
      </div>
    );
  }
}

export default Index;
