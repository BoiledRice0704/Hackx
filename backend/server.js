// index.js
const express = require("express");
const axios = require("axios");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;
const controller = require("./controllers/controller.js");

app.use(cors()); // Allow requests from all origins

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define your routes

// Authenticate user with ChatEngine
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const response = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      {
        headers: {
          "Content-Type": "application/json",
          "private-key": "cf560a94-3ab2-454a-bf04-6569016be9e9",
          // Add 'user_name' to allowed headers
          "Access-Control-Allow-Headers": "Content-Type, private-key, username",
        }
      }
    );
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error.response.data);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/prompt", (req, res) => {
  controller.run(req, res);
});

app.get("/api/image_text_prompt", (req, res) => {
  controller.runMultiModal(req, res);
});

app.get("/api/chat_prompt", (req, res) => {
  controller.runChat(req, res);
});

app.get("/api/embedding_prompt", (req, res) => {
  controller.runEmbedding(req, res);
});

app.get("/api/model_parameters_prompt", (req, res) => {
  controller.runTextParameters(req, res);
});

app.post("/api/translate_input_to_english", (req, res) => {
  controller.audioInputToEnglish(req, res);
});

app.post("/api/translate_input_to_hindi", (req, res) => {
  controller.audioInputToHindi(req, res);
});

app.post("/api/translate_input_to_spanish", (req, res) => {
  controller.audioInputToSpanish(req, res);
});

app.post("/api/translate_input_to_many", (req, res)=>{
  controller.audioInputToMany(req, res);
});
//learn
app.post("/api/learn_lang", (req, res)=>{
  controller.learnLang(req, res);
});
// Chat
const CHAT_ENGINE_PROJECT_ID = "287e0b40-982f-429b-a7f8-cde946157404";
const CHAT_ENGINE_PRIVATE_KEY = "cf560a94-3ab2-454a-bf04-6569016be9e9";
// app.post("/authenticate",async(req,res)=>{
//   const {username} =req.body;
//   try {
//     const r=await axios.put(
//       'https://api.chatengine.io/users/',
//       {username:username,secret:username,first_name:username},
//       {headers:{"private-key":"cf560a94-3ab2-454a-bf04-6569016be9e9"}}
//     );
//     return res.status(r.status).json(r.data)
//   } catch (e) {
//     console.log(e)
//   }
// })
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

