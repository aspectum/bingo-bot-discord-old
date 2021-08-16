/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    res.send('ok');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
