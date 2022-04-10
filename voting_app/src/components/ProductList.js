import React from "react";
import Product from "./Product";
import Seed from "./Seed";

function ProductList() {
  // console.log(Seed[0]);
  // const product = Seed[0];

  const productsSorted = Seed.sort((a, b) => (b.votes - a.votes));
  const products = productsSorted.map((product) => {
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
      />
    );

    // console.log(product);
  });

  // console.log(products);

  return <div className="ui unstackable items">{products}</div>;
}

export default ProductList;
