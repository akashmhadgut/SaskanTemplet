import React, { useState, useEffect } from "react";
import "./Hero.css"; // your existing styles for hero slider

const slides = [
  {
    id: 0,
    title: "Sasken Joins Microsoft Devices Eco System Platform (MDEP)",
    subtitle: "To Accelerate Intelligent Device Innovation",
    image: "/banner1.webp",
    button: null,
  },
  {
    id: 1,
    title: "Engineering a Sustainable Tomorrow",
    subtitle: "Sasken ESG Report 2024 April – 2025 March",
    image: "/banner2.webp",
    button: { text: "Download Now", link: "#" },
  },
  {
    id: 2,
    title: "THINK ANDROID THINK SASKEN",
    subtitle:
      "Take a deep dive into our Android services and discover how we deliver rich experiences for your customers.",
    image: "/banner3.webp",
    button: { text: "Discover", link: "#" },
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const delay = 6000;

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, delay);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrent(index);
  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="heading-section">
      <div className="hero">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              {slide.button && (
                <a href={slide.button.link} className="btn">
                  {slide.button.text}
                </a>
              )}
            </div>
          </div>
        ))}

        {/* Arrows */}
        <div className="arrow arrow-left" onClick={prevSlide}>
          &#10094;
        </div>
        <div className="arrow arrow-right" onClick={nextSlide}>
          &#10095;
        </div>

        {/* Dots */}
        <div className="hero-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
