import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios";

import crypto from "node:crypto";

const posts = {};

const app = express();
app.use(bodyParser.json());
app.use(cors({}));

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = crypto.randomUUID();
  const { title } = req.body;

  if (!title) {
    return res.status(400).send({ error: "Title is required" });
  }

  const post = { id, title };

  posts[id] = post;

  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });

  res.status(201).send(post);
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
