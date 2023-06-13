import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const CarouselImage = ({ imagesArray }) => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    startCarousel();

    return () => {
      if (carouselRef.current) clearInterval(carouselRef.current);
    };
  }, []);

  const next = () => {
    stopCarousel();
    setActive((i) => (i + 1) % imagesArray.length);
  };

  const prev = () => {
    stopCarousel();
    setActive(
      (i) =>
        (((i - 1) % imagesArray.length) + imagesArray.length) %
        imagesArray.length
    );
  };

  const startCarousel = () => {
    carouselRef.current = setInterval(() => {
      setActive((i) => (i + 1) % imagesArray.length);
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
        {imagesArray.map((item, index) => (
          <div
            className={
              index == active ? "carousel-item active" : "carousel-item"
            }
          >
            <img
              onMouseOver={() => {
                stopCarousel();
              }}
              onMouseLeave={() => {
                startCarousel();
              }}
              src={item}
              className="main-image"
              alt={"Main" + index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarouselImage;
