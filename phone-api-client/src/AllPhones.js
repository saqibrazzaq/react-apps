import React, { Component } from "react";
import Phone from "./Phone";

export class AllPhones extends Component {
  constructor(props) {
    super(props);

    // Initialize with empty list
    this.state = {
      phones: [],
      isLoaded: false,
      error: null,
    };
  }

  componentDidMount() {
    const url = "https://localhost:7294/api/v1/Phones";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            phones: result.data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            phones: [],
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, phones } = this.state;
    if (error) {
      return <div>Error: {error}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }else {
      return (
        <div className="ui list">
          {phones.map((phone) => {
            // console.log(phone);
            return <Phone key={phone.id} phone={phone} />;
          })}
        </div>
      );
    }
  }
}

export default AllPhones;
