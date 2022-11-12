import React, { useState, useRef, useEffect } from "react";
import images from "../../assets/jsonimg/jsonimg";
import { useLocation } from "react-router-dom";

function IndividualProductImgs() {
  const URLParams = useLocation(),
    productTitle = URLParams.pathname.split("/")[2],
    [relativeImg, setRelativeImg] = useState(productTitle),
    restImgs = useRef();

  useEffect(() => {
    let img;
    let id;
    images.forEach((imgEl, imgInd) => {
      if (imgEl.title === relativeImg) {
        id = imgEl.url.split(".")[0].split("/")[3];
      }
    });
    relativeImg instanceof Object
      ? restImgs.current.childNodes.forEach((el, ind) => {
          if (el.id === relativeImg.id) {
            el.classList.add("red");
          } else {
            el.classList.remove("red");
          }
        })
      : (img = document.getElementById(id));
    img ? img.classList.add("red") : console.log();
  }, [relativeImg]);

  useEffect(() => {
    setRelativeImg(productTitle);
  }, [productTitle]);

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
    </div>
  );
}

export default IndividualProductImgs;
