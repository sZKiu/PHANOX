import React, { useState, useRef, useEffect } from "react";
import images from "../../assets/jsonimg/jsonimg";
import { useLocation } from "react-router-dom";

function IndividualProductImgs() {
  const URLParams = useLocation(),
    productTitle = URLParams.pathname.split("/")[2],
    [relativeImg, setRelativeImg] = useState(productTitle),
    restImgs = useRef();

  useEffect(() => {
    setRelativeImg(productTitle);
  }, [productTitle]);

  useEffect(() => {
    let img;
    let id;

    images.forEach((imgEl, imgInd) => {
      if (imgEl.title === relativeImg) {
        id = 1;
      }
    });

    relativeImg instanceof Object
      ? restImgs.current.childNodes.forEach((el, ind) => {
          if (Number.parseInt(el.id) == relativeImg.id) {
            el.classList.add("red");
          } else {
            el.classList.remove("red");
          }
        })
      : (img = document.getElementById(id));
    img ? img.classList.add("red") : console.log();
  }, [relativeImg]);

  return (
    <div className="individual-product-imgs">
      <div className="individual-product-principalImg">
        {images.map((el, ind) => {
          if (el.title === productTitle) {
            return (
              <img
                className="individual-product-principalImg-img"
                key={el.id}
                src={relativeImg.url === undefined ? el.url : relativeImg.url}
                alt={
                  relativeImg.title === undefined ? el.title : relativeImg.title
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
                        url: el.img,
                        title: imgEl.title,
                        id: el.id,
                      });
                    }}
                    id={el.id}
                    className="individual-product-restImgs-img"
                    key={ind}
                    src={el.img}
                    alt={el.img.split(".")[0].split("/")[4]}
                  />
                );
              });
            }
          }
        })}
      </div>
    </div>
  );
}

export default IndividualProductImgs;
