import React, { useState, useContext, useRef, useEffect } from "react";
import images from "../../assets/jsonimg/jsonimg";
import Context from "../../context/context";
import { useLocation } from "react-router-dom";
import { AiFillStar, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import ModalProducts from "../generic-componets/ModalProducts";

function IndividualProductDes({amount}) {
  const mql = matchMedia("(min-width: 1280px)");
  const [showModal, setShowModal] = useState(false);
  const { product, setProduct } = useContext(Context);
  const containerStar = useRef();
  const URLParams = useLocation();
  const productTitle = URLParams.pathname.split("/")[2];
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [productTitle]);

  useEffect(() => {
    if (showModal) {
      if (document.querySelector(".modal-recentlyAdded") !== null) {
        document.querySelector("#obscure").style.backgroundColor =
          "rgba(0, 0, 0, 0.6)";
        document.querySelector("#obscure").style.display = "block";
        document.querySelector(".modal-recentlyAdded").style.display = "none";
        setTimeout(
          () =>
            document
              .querySelector(".modal-recentlyAdded")
              .classList.remove("translate3rem"),
          200
        );
      }
    } else {
      if (document.querySelector(".modal-recentlyAdded") !== null) {
        document.querySelector("#obscure").style.display = "none";
        document.querySelector(".modal-recentlyAdded").style.display = "grid";
      }
    }
  }, [showModal]);

  const print = (e) => {
    if (e.target.parentElement.id.startsWith("start")) {
      let count = e.target.parentElement.id.split("-")[1];
      let name = e.target.parentElement.id.split("-")[0];

      containerStar.current.childNodes.forEach((el, ind) => {
        if (ind < count) {
          document.getElementById(`${name}-${ind + 1}`).style.color = "orange";
        } else {
          document.getElementById(`${name}-${ind + 1}`).style.color = "black";
        }
      });
    }
  };

  const handlerAdd = () => {
    images.forEach((el, ind) => {
      if (el.title === productTitle) {
        setProduct([
          ...product,
          {
            id: el.id,
            amount: quantity,
            title: productTitle,
            url: el.url,
            price: el.amount,
          },
        ]);
      }
    });
  };

  return (
    <div className="individual-product-des">
      <h1>{productTitle.replaceAll("-", " ")}</h1>
      <div ref={containerStar} className="stars-container">
        <AiFillStar id="start-1" onClick={print} />
        <AiFillStar id="start-2" onClick={print} />
        <AiFillStar id="start-3" onClick={print} />
        <AiFillStar id="start-4" onClick={print} />
        <AiFillStar id="start-5" onClick={print} />
      </div>
      <p
        className={mql.matches ? "individual-product-des-text" : "display-none"}
      >
        {mql.matches ? (
          <>
            <b>Details: </b> <br />
            Immerse in the 20W RMS Stereo Sound with the powerful Party Pal 50
            bluetooth speaker. Set the vibes of the party just right with the
            RGB LEDs. Keep worries at bay and party poolside with IPXS splash
            resistant! Get, set, grooving as Party Pal 50 comes with a powerful
            playback of 4.5 Hrs. Access Instant Voice Assistant and enjoy the
            multiple connectivity modes- USB, AUX, Bluetooth v5.1, and FM.
            Coming with Type-C Interface, Party Pal 50 is all you need to set
            the mood just about right. So, where y'all partying at?
          </>
        ) : (
          ""
        )}
      </p>
      <p className="individual-product-des-amount">{"$" + amount}</p>
      <span className="individual-product-des-quantity">
        Quantity:{" "}
        <span className="individual-product-des-modifyQuantity">
          <button
            onClick={() => {
              if (quantity > 1) {
                setQuantity((prevVa) => prevVa - 1);
              }
            }}
          >
            <AiOutlineMinus />
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => {
              setQuantity((prevVa) => prevVa + 1);
            }}
          >
            <AiOutlinePlus />
          </button>
        </span>
      </span>

      <div className="individual-product-des-button">
        <button
          onClick={() => {
            handlerAdd();
          }}
        >
          Add to cart
        </button>

        <button
          onClick={() => {
            setShowModal(true);
            handlerAdd();
          }}
        >
          Buy now
        </button>

        {showModal ? (
          <ModalProducts
            isClosed={showModal}
            clas="modal-product"
            closeModal={() => {
              setShowModal(false);
            }}
          />
        ) : (
          console.log()
        )}
      </div>
    </div>
  );
}

export default React.memo(IndividualProductDes);
