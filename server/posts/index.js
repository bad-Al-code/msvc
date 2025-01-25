import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';
import helmet from 'helmet';

import crypto from 'node:crypto';

const posts = {};

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(cors({}));

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', async (req, res) => {
    const id = crypto.randomUUID();
    const { title } = req.body;

    if (!title) {
        return res.status(400).send({ error: 'Title is required' });
    }

    const post = { id, title };

    posts[id] = post;

    await axios.post('http://event-bus-srv:4005/events', {
        type: 'PostCreated',
        data: {
            id,
            title,
        },
    });

    res.status(201).send(post);
});

app.post('/events', (req, res) => {
    console.log('received event', req.body.type);

    res.send({});
});

app.listen(4000, () => {
    console.log('again test');
    console.log('Server running on port 4000');
});
