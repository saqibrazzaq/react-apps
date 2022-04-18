import React, { Component } from "react";
import BackMaterial from "./BackMaterial";

export class AllBackMaterials extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      items: [],
    };
  }

  

  render() {
    const { error, isLoaded, items } = this.props;
    if (error) {
      return <div>Error: {error}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="ui list">
          {items.map((backMaterial) => {
            // console.log(phone);
            return (
              <BackMaterial key={backMaterial.id} backMaterial={backMaterial} />
            );
          })}
        </div>
      );
    }
  }
}

export default AllBackMaterials;
