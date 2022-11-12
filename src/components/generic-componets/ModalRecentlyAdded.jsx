import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Context from "../../context/context";
import { GoVerified } from "react-icons/go";

function ModalRecentlyAdded({ timeOut, cls }) {
  const { product } = useContext(Context);
  const [title, setTitle] = useState({});
  
  useEffect(() => {
    let lastProducts = product.at(-1);

    setTitle({
      name: lastProducts?.title,
      amount: lastProducts?.amount,
    });

    setTimeout(() => timeOut !== undefined ? timeOut() : console.log(), 1000);
  }, [timeOut, product]);

  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={
            title?.name !== undefined
              ? `modal-recentlyAdded ${cls !== undefined ? cls : ""}`
              : "modal-recentlyAdded no-background"
          }
        >
          {title?.name !== undefined ? <GoVerified /> : ""}

          {title?.name !== undefined
            ? `${title?.amount} ${title?.name?.replaceAll("-", " ")} added`
            : ""}
        </div>,
        document.getElementById("modal-recentlyAdded")
      )}
    </>
  );
}

export default React.memo(ModalRecentlyAdded);

// import React, { useContext, useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import Context from "../../context/context";
// import mergeRepeatedObject from "../../simplifyers/mergeRepeatedObject";
// import { GoVerified } from "react-icons/go";

// function ModalRecentlyAdded({ timeOut }) {
//   const { product } = useContext(Context);
//   const [title, setTitle] = useState({});
//   const products = mergeRepeatedObject(product, { last: true });

//   useEffect(() => {
//     let lastProducts = products.at(-1);

//     setTitle({
//       name: lastProducts?.title,
//       amount: lastProducts?.amount,
//     });

//     setTimeout(() => timeOut(), 1500);
//   }, [timeOut]);

//   return (
//     <>
//       {ReactDOM.createPortal(
//         <div clssName={ title?.name !== undefined ? "modal-recentlyAdded translate3rem" : "" }>
//           {title?.name !== undefined ? <GoVerified /> : ""}

//           {title?.name !== undefined
//             ? `${title?.amount} ${title?.name?.replaceAll("-", " ")} added`
//             : ""}
//         </div>,
//         document.getElementById("modal-recentlyAdded")
//       )}
//     </>
//   );
// }

// export default ModalRecentlyAdded;
