import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [tableColor, setTableColor] = useState("blue");
  const [filteredImages, setFilteredImages] = useState([]);

  const handleColorChange = (color) => {
    setTableColor(color);
    const filteredImages = images.filter((image) =>
      image.includes(`/${color}/`)
    );
    setFilteredImages(filteredImages);
  };

  const images = [
    "/images/blue/a.png",
    "/images/green/y.png",
    "/images/yellow/d.png",
  ];

  return (
    <div className="app">
      <div className="image-container">
        {filteredImages.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
      <div className="buttons">
        <button
          className={tableColor === "blue" ? "active" : ""}
          onClick={() => handleColorChange("blue")}
        >
          Mavi
        </button>
        <button
          className={tableColor === "green" ? "active" : ""}
          onClick={() => handleColorChange("green")}
        >
          Yeşil
        </button>
        <button
          className={tableColor === "yellow" ? "active" : ""}
          onClick={() => handleColorChange("yellow")}
        >
          Sarı
        </button>
      </div>
    </div>
  );
};

export default App;
