import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return props.productList.length > 0 ? (
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          incQty={props.incQty}
          index={i}
          decQty={props.decQty}
          remove={props.remove}
        />
      );
    })
  ) : (
    <h1>No Product Exists in the Cart</h1>
  );
}
