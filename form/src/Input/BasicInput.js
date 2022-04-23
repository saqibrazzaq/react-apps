import React, { Component } from "react";
import isEmail from "validator/lib/isEmail";

export class BasicInput extends Component {
  constructor() {
    super();
    this.state = {
      fields: {
        name: "",
        email: "",
      },
      fieldErrors: {},
      people: [],
    };
  }

  validate = (person) => {
    const errors = {};
    console.log("validate: " + person);

    if (!person.name) errors.name = "Name Required";
    if (!person.email) errors.email = "Email Required";
    if (person.email && !isEmail(person.email)) errors.email = "Invalid Email";

    console.log("Errors: " + errors);
    return errors;
  };

  onFormSubmit = (e) => {
    console.log(this.state.fields);

    // Get all people
    const people = [...this.state.people];
    // Get current person from form
    const person = this.state.fields;
    // Validate fields
    const fieldErrors = this.validate(person);
    this.setState({ fieldErrors });

    e.preventDefault();

    // Check validation
    console.log(Object.keys(fieldErrors).length);
    if (Object.keys(fieldErrors).length) return;

    this.setState({
      people: people.concat(person),
      fields: { name: "", email: "" },
    });
  };

  onInputChange = (e) => {
    // Get all fields
    const fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };

  showNameError = () => {
    // console.log("errors: " + this.state.fieldErrors.name);
    if (this.state.fieldErrors.name || '') {
      // console.log("Show error");
      return (
        <div className="ui error message">
          <p>{this.state.fieldErrors.name}</p>
        </div>
      );
    }
  };

  showEmailError = () => {
    // console.log("errors: " + this.state.fieldErrors.email);
    if (this.state.fieldErrors.email || '') {
      // console.log("Show error");
      return (
        <div className="ui error message">
          <p>{this.state.fieldErrors.email}</p>
        </div>
      );
    }
  };

  render() {
    // Prepare list of names
    const people = this.state.people.map(({ name, email }, i) => {
      return (
        <div key={i} className="item">
          {name} ({email})
        </div>
      );
    });
    return (
      <div>
        <h1>Sign up Sheet</h1>

        <form className="ui form error" onSubmit={this.onFormSubmit}>
          <div className="required field ">
            <label>Name</label>
            <input
              placeholder="Name..."
              name="name"
              value={this.state.fields.name}
              onChange={this.onInputChange}
            ></input>
            {this.showNameError()}
          </div>
          <div className="required field">
            <label>Email</label>
            <input
              placeholder="Email..."
              name="email"
              value={this.state.fields.email}
              onChange={this.onInputChange}
            ></input>
            {this.showEmailError()}
          </div>
          <input className="ui button" type="submit"></input>
        </form>

        <h2>Attendees List</h2>

        <div className="ui list">{people}</div>
      </div>
    );
  }
}

export default BasicInput;
