import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Caro.css";
import heroImg from "../../assets/images/hero-img01.jpg";
import heroImg02 from "../../assets/images/hero-img02.jpg";

const Carousels = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    { id: 1, imageSrc: heroImg, altText: "First slide" },
    { id: 2, imageSrc: heroImg02, altText: "Second slide" },
    // Add more slides as needed
  ];
  const interval = 2000;

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // useEffect(() => {
  //   // Automatically switch the carousel slides in a loop
  //   const timer = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  //   }, interval);

  //   // Clear the timer when the component unmounts
  //   return () => clearInterval(timer);
  // }, [interval, slides.length]);

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="main"
      controls={false}
    >
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 400,
                background: "hsla(0, 0%, 0%, 0.5)",
                color: "#fff",
                padding: 10,
                lineHeight: 1.8,
                marginLeft: 10
              }}
            >
             Travel World with Us.
            </div>
            <img
              className="d-block w-100 he"
              src={slide.imageSrc}
              alt={slide.altText}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carousels;
