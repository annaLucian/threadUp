// App.js
import React from "react";
import "./slider.css";
import image2 from "../../assets/images/slider/i2.webp";
export function SliderComponent() {
  return (
    <div className="image-slider">
      <div className="image-slider-track">
        {Array.from({ length: 17 }, (_, i) => {
          return (
            <div className="slide" key={i}>
              <div href="#!" className="slide">
                <img
                  src={`../../assets/images/slider/i${i + 1}.webp`}
                  alt={`Image ${i + 1}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
