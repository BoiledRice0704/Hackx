// Home.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import Mic from "../assets/microphone.png";
import Stop from "../assets/stop-button.png"

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [text, setText] = useState('');
  const synthesis = window.speechSynthesis;
  let recognition;

  const toggleListening = () => {
    if (isListening) {
      console.log("Stopping listening...");
      recognition.stop();
      setIsListening(false);
      sendTranscript();
    } else {
      recognition = new window.webkitSpeechRecognition();
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onstart = () => {
        setIsListening(true);
        console.log("Speech recognition started");
      };

      recognition.onresult = (event) => {
        let interimTranscript = "";
        let finalTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          setTranscript(event.results[i][0].transcript);
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript + " ";
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }
        setTranscript(finalTranscript);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
        console.log("Speech recognition ended");
        sendTranscript();
      };

      recognition.start();
    }
  };
  const sendTranscript = () => {
    fetch("http://localhost:8001/api/audio_input", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ transcript: transcript }),
    })
    .then((response) => {
      // Check if the response is successful
      if (response.ok) {
          // Parse the JSON response
          return response.json();
      } else {
          throw new Error("Failed to send transcript");
      }
  })
  .then((data) => {
      console.log("Transcript sent successfully");
      // Access the JSON data and do something with it
      console.log(data);
      setText(data.message);
      speak();
  })
  .catch((error) => {
      // Catch any errors that occurred during the fetch request
      console.error("Error sending transcript:", error);
  });
  };
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    synthesis.speak(utterance);
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
            <h1 className="animate-gradient-text text-5xl">
              AI Voice Trainer <br />
            </h1>
            <h1 className="animate-gradient-text text-5xl">
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
            {isListening ? <img src={Stop} alt="" style={{ filter: "invert(1)" }} /> : <img src={Mic} alt="" style={{ filter: "invert(1)" }} />}
            <div>
              {/* <img src={Mic} alt="" style={{ filter: "invert(1)" }} /> */}
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
