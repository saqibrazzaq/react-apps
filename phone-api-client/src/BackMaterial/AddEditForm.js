import React, { Component } from "react";

export class AddEditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {name: ''};
    console.log(this.state.name);
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  handleFormSubmit = () => {
    console.log(this.state.name);
    // Prepare create dto
    const backMaterial = {
      name: this.state.name
    };

    // Call parent form submit
    this.props.onFormSubmit(backMaterial);
    this.props.onFormClose();
  }

  render() {
    return (
      <div className="ui form">
        <div className="field">
          <label>Name</label>
          <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} />
        </div>
        <button className="ui primary button" onClick={this.handleFormSubmit}>Save</button>
        <button className="ui button" onClick={this.props.onFormClose}>
          Discard
        </button>
      </div>
    );
  }
}

export default AddEditForm;
