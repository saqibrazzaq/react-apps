import React, { Component } from "react";

export class Picture extends Component {
  constructor(props) {
    super(props);
  }

  onLikeClick = () => {
    // console.log("Like clicked - " + this.props.Name);
    this.props.OnLike(this.props.id);
  };

  onFavoriteClick = () => {
    // console.log("Favorite clicked - " + this.props.Name);
    this.props.OnFavorite(this.props.id);
  };

  render() {
    return (
      <div className="card">
        <div className="image">
          <img src={this.props.ImageUrl} />
        </div>
        <div className="content">
          <div className="header">{this.props.Name}</div>
          <div className="description">{this.props.Details}</div>
        </div>
        <div className="content">
          <div
            className="ui labeled button left floated"
            onClick={this.onLikeClick}
          >
            <div className="ui icon red button">
              <i className="heart icon"></i>
            </div>
            <a className="ui basic label">{this.props.Likes}</a>
          </div>
          <div
            className="ui labeled button right floated"
            onClick={this.onFavoriteClick}
          >
            <div className="ui icon yellow button">
              <i className="star icon"></i>
            </div>
            <a className="ui basic label">{this.props.Favorites}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Picture;
