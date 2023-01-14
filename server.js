const express = require('express');
const dotenv = require('dotenv');

//Load Env variables
dotenv.config({ path: './config/config.env' });

const app = express();

const port = process.env.PORT || 6969;

app.get('/', (req, res) => {
    res.send('Welcome to the Bootcamper');
});

app.listen(
    port,
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${port}`)
);
