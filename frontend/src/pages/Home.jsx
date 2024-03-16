// Home.js
import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import Mic from "../assets/microphone.png";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);

  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognition = new window.webkitSpeechRecognition(); // Using webkitSpeechRecognition for Chrome compatibility

  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";

  recognition.onstart = () => {
    setIsListening(true);
    console.log("Speech recognition started");
  };

  recognition.onresult = (event) => {
    console.log('Entered onresult');
    let interimTranscript = "";
    let finalTranscript = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      console.log(transcript);
      if (event.results[i].isFinal) {
        finalTranscript += transcript + " ";
        console.log(finalTranscript);
      } else {
        interimTranscript += transcript;
      }
    }

    setTranscript(finalTranscript);
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    setIsListening(false);
  };

  const toggleListening = () => {
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
    }
  };
  const handleClick = (event) => {
    event.preventDefault(); // Prevents the default behavior of the anchor tag
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 6000); // Reset isClicked state after 2 seconds (adjust as needed)
  };
  return (
    <div>
      <Navbar />
      <div className="container flex flex-col items-center justify-between">
        <div className="upper">
          <div className="promo bg-[#1D101A] text-white w-[41rem] h-fit pl-2 pr-2 mt-3">
            <div className="carousel-container">
              <div className="text-carousel">
                <div className="text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Itaque quis fuga ex. Accusamus ipsa cumque officia
                  necessitatibus sed nobis deserunt?
                </div>
              </div>
            </div>
          </div>

          <div className="heading mt-4">
            <h1 className="animate-gradient-text">
              AI Voice Trainer <br />
            </h1>
            <h1 className="animate-gradient-text">
              for Any Commercial Product
            </h1>
          </div>
        </div>
        <div className="lower flex flex-col items-center pb-10">
          <div className="txt">
            <h1 className="text-white text-3xl">How can I help you?</h1>
          </div>
          <div className={`line ${isClicked ? "animate" : ""} mt-4`}>
            <div className={`highlight ${isClicked ? "shiny" : ""}`}></div>
          </div>
          <button
            href="#"
            className="icons border rounded-full p-4 mt-4 bg-[#481848]"
            onClick={toggleListening}
          >
            {isListening ? "Stop Listening" : "Start Listening"}
            <div>
              <img src={Mic} alt="" style={{ filter: "invert(1)" }} />
            </div>
          </button>
          {/* <button onClick={sendTranscript} disabled={!transcript}>
            Send Transcript
          </button> */}
          <p>{transcript}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
