import React from "react";

function Product(props) {
  // console.log(props.productImageUrl);
  return (
    <div className="item">
      <div className="image">
        <img src={process.env.PUBLIC_URL + props.productImageUrl}></img>
      </div>
      <div className="middle aligned content">
        <div className="header">
          <a>
            <i className="large caret up icon"></i>
          </a>
          {props.votes}
        </div>
        <div className="description">
          <a href={props.url}>{props.title}</a>
          <p>{props.description}</p>
        </div>
        <div className="extra">
          <span>Submitted by: </span>
          <img
            className="ui avatar image"
            src={process.env.PUBLIC_URL + props.submitterAvatarUrl}
            alt="user"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Product;
