import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./ImgSlider.css";

const ImgSlider = ({ images, title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(getImagesPerView());

  function getImagesPerView() {
    if (window.innerWidth < 1440) return 1;
    return 4;
  }

  useEffect(() => {
    const handleResize = () => {
      setImagesPerView(getImagesPerView());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + imagesPerView) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - imagesPerView + images.length) % images.length);
  };

  const visibleImages = images.slice(currentIndex, currentIndex + imagesPerView);
  if (visibleImages.length < imagesPerView) {
    visibleImages.push(...images.slice(0, imagesPerView - visibleImages.length));
  }

  return (
    <div className="slider-wrapper">
      <div className="slider-layout">
        <div className="image-scroll">
          {visibleImages.map((img, i) => (
            <img key={i} src={img} alt={`img-${i}`} className="slider-img" />
          ))}
        </div>
        <div className="slider-text">
          <div className="slider-header">
            <h3>{title}</h3>
            <div className="slider-buttons">
              <button onClick={prev}><ArrowLeft size={16} /></button>
              <button onClick={next}><ArrowRight size={16} /></button>
            </div>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImgSlider;
