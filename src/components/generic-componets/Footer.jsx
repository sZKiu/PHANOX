import React, { useEffect, useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Footer() {
  const [ clas, setClas ] = useState("");

  useEffect(() =>{
    if(!!document.querySelector(".button-error")){
      setClas("martop")
    }
  }, [])

  return (
    <footer className={clas} >
      <p>&#169;2022 Phanox. All Rights Reserved</p>
      <div className="footer-social" style={{display: "flex"}} >
        <a
          href="https://www.linkedin.com/in/augusto-andres-mendez/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/sZKiu" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
