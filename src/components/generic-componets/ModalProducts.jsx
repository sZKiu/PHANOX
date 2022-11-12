import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Context from "../../context/context";
import mergeRepeatedObject from "../../simplifyers/mergeRepeatedObject";
import { BsChevronLeft } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

function ModalProducts({ closeModal, clas, isClosed }) {
  const [total, setTotal] = useState(0);
  const [ isDone, setIsDone ] = useState({ state: false, done: true, caused: undefined });
  const { product, setProduct } = useContext(Context);
  const products = mergeRepeatedObject(product, { last: true });
  const numProducts = products.length;
  let nonDeleteProducts = [];

  const substractAmount = (id) => {
    products.forEach((el, ind) => {
      if (el.id === id) {
        if (el.amount > 1) {
          setProduct([
            ...product,
            {
              title: el.title,
              url: el.url,
              id: el.id,
              amount: el.amount - 1,
              price: el.price,
            },
          ]);
        }
      }
    });
  };

  const plusAmount = (id) => {
    products.forEach((el, ind) => {
      if (el.id === id) {
        setProduct([
          ...product,
          {
            title: el.title,
            url: el.url,
            id: el.id,
            amount: el.amount + 1,
            price: el.price,
          },
        ]);
      }
    });
  };

  const deleteProduct = (id) => {
    products.forEach((el, ind) => {
      if (el.id !== id) {
        nonDeleteProducts.push(el);

        setProduct([...nonDeleteProducts]);
      } else {
        if (numProducts === 1) {
          setProduct([]);
        }
      }
    });
  };

  useEffect(() => {
    let priceTotal = 0;
    let amountTotal = 0;
    let total = [];
    let realTotal = 0;

    products.forEach((el, ind) => {
      priceTotal = Number.parseInt(el.price);
      amountTotal = Number.parseInt(el.amount);
      total.push(priceTotal * amountTotal);
    });

    total.forEach((el, ind) => {
      realTotal += el;
    });

    setTotal(realTotal);
  }, [products]);

  useEffect(() => {
    if( isDone.state ) setTimeout(() => {
      setProduct([]);
      setIsDone({state: false, done: true, caused: "modal"});
    }, 1000)
  }, [isDone.state]);

  return (
    <>
      {ReactDOM.createPortal(
        <div className={clas}>
          <div className="modal-products-back">
            <BsChevronLeft onClick={closeModal} />
            <p>Your Cart</p>
            <span>{`(${numProducts} Items)`}</span>
          </div>

          <div className="modal-products-cards">
            {products.map((el, ind) => {
              return (
                <div key={el.id} className="modal-products-card">
                  <div className="modal-products-card-img">
                    <img src={el.url} alt={el.title} />
                  </div>
                  <div className="modal-products-card-mid">
                    <h2>{el.title.replaceAll("-", " ")}</h2>
                    <span className="individual-product-des-quantity">
                      <span className="individual-product-des-modifyQuantity">
                        <button onClick={() => substractAmount(el.id)}>
                          <AiOutlineMinus />
                        </button>

                        <span>{`${el.amount}`}</span>

                        <button onClick={() => plusAmount(el.id)}>
                          <AiOutlinePlus />
                        </button>
                      </span>
                    </span>
                  </div>
                  <div className="modal-products-card-last">
                    <p>{`$${el.price}`}</p>
                    <TiDeleteOutline
                      onClick={() => {
                        deleteProduct(el.id);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="modal-products-total">
            { isDone.caused === undefined
              ? product.length !== 0 
              ? ( isDone.done ) 
                ? <>
                <div>
                  <span>Subtotal:</span>
                  <span> ${total} </span>
                </div>
                <button
                  onClick={() => setIsDone({...isDone, state: true, done: false}) }
                >
                  PAY WITH STRIPE
                </button>
                  </>
                : <b>Wating...</b>
              : (
                <p className="purchasing" >Cart Empty</p>)
              : <p className="purchasing" >Thank you for purchasing 😊</p> }
          </div>
        </div>,
        document.getElementById("modal-product")
      )}
    </>
  );
}

export default ModalProducts;
