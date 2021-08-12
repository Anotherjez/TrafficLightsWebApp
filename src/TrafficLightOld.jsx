import Light from "./Light.jsx";
import React, { useState, useEffect } from "react";

const lightDurations = [60000, 20000, 3000];

const TrafficLight = ({ initialValue }) => {
  const [colorIndex, setColorIndex] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setColorIndex((colorIndex + 1) % 3);
    }, lightDurations[colorIndex]);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="traffic-light">
      <Light color="#f00" active={colorIndex === 0} />
      <Light color="#ff0" active={colorIndex === 2} />
      <Light color="#0c0" active={colorIndex === 1} />
    </div>
  );
};

export default TrafficLight;
