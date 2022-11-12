import React, { useState } from "react";

const Context = React.createContext({});

export const ProductContext = ({children}) => {

  const [ product, setProduct ] = useState([]);
  const [ pasTProduct, setPastProduct ] = useState([]);

  return (
    <Context.Provider value={{product, setProduct, pasTProduct, setPastProduct}}>
      {children}
    </Context.Provider>

  );
}

export default Context