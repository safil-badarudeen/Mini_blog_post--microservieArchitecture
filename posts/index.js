const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(cors());

let posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });

  posts[id] = {
    id,
    title,
  };

  res.send(posts);
});

app.post("/events", (req, res) => {
  console.log("event recieved in posts  feature");
  res.send("HEllooo");
});

app.listen(PORT, () => {
  console.log("listening to port 4000");
});
