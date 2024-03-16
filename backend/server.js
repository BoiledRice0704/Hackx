// index.js
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173", // Change this to your client URL
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const app = express();
const port = process.env.PORT || 4000;
const controller = require("./controllers/controller.js");
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post("/api/audio_input", (req, res) => {
  controller.audioInputRun(req, res);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
