import React from "react";

const NavLink = ({ image, title }) => {
  return (
    <div className="entry">
      <div key={image}>
        <img className="image" src={image} alt="img" />
      </div>
      <div key={title}>
        <p className="tit">{title}</p>
      </div>
    </div>
  );
};

export default NavLink;
