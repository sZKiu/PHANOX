import React from "react";
import { Helmet } from "react-helmet";
import Nav from "../generic-componets/Nav";
import Main from "./Main";
import Footer from "../generic-componets/Footer";

function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>Home || PHANOX</title>
      </Helmet>
      
      <Nav />

      <Main />

      <Footer />
    </div>
  );
}

export default Home;
