import React from "react";
import images from "../../assets/jsonimg/jsonimg";
import { Link } from "react-router-dom"

function LastCard() {
  return (
    <div className="last-card">
      <div className="last-card-firstPart">
        <p>20% OFF</p>
        <h2>FINE SMILE</h2>
        <p>15 Nov to 7 dec</p>
      </div>
      <img src={images[1].url} alt={images[1].title} />
      <div className="last-card-secondPart" >
        <p className="last-card-secondPart-title" >Beats Solo Air</p>
        <h2>Summer Sale</h2>
        <p  className="last-card-secondPart-desc" >
          company that's grown from 270 to 480 employees in the last 12 months.
        </p>
        <Link to="/product/boAt-Rockerz-451" >Shop Now</Link>
      </div>
    </div>
  );
}

export default LastCard;
