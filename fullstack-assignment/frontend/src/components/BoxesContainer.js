import React from "react";

const BoxesContainer = ({ boxesData }) => {
  return (
    <div className="card-section">
      {boxesData.map((box) => (
        <div key={box._id} className="card">
          <h2>{box.title}</h2>
          <p>{box.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BoxesContainer;
