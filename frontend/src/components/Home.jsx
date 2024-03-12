import React from "react";
import "../assets/home.css";

export const Home = () => {
  return (
    <div className="flex justify-center" style={{ height: "100vh" }}>
      <div className="flex-1 border-r border-r-slate-400 flex justify-center items-center flex-col">
        <div className="logo"></div>
        <div className="adminSide">ADMIN LOGIN</div>
        <button className="enter">ENTER</button>
      </div>
      <div className="flex-1 flex justify-center items-center flex-col">
        <div className="logo"></div>
        <div className="clientSide">CLIENT LOGIN</div>
        <button className="enter">ENTER</button>
      </div>
    </div>
  );
};
