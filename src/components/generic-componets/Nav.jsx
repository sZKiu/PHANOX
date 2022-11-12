import React, { useState, useContext, useEffect } from "react";
import ModalProducts from "./ModalProducts";
import ModalRecentlyAdded from "./ModalRecentlyAdded";
import Context from "../../context/context";
import mergeRepeatedObject from "../../simplifyers/mergeRepeatedObject";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";

function Nav() {
  const [showModal, setShowModal] = useState(false);
  const { product, pasTProduct, setPastProduct } = useContext(Context);
  const [isChanged, setIsChanged] = useState(false);
  const products = mergeRepeatedObject(product, { last: true });
  const numProducts = products.length;

  useEffect(() => {
    if (showModal) {
      if (document.querySelector(".modal-recentlyAdded") !== null) {
        document.querySelector("#obscure").style.backgroundColor =
          "rgba(0, 0, 0, 0.6)";
        document.querySelector("#obscure").style.display = "block";
        document.querySelector(".modal-recentlyAdded").style.display = "none";
        document
          .querySelector(".modal-recentlyAdded")
          .classList.remove("translate3rem");
      }
    } else {
      if (document.querySelector(".modal-recentlyAdded") !== null ){
        document.querySelector("#obscure").style.display = "none";
        document.querySelector(".modal-recentlyAdded").style.display = "grid";
      }
    }
  }, [showModal]);

  useEffect(() => {
    setPastProduct(product);
    if (
      (product?.at(-1)?.amount !== pasTProduct?.at(-1)?.amount ||
      product?.at(-1)?.title !== pasTProduct?.at(-1)?.title)
    ) {
      setIsChanged(true);
    }
  }, [product]);

  return (
    <nav className="navbar">
      <Link to="/">PHANOX</Link>

      {isChanged ? (
        <ModalRecentlyAdded
          timeOut={() => {
            setIsChanged(false);
          }}
          cls="translate3rem"
        />
      ) : (
        <ModalRecentlyAdded  />
      )}

      <div onClick={() => setShowModal(!showModal)}>
        <BiShoppingBag />
        {numProducts !== 0 ? (
          numProducts === 1 ? (
            <div>
              <span className="amount-of-products">{numProducts}</span>
            </div>
          ) : (
            <div>
              <span className="amount-of-products-more1">{numProducts}</span>
            </div>
          )
        ) : (
          ""
        )}
      </div>

      {showModal ? (
        <ModalProducts
          isClosed={showModal}
          clas="modal-product"
          closeModal={() => {
            setShowModal(false);
          }}
        />
      ) : (
        ""
      )}
    </nav>
  );
}

export default React.memo(Nav);

// import React, { useState, useContext, useEffect } from "react";
// import ModalProducts from "./ModalProducts";
// import ModalRecentlyAdded from "./ModalRecentlyAdded";
// import Context from "../../context/context";
// import mergeRepeatedObject from "../../simplifyers/mergeRepeatedObject";
// import { Link } from "react-router-dom";
// import { BiShoppingBag } from "react-icons/bi";

// function Nav() {
//   const [showModal, setShowModal] = useState(false);
//   const { product } = useContext(Context);
//   const [isChanged, setIsChanged] = useState(false);
//   const [numProductsPast, setNumProductsPast] = useState(0);
//   const [pastProduct, setProductsPast] = useState([]);
//   const products = mergeRepeatedObject(product, { last: true });
//   const numProducts = products.length;

//   useEffect(() => {
//     if (
//       (numProducts > numProductsPast && numProducts !== 0) ||
//       products?.at(-1)?.amount !== pastProduct?.at(-1)?.amount
//     ) {
//       setIsChanged(true);
//     }

//     setProductsPast(products);
//     setNumProductsPast(products.length);
//   }, [numProducts, product]);

//   return (
//     <nav className="navbar">
//       <Link to="/">PHANOX</Link>

//       {isChanged ? (
//         <ModalRecentlyAdded
//           timeOut={() => {
//             setIsChanged(false);
//           }}

//         />
//       ) : (
//         ""
//       )}

//       <div onClick={() => setShowModal(!showModal)}>
//         <BiShoppingBag />
//         {numProducts !== 0 ? (
//           numProducts === 1 ? (
//             <div>
//               <span className="amount-of-products">{numProducts}</span>
//             </div>
//           ) : (
//             <div>
//               <span className="amount-of-products-more1">{numProducts}</span>
//             </div>
//           )
//         ) : (
//           ""
//         )}
//       </div>

//       {showModal ? (
//         <ModalProducts
//           isClosed={showModal}
//           clas="modal-product"
//           closeModal={() => {
//             setShowModal(false);
//           }}
//         />
//       ) : (
//         console.log()
//       )}
//     </nav>
//   );
// }

// export default Nav;
