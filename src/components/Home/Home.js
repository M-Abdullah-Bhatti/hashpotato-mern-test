import React, { useState } from "react";
import "./Home.css";
import { buttons } from "../../data";
import Buttons from "../Buttons";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import MobileSidebar from "../Sidebar/MobileSidebar";

const Home = () => {
  const [isMobileViewOpen, setMobileViewOpen] = useState(false);

  function toggleMenu() {
    setMobileViewOpen(!isMobileViewOpen);
  }

  return (
    <div className="Home">
      <div className="home-header">
        <div className="hamburger">
          {isMobileViewOpen ? (
            <AiOutlineClose
              onClick={() => {
                toggleMenu();
              }}
            />
          ) : (
            <FiMenu
              onClick={() => {
                toggleMenu();
              }}
            />
          )}
        </div>
        <div className="butt">
          <button className="button-1">Buy PASS</button>
          <button className="button-2">Connect Wallet</button>
        </div>
      </div>
      {/* Checks if open in mobile? */}
      {isMobileViewOpen === true ? (
        <MobileSidebar />
      ) : (
        <>
          <h3 className="heading">EPOCH STAKING</h3>
          <div className="home-body">
            <div className="buttons-card">
              {buttons.map((item) => (
                <Buttons title={item.title} price={item.price} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
