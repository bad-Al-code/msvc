import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(cors({}));

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/events', (req, res) => {
    const { type, data } = req.body;

    if (type === 'PostCreated') {
        const { id, title } = data;

        posts[id] = { id, title, comments: [] };
    }

    if (type === 'CommentCreated') {
        const { id, content, postId, status } = data;

        const post = posts[postId];
        if (post) {
            post.comments.push({ id, content, status });
        } else {
            console.error(`Post with ID ${postId} not found.`);
        }
    }

    if (type === 'CommentUpdated') {
        const { id, content, postId, status } = data;

        const post = posts[postId];
        const comment = post.comments.find((comment) => comment.id === id);

        comment.status = status;
        comment.content = content;
    }

    console.log(posts);
    res.send({});
});

app.listen(4002, () => {
    console.log('Query: 4002');
});
