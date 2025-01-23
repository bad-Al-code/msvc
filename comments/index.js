import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import crypto from "node:crypto";
import axios from "axios";

const commentsByPostId = {};

const app = express();

app.use(bodyParser.json());
app.use(cors({}));

app.get("/posts/:id/comments", (req, res) => {
  const comments = commentsByPostId[req.params.id] || [];
  res.send(comments);
});

app.post("/posts/:id/comments", async (req, res) => {
  const postId = req.params.id;
  const commentId = crypto.randomUUID();
  const { content } = req.body;

  if (!content) {
    return res.status(400).send({ error: "Content is required" });
  }

  const comments = commentsByPostId[postId] || [];

  const newComment = { id: commentId, content };

  comments.push(newComment);

  commentsByPostId[postId] = comments;

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId,
    },
  });

  res.status(201).send(newComment);
});

app.listen(4001, () => {
  console.log(`POST runnig on: 4001`);
});
