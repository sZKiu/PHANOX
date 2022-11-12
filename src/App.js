import "./App.css";
import Home from "./components/home-components/Home.jsx";
import Form from "./components/login-components/Form";
import IndividualProduct from "./components/products-components/IndividualProduct";
import Error from "./components/error-components/Error";
import { Routes, Route } from "react-router-dom";
import { ProductContext } from "./context/context";

function App() {
  return (
    <>
      <ProductContext>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/login" element={<Form />} /> */}

          <Route path="/product/:product" element={<IndividualProduct />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </ProductContext>
    </>
  );
}

export default App;
