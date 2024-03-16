// Chat.js
import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";

const Chat = () => {
  return (
    <div>
      <Navbar />
      <div className="container flex justify-center">
        <div className="promo bg-[#1D101A] text-white w-[41rem] h-fit pl-2 pr-2 mt-3">
          <div className="carousel-container">
            <div className="text-carousel">
              <div className="text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
                quis fuga ex. Accusamus ipsa cumque officia necessitatibus sed
                nobis deserunt?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
