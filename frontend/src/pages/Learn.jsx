import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./style/learn.css";
import sendBtn from "../assets/send.png";
import Mic from "../assets/microphone.png";

const Learn = () => {
  const [lang, setLang] = useState(""); // Default language set to English
  const [userInput, setUserInput] = useState(""); // User input
  const [messages, setMessages] = useState([]); // Array to store messages
  const [text, setText] = useState([]);
  const handleChange = (e) => {
    setLang(e.target.value);
    localStorage.setItem({"selectedLanguage": e.target.value });
  };

  const handleSubmitText = () => {
    // Send user input to the API and get response
    async () => {
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
          setText(...data.message);
          speak();
        } else {
          throw new Error("Failed to send transcript");
        }
      } catch (err) {
        console.error("Error sending transcript:", err);
      }
    };
    // Here, you would typically make an API call to your backend or external AI service
    // For demonstration purpose, let's just echo the user's message for now
    // setMessages([...messages, { text: userInput, sender: "user" }]);
    // setUserInput(""); // Clear user input after sending
  };

  const handleSubmitAudio = () => {

  }

  useEffect(() => {
    // Here, you would typically fetch messages from an API
    // For demonstration purpose, let's simulate receiving a response after 1 second
    const timeout = setTimeout(() => {
      // Simulate receiving a message from the AI
      const aiMessage = { text: "This is a response from the AI.", sender: "ai" };
      setMessages([...messages, aiMessage]);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [messages]); // Trigger effect whenever messages change

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
                <button onClick={handleSubmitAudio}>
                  <img src={Mic} alt="" width="17px" />
                </button>
                <button onClick={handleSubmitText}>
                  <img src={sendBtn} alt="" width="17px" />
                </button>
              </div>
            </div>
          </div>
          <div className="learner">
            {text.map((message, index) => (
              <div key={index} className={message.sender === "user" ? "user-message" : "ai-message"}>
                {message.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
