import React, { useState } from "react";
import { imagesArray } from "../utils/Image";
import "./index.css";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((i) => (i + 1) % imagesArray.length);
  };

  const prev = () => {
    setIndex(
      (i) =>
        (((i - 1) % imagesArray.length) + imagesArray.length) %
        imagesArray.length
    );
  };
  return (
    <section className="image-slider-section">
      <div className="image-slider-div">
        <div className="icon-left" onClick={prev}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className="icon-right" onClick={next}>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <img src={imagesArray[index]} className="main-image" />
      </div>
    </section>
  );
};

export default ImageSlider;
