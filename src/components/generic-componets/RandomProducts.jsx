import React from "react";
import images from "../../assets/jsonimg/jsonimg";
import { Link } from "react-router-dom";

function RandomProducts() {
  return (
    <div className="all-random">
      {images.map((item, ind) => {
        return (
          <Link to={`/product/${item.title}`} key={ind}>
            <img src={item.url} alt={item.title.replaceAll("-", " ")} />
            <h3>{item.title.replaceAll("-", " ")}</h3>
            <p>{`$${item.amount}`}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default RandomProducts;
