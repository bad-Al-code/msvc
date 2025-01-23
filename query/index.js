import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors({}));

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, postId } = data;

    const post = posts[postId];
    if (post) {
      post.comments.push({ id, content });
    } else {
      console.error(`Post with ID ${postId} not found.`);
    }
  }

  console.log(posts);
  res.send({});
});

app.listen(4002, () => {
  console.log("Query: 4002");
});
