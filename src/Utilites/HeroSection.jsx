import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./HeroSection.css";

import hero1 from "../assets/Hero_Section_Image-1.webp";
import hero2 from "../assets/Hero_Section_Image-2.webp";
import hero3 from "../assets/Hero_Section_Image-3.webp";
import hero4 from "../assets/Hero_Section_Image-4.webp";
import hero5 from "../assets/Hero_Section_Image-5.webp";

const HeroSection = () => {
  const headlines = [
    "Get Married In Style",
    "Big Fat Weddings. Bigger Moments.",
    "Tradition Meets Sass.",
    "From ‘Yes’ to ‘I Do’ — Flawlessly.",
    "Because Your Wedding Deserves a Standing Ovation."
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);

  const images = [hero1, hero2, hero3, hero4, hero5];

  // Rotate headlines
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [headlines.length]);

  // Rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header id="hero" className="hero-section">
      {/* Background slideshow */}
      <div className="hero-slideshow">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentImage ? "active" : ""}`}
          >
            <LazyLoadImage
              src={img}
              alt={`hero-${index}`}
              effect="blur"
              loading={index === 0 ? "eager" : "lazy"} // first one eager
              className="hero-image"
            />
          </div>
        ))}
      </div>

      <div className="overlay"></div>

      {/* Hero text */}
      <div className="hero-content">
        <h1>{headlines[currentHeadlineIndex]}</h1>
        <p>
          To a new epoch of your life and to a delicate beginning, we Seraphic
          event planners are here with you to make it more exceptional. Together
          let’s invigorate your 'dream say' way more than just a dream.
        </p>
      </div>
    </header>
  );
};

export default HeroSection;
