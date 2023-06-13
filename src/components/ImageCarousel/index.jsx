import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const ImageCarousel = ({ imagesArray }) => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

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

  useEffect(() => {
    startCarousel();

    return () => {
      if (carouselRef.current) clearInterval(carouselRef.current);
    };
  }, []);

  const startCarousel = () => {
    carouselRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % imagesArray.length);
    }, 2000);
  };

  const stopCarousel = () => {
    if (carouselRef.current) clearInterval(carouselRef.current);
  };

  return (
    <section className="image-slider-section">
      <div className="image-slider-div">
        <div className="icon-left" onClick={prev}>
          {/* <i className="fa-solid fa-arrow-left"></i> */}
          &lt;
        </div>
        <div className="icon-right" onClick={next}>
          {/* <i className="fa-solid fa-arrow-right"></i> */}
          &gt;
        </div>
        <img
          onMouseOver={() => {
            stopCarousel();
          }}
          onMouseLeave={() => {
            startCarousel();
          }}
          src={imagesArray[index]}
          className="main-image"
          alt={"Main" + index}
        />
      </div>
    </section>
  );
};

export default ImageCarousel;
