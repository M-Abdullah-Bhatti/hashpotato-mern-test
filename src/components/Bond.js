import React from "react";

const Bond = ({ title, rate }) => {
  return (
    <div className="bond">
      <div key={title}>
        <p className="tit">{title}</p>
      </div>
      <div key={rate}>
        <p className="tit" style={{ position: "absolute", right: "20px" }}>
          {rate}
        </p>
      </div>
    </div>
  );
};

export default Bond;
