import React from "react";
import "./MobileSidebar.css";
import { upperContent, bottomContent, boundDiscount } from "../../data";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord.png";
import telegram from "../../assets/telegram.png";
import NavLink from "../NavLink";
import Bond from "../Bond";
// import { GiHamburgerMenu } from "react-icons/gi";

const MobileSidebar = () => {
  return (
    <div className="Mobile-Sidebar">
      <div className="header">
        <img className="logo" src="./Frame.png" alt="image1" />
        <p>VAULT PASS</p>
        {/* <GiHamburgerMenu style={{ marginLeft: "30px", fontSize: "20px" }} onClick={() =>{}}/> */}
      </div>
      <div className="middle">
        <div className="middle-upper">
          {upperContent.map((item) => (
            <NavLink image={item.image} title={item.title} />
          ))}
        </div>
        <div className="middle-middle">
          <span>Bond discounts</span>

          {boundDiscount.map((item) => (
            <Bond title={item.title} rate={item.rate} />
          ))}
        </div>
        <div className="middle-down">
          {bottomContent.map((item) => (
            <NavLink image={item.image} title={item.title} />
          ))}
        </div>
      </div>
      <div className="footer">
        <img src={twitter} alt="image2" />
        <img src={discord} alt="image3" />
        <img src={telegram} alt="image4" />
      </div>
    </div>
  );
};

export default MobileSidebar;
