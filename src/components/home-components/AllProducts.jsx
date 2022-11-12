import React from "react";
import RandomProducts from "../generic-componets/RandomProducts";

function AllProducts() {
  return (
    <div className="all-products" >
      <h1>Best Seller Products</h1>
      <p>There are many variations passages</p>

      <RandomProducts/>
    </div>
  );
}

export default AllProducts;
