require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

// express app
const app = express();

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(process.env.PORT, () => {
    console.log(`listening for requests on port ${process.env.PORT}`);
});
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// listen for requests


