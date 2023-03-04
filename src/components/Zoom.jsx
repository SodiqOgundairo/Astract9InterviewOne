import React, { useState } from "react";

const ZoomableCard = ({ title, content }) => {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale(scale - 0.1);
  };

  return (
    <div className="zoomable-card" style={{ transform: `scale(${scale})` }}>
      <div className="zoom-controls">
        <button onClick={handleZoomIn}>+</button>
        <button onClick={handleZoomOut}>-</button>
      </div>
      <div className="card">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ZoomableCard;
