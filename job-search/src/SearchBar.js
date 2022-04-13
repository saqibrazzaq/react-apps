import React, { Component } from "react";

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      q: "",
    };
  }

  handleSearchChange = (e) => {
    this.setState({q: e.target.value});
    this.search(e.target.value);
  }

  search = (q) => {
    this.props.onSearch(q);
  }

  render() {
    return (
      <div>
        <div className="ui fluid icon input">
          <input
            value={this.state.q}
            onChange={this.handleSearchChange}
            type="text"
            placeholder="Search job title and skills..."
          />
          <i className="search icon"></i>
        </div>
      </div>
    );
  }
}

export default SearchBar;
