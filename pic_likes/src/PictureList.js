import React, { Component } from "react";
import Picture from "./Picture";
import Pictures from "./Seed";

export class PictureList extends Component {
  constructor(props) {
    super(props);

    // Load empty list
    this.state = { pictures: [] };
  }

  componentDidMount() {
    // Load from seed file
    this.setState({pictures: Pictures});
  }

  addLikeHandler = (pictureId) => {
    // Increment like
    const pictures = this.state.pictures.map((p) => {
      if (p.id === pictureId) {
        return Object.assign({}, p, {Likes: p.Likes + 1});
      } else {
        return p;
      }
    });
    // Update state
    this.setState({pictures: pictures});
  }

  addFavoriteHandler = (pictureId) => {
    // Increment favorites
    const pictures = this.state.pictures.map((p) => {
      if (p.id === pictureId) {
        return Object.assign({}, p, {Favorites: p.Favorites + 1});
      } else {
        return p;
      }
    });
    // Update state
    this.setState({pictures: pictures});
  }

  render() {
    // Load pictures and sort by likes
    const sortedPictures = this.state.pictures.sort(
      (a, b) => b.Likes - a.Likes
    );
    // Load picture
    const pictures = sortedPictures.map((p) => {
      return (
        <Picture
          key={p.id}
          id={p.id}
          Name={p.Name}
          ImageUrl={p.ImageUrl}
          Details={p.Details}
          Likes={p.Likes}
          Favorites={p.Favorites}
          OnLike={this.addLikeHandler}
          OnFavorite={this.addFavoriteHandler}
        ></Picture>
      );
    });

    return (
      <div>
        <h2 className="ui header">
          Picture Like App
          <div className="sub header">
            Prize will be given to the top 3 pictures
          </div>
        </h2>

        <div className="ui cards">
          {pictures}
        </div>
      </div>
    );
  }
}

export default PictureList;
