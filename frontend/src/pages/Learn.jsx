import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./style/learn.css";
import sendBtn from "../assets/send.png";
import Mic from "../assets/microphone.png";

const Learn = () => {
  const [lang, setLang] = useState(""); // Default language set to English

  const handleChange = (e) => {
    setLang(e.target.value);
  };

  const scrollToNextPage = () => {
    // Smooth scroll to the next page
    window.scrollTo({
      top: window.innerHeight, // Scroll down by the height of the window
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container flex flex-col">
        <div className="upp flex justify-between">
          <div className="big-heading text-white text-9xl m-32 ">
            <h1 className="gradient-text">Learning</h1>
            <h1 className="gradient-text">{lang ? lang : "..."}</h1>
          </div>
          <div className="dropdown">
            <label htmlFor="language" className="text-white">
              Select Language:{" "}
            </label>
            <select
              id="language"
              className="rounded-2xl mt-[3rem] mr-[3rem] pl-14 pr-14 text-gray-600"
              value={lang}
              onChange={handleChange}
            >
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
        </div>
        <div className="low flex justify-center text-white text-2xl">
          <div className="btns w-fit border p-3 pr-14 pl-14 rounded-2xl cursor-pointer flex">
            <button
              onClick={scrollToNextPage}
              className="flex items-center justify-between"
            >
              Start Now
            </button>
          </div>
        </div>
        <div className="learning mt-24 ml-7">
          <div className="ai flex h-10 ">
            <div className="inp bg-white w-[35rem] rounded-2xl flex items-center justify-between">
              <input type="text" placeholder="Enter your text here" className="ml-2"/>
            <div className="chatbtns w-fit flex justify-end pr-3">
              <button>
                <img src={Mic} alt="" width="17px" />
              </button>
              <button>
                <img src={sendBtn} alt="" width="17px" />
              </button>
            </div>
            </div>
          </div>
          <div className="learner"></div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
