import React, { useState } from "react";
import Heart from "../assets/images/heart.png";

const HeartToggle = () => {
  const [isRed, setIsRed] = useState(false);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  const redFilterClass = "hue-rotate-90 saturate-200";
  const defaultClass =
    "w-6 h-6 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer";

  return (
    <div className="flex justify-end">
      <img
        src={Heart}
        alt="heartToggle"
        className={`${defaultClass} ${isRed ? redFilterClass : ""}`}
        onClick={toggleColor}
      />
    </div>
  );
};

export default HeartToggle;
