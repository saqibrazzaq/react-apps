import React, { Component } from "react";
import Seed from "./Seed";
import Product from "./Product";

export class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({ products: Seed });
  }

  handleProductUpVote = (productId) => {
    // Replace the product's vote with new object
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {votes: product.votes + 1});
      } else {
        return product;
      }
    });
    // Update state
    this.setState({products: nextProducts});
  }

  render() {
    const products = this.state.products.sort((a, b) => b.votes - a.votes);
    const productList = products.map((product) => {
      return (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
          onVote={this.handleProductUpVote}
        />
      );
    });

    return <div className="ui unstackable items">{productList}</div>;
  }
}

export default ProductList;
