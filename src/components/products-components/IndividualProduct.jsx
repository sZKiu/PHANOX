import React, { useState, useEffect } from "react";
import images from "../../assets/jsonimg/jsonimg";
import { useLocation } from "react-router-dom";
import Nav from "../generic-componets/Nav";
import RandomProducts from "../generic-componets/RandomProducts";
import Footer from "../generic-componets/Footer";
import IndividualProductDes from "./IndividualProductDes";
import IndividualProductImgs from "./IndividualProductImgs";
import { Helmet } from "react-helmet";

function IndividualProduct() {
  const mql = matchMedia("(min-width: 1280px)");
  const [amount, setAmount] = useState(0);
  const URLParams = useLocation();
  const productTitle = URLParams.pathname.split("/")[2];

  useEffect(() => {
    if (mql.matches) {
      window.scroll(0, 0);
    }
  });

  useEffect(() => {
    images.map((el, ind) => {
      if (el.title === productTitle) {
        setAmount(el.amount);
      }
    });
  }, [productTitle]);

  return (
    <div className="individual-product">
      <Helmet>
        <title>{`Product ${productTitle.replaceAll("-", " ")}`}</title>
      </Helmet>
      <Nav />

      <div className="individual-product-principal">
        <IndividualProductImgs />

        <IndividualProductDes amount={amount} />
      </div>

      <div className="individual-product-secondary">
        <h2>You May Also Like</h2>
        <RandomProducts />
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(IndividualProduct);

{
  /* <div className="individual-product-imgs">
          <div className="individual-product-principalImg">
            {images.map((el, ind) => {
              if (el.title === productTitle) {
                return (
                  <img
                    className="individual-product-principalImg-img"
                    key={el.id}
                    src={
                      relativeImg.url === undefined ? el.url : relativeImg.url
                    }
                    alt={
                      relativeImg.title === undefined
                        ? el.title
                        : relativeImg.title
                    }
                  />
                );
              }
            })}
          </div>

          <div className="individual-product-restImgs" ref={restImgs}>
            {images.map((imgEl, imgInd) => {
              if (imgEl.title === productTitle) {
                if (imgEl?.relatives !== undefined) {
                  return imgEl.relatives.map((el, ind) => {
                    return (
                      <img
                        onClick={() => {
                          setRelativeImg({
                            url: el,
                            title: imgEl.title,
                            id: el.split(".")[0].split("/")[3],
                          });
                        }}
                        id={el.split(".")[0].split("/")[3]}
                        className="individual-product-restImgs-img"
                        key={ind}
                        src={el}
                        alt={el.split(".")[0].split("/")[3]}
                      />
                    );
                  });
                }
              }
            })}
          </div>
        </div> */
}

{
  //Original
  // import React, { useState, useContext, useRef, useEffect } from "react";
  // import Context from "../../context/context";
  // import images from "../../assets/jsonimg/jsonimg";
  // import { useLocation } from "react-router-dom";
  // import { AiFillStar, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
  // import ModalProducts from "../generic-componets/ModalProducts";
  // import Nav from "../generic-componets/Nav";
  // import RandomProducts from "../generic-componets/RandomProducts";
  // import Footer from "../generic-componets/Footer";
  // function IndividualProduct() {
  //   const mql = matchMedia("(min-width: 1280px)");
  //   const URLParams = useLocation();
  //   const productTitle = URLParams.pathname.split("/")[2];
  //   const [quantity, setQuantity] = useState(1);
  //   const [relativeImg, setRelativeImg] = useState(productTitle);
  //   const [showModal, setShowModal] = useState(false);
  //   const { product, setProduct } = useContext(Context);
  //   const containerStar = useRef();
  //   const restImgs = useRef();
  //   let amount = 0;
  //   useEffect(() => {
  //     if (mql.matches) {
  //       window.scroll(0, 0);
  //     }
  //   });
  //   useEffect(() => {
  //     if (showModal) {
  //       if (document.querySelector(".modal-recentlyAdded") !== null) {
  //         document.querySelector("#obscure").style.backgroundColor =
  //           "rgba(0, 0, 0, 0.6)";
  //         document.querySelector("#obscure").style.display = "block";
  //         document.querySelector(".modal-recentlyAdded").style.display = "none";
  //         setTimeout(
  //           () =>
  //             document
  //               .querySelector(".modal-recentlyAdded")
  //               .classList.remove("translate3rem"),
  //           200
  //         );
  //       }
  //     } else {
  //       if (document.querySelector(".modal-recentlyAdded") !== null) {
  //         document.querySelector("#obscure").style.display = "none";
  //         document.querySelector(".modal-recentlyAdded").style.display = "grid";
  //       }
  //     }
  //   }, [showModal]);
  //   useEffect(() => {
  //     let img;
  //     let id;
  //     images.forEach((imgEl, imgInd) => {
  //       if (imgEl.title === relativeImg) {
  //         id = imgEl.url.split(".")[0].split("/")[3];
  //       }
  //     });
  //     relativeImg instanceof Object
  //       ? restImgs.current.childNodes.forEach((el, ind) => {
  //           if (el.id === relativeImg.id) {
  //             el.classList.add("red");
  //           } else {
  //             el.classList.remove("red");
  //           }
  //         })
  //       : (img = document.getElementById(id));
  //     img ? img.classList.add("red") : console.log();
  //   }, [relativeImg]);
  //   useEffect(() => {
  //     setRelativeImg(productTitle);
  //     setQuantity(1);
  //   }, [productTitle]);
  //   const print = (e) => {
  //     if (e.target.parentElement.id.startsWith("start")) {
  //       let count = e.target.parentElement.id.split("-")[1];
  //       let name = e.target.parentElement.id.split("-")[0];
  //       containerStar.current.childNodes.forEach((el, ind) => {
  //         if (ind < count) {
  //           document.getElementById(`${name}-${ind + 1}`).style.color = "orange";
  //         } else {
  //           document.getElementById(`${name}-${ind + 1}`).style.color = "black";
  //         }
  //       });
  //     }
  //   };
  //   const handlerAdd = () => {
  //     images.forEach((el, ind) => {
  //       if (el.title === productTitle) {
  //         setProduct([
  //           ...product,
  //           {
  //             id: el.id,
  //             amount: quantity,
  //             title: productTitle,
  //             url: el.url,
  //             price: el.amount,
  //           },
  //         ]);
  //       }
  //     });
  //   };
  //   return (
  //     <div className="individual-product">
  //       <Nav />
  //       <div className="individual-product-principal">
  //         <div className="individual-product-imgs">
  //           <div className="individual-product-principalImg">
  //             {images.map((el, ind) => {
  //               if (el.title === productTitle) {
  //                 amount = el.amount;
  //                 return (
  //                   <img
  //                     className="individual-product-principalImg-img"
  //                     key={el.id}
  //                     src={
  //                       relativeImg.url === undefined ? el.url : relativeImg.url
  //                     }
  //                     alt={
  //                       relativeImg.title === undefined
  //                         ? el.title
  //                         : relativeImg.title
  //                     }
  //                   />
  //                 );
  //               }
  //             })}
  //           </div>
  //           <div className="individual-product-restImgs" ref={restImgs}>
  //             {images.map((imgEl, imgInd) => {
  //               if (imgEl.title === productTitle) {
  //                 if (imgEl?.relatives !== undefined) {
  //                   return imgEl.relatives.map((el, ind) => {
  //                     return (
  //                       <img
  //                         onClick={() => {
  //                           setRelativeImg({
  //                             url: el,
  //                             title: imgEl.title,
  //                             id: el.split(".")[0].split("/")[3],
  //                           });
  //                         }}
  //                         id={el.split(".")[0].split("/")[3]}
  //                         className="individual-product-restImgs-img"
  //                         key={ind}
  //                         src={el}
  //                         alt={el.split(".")[0].split("/")[3]}
  //                       />
  //                     );
  //                   });
  //                 }
  //               }
  //             })}
  //           </div>
  //         </div>
  //         <div className="individual-product-des">
  //           <h1>{productTitle.replaceAll("-", " ")}</h1>
  //           <div ref={containerStar}  className="stars-container">
  //             <AiFillStar id="start-1" onClick={print} />
  //             <AiFillStar id="start-2" onClick={print} />
  //             <AiFillStar id="start-3" onClick={print} />
  //             <AiFillStar id="start-4" onClick={print} />
  //             <AiFillStar id="start-5" onClick={print} />
  //           </div>
  //           <p className={ mql.matches ? "individual-product-des-text" : "display-none" }>
  //             {mql.matches ? (
  //               <>
  //                 <b>Details: </b> <br />
  //                 Immerse in the 20W RMS Stereo Sound with the powerful Party Pal
  //                 50 bluetooth speaker. Set the vibes of the party just right with
  //                 the RGB LEDs. Keep worries at bay and party poolside with IPXS
  //                 splash resistant! Get, set, grooving as Party Pal 50 comes with
  //                 a powerful playback of 4.5 Hrs. Access Instant Voice Assistant
  //                 and enjoy the multiple connectivity modes- USB, AUX, Bluetooth
  //                 v5.1, and FM. Coming with Type-C Interface, Party Pal 50 is all
  //                 you need to set the mood just about right. So, where y'all
  //                 partying at?
  //               </>
  //             ) : (
  //               ""
  //             )}
  //           </p>
  //           <p className="individual-product-des-amount">{"$" + amount}</p>
  //           <span className="individual-product-des-quantity">
  //             Quantity:{" "}
  //             <span className="individual-product-des-modifyQuantity">
  //               <button
  //                 onClick={() => {
  //                   if (quantity > 1) {
  //                     setQuantity((prevVa) => prevVa - 1);
  //                   }
  //                 }}
  //               >
  //                 <AiOutlineMinus />
  //               </button>
  //               <span>{quantity}</span>
  //               <button
  //                 onClick={() => {
  //                   setQuantity((prevVa) => prevVa + 1);
  //                 }}
  //               >
  //                 <AiOutlinePlus />
  //               </button>
  //             </span>
  //           </span>
  //           <div className="individual-product-des-button">
  //             <button
  //               onClick={() => {
  //                 handlerAdd();
  //               }}
  //             >
  //               Add to cart
  //             </button>
  //             <button
  //               onClick={() => {
  //                 setShowModal(true);
  //                 handlerAdd();
  //               }}
  //             >
  //               Buy now
  //             </button>
  //             {showModal ? (
  //               <ModalProducts
  //                 isClosed={showModal}
  //                 clas="modal-product"
  //                 closeModal={() => {
  //                   setShowModal(false);
  //                 }}
  //               />
  //             ) : (
  //               console.log()
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //       <div className="individual-product-secondary">
  //         <h2>You May Also Like</h2>
  //         <RandomProducts />
  //       </div>
  //       <Footer />
  //     </div>
  //   );
  // }
  // export default React.memo(IndividualProduct);
}
