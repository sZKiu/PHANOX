import React, { useState, useEffect } from "react";
import Nav from "../generic-componets/Nav";
import Footer from "../generic-componets/Footer";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function Error() {
  const [isReady, setIsReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isReady) navigate("/");
  }, [isReady]);

  return (
    <div className="home">
      <Helmet>
        <title>Error (404)</title>
      </Helmet>
      <Nav />
      <div>
        <h1 className="h1-error">OOPS, SOMETHING WENT WRONG</h1>
        <h2 className="h2-error">PAGE NOT FOUND, ERROR (404)</h2>
        <button onClick={() => setIsReady(true)} className="button-error">
          BACK TO HOMEPAGE
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
