import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import helmet from 'helmet';

const PORT = 4003;
const app = express();
app.use(helmet());
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
    const { type, data } = req.body;

    if (type === 'CommentCreated') {
        const status = data.content.includes('orange')
            ? 'rejected'
            : 'approved';

        await axios.post('http://event-bus-srv:4005/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content,
            },
        });
    }

    res.send({});
});

app.listen(PORT, () => {
    console.log(`Moderation: ${PORT}`);
});
