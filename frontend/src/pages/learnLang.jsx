import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./style/learnLang.css";
import sendBtn from "../assets/send.png";
import Mic from "../assets/microphone.png";

const LearnLang = () => {
  const [lang, setLang] = useState("Hindi"); // Default language set to Hindi
  const [userInput, setUserInput] = useState(""); // User input
  const [messages, setMessages] = useState([]); // Array to store messages
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Set default language to Hindi when component mounts
    localStorage.setItem("selectedLanguage", "Hindi");
  }, []);

  const handleChange = (e) => {
    setLang(e.target.value);
    localStorage.setItem("selectedLanguage", e.target.value);
  };

  const handleSubmitText = async () => {
    try {
      const response = await fetch(
        `http://localhost:8001/api/translate_input_to_${localStorage.getItem('selectedLanguage')}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ transcript: userInput }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Transcript sent successfully");
        console.log(data);
        const newText = {text:data.message,sender:'ai'};
        setMessages([...messages, { text: userInput, sender: "user" }, newText]);
        console.log({messages}) // Merge new AI replies with existing messages
        setUserInput(""); // Clear user input after sending
        speak(data.message); // Call speak function for the new AI message
      } else {
        throw new Error("Failed to send transcript");
      }
    } catch (err) {
      console.error("Error sending transcript:", err);
    }
  };

  const toggleRecording = () => {
    if (!isRecording) {
      if (recognition) {
        recognition.start();
      }
      setIsRecording(true);
    } else {
      if (recognition) {
        recognition.stop();
      }
      setIsRecording(false);
    }
  };

  useEffect(() => {
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
      const recognitionInstance = new window.webkitSpeechRecognition();

      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = false;

      recognitionInstance.lang = lang;

      recognitionInstance.onresult = (e) => {
        setUserInput((prevText) => prevText + e.results[0][0].transcript + ' ');
        recognitionInstance.stop();
      };

      recognitionInstance.onerror = (e) => {
        console.log('error', e);
        recognitionInstance.stop();
      };

      recognitionInstance.onend = (e) => {
        console.log('ended', e);
        if (isRecording) {
          recognitionInstance.start();
        }
      };

      setRecognition(recognitionInstance);
    }
  }, [lang, isRecording]);

  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = lang;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
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
            <button className="flex items-center justify-between">Start Now</button>
          </div>
        </div>
        <div className="learning mt-24 ml-7">
          <div className="ai flex h-10 ">
            <div className="inp bg-white w-[35rem] rounded-2xl flex items-center justify-between">
              <input
                type="text"
                placeholder="Enter your text here"
                className="ml-2"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <div className="chatbtns w-fit flex justify-end pr-3">
                <button onClick={toggleRecording}>
                  <img src={Mic} alt="" width="17px" />
                </button>
                <button onClick={handleSubmitText}>
                  <img src={sendBtn} alt="" width="17px" />
                </button>
              </div>
            </div>
          </div>
          <div className="learner">
            {messages.map((message, index) => (
              <div key={index} className={message.sender === "user" ? "user-message" : "ai-message"}>
                {message.text}
              </div>
            ))}
            {/* {messages[0].sender === "ai" && (
                  <button onClick={() => handleSpeakQuestion(messages[0].text)}>Speak</button>
                )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnLang;
