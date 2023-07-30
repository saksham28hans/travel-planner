import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Caro.css";
import i1 from '../../assets/Travel/i1.jpg';
import i2 from '../../assets/Travel/i2.jpg';
import i3 from '../../assets/Travel/i3.jpg';
import i4 from '../../assets/Travel/i4.jpg';
import i5 from '../../assets/Travel/i5.jpg';
import i6 from '../../assets/Travel/i6.jpg';
import i7 from '../../assets/Travel/i7.jpg';
import i8 from '../../assets/Travel/i8.jpg';
import i9 from '../../assets/Travel/i9.jpg';
import i10 from '../../assets/Travel/i10.jpg';

const Carousels = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    { id: 1, imageSrc: i1, altText: "First slide" },
    { id: 2, imageSrc: i2, altText: "Second slide" },
    { id: 3, imageSrc: i3, altText: "Third slide" },
    { id: 4, imageSrc: i4, altText: "Fourth slide" },
    { id: 5, imageSrc: i5, altText: "Fifth slide" },
    { id: 6, imageSrc: i6, altText: "Sixth slide" },
    { id: 7, imageSrc: i7, altText: "Seven slide" },
    { id: 8, imageSrc: i8, altText: "Eight slide" },
    { id: 9, imageSrc: i9, altText: "Nine slide" },
    { id: 10, imageSrc: i10, altText: "Ten slide" },
    // Add more slides as needed
  ];
  const interval = 1000;

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
              height: "700px"
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 400,
                fontWeight: "bold",
                fontSize: "35px",
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
