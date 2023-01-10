import React from "react";

const Buttons = ({ title, price }) => {
  return (
    <div className="btn">
      <div key={title}>
        <span className="title">{title}</span>
      </div>
      <div key={price}>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default Buttons;
