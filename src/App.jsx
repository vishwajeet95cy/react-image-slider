import React from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import { imagesArray } from "./utils/Image";
import ImageCarousel from "./components/ImageCarousel";
import CarouselImage from "./components/CarouselImage";
function App() {
  return (
    <main className="main-app">
      <h2>Image Slider</h2>
      {/* <ImageSlider imagesArray={imagesArray} /> */}
      {/* <ImageCarousel imagesArray={imagesArray} /> */}
      <CarouselImage imagesArray={imagesArray} />
    </main>
  );
}

export default App;
