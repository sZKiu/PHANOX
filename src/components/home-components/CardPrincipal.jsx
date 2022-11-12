import React from "react";
import { Link } from "react-router-dom";
import headphonesa1 from "../../assets/img/headphones_a_4.webp"

function CardPrincipal() {
  return <div className="card-principal" >

    <div className="card-principal-firstHalf" >

      <span>Beats solo</span>

      <p>Wireless</p>

      <h2>HEADPHONES</h2>

      <Link to="/product/boAt-Immortal-1000D" >Shop wireless headphone</Link>

    </div>

    <div className="card-principal-secondHalf">

      <img src={headphonesa1} alt="Immortal 1000D" />

      <p className="card-principal-secondHalf-description">Description</p>

      <p className="card-principal-secondHalf-text">The game begins With Immortal 1000D gaming headphones, don't just play the game - feel it, live it, and own it, Level up your audio game with 7.1 Channel.</p>

    </div>

  </div>;
}

export default CardPrincipal;
