/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import mongoose from 'mongoose';

import dbConfig from './config/db';
import auth from './routes/auth';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use('/auth', auth);

app.use('/', (req, res, next) => {
    res.send('ok');
});

mongoose.connect(dbConfig.uri, dbConfig.options);

const db = mongoose.connection;
db.on('error', () => {
    throw new Error('Unable to connect to database');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
