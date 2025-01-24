import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import helmet from 'helmet';

const PORT = 4003;
const app = express();
app.use(helmet());
app.use(bodyParser.json());

app.post('/events', (req, res) => {});

app.listen(PORT, () => {
    console.log(`Moderation: ${PORT}`);
});
