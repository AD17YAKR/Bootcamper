const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
//Load Env variables
dotenv.config({ path: './config/config.env' });

const app = express();

//Route Files
const bootcamps = require('./routes/bootcamps');

//Connect to Database
connectDB();

//Dev logging Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//Mounting Bootcamp Routers
app.use('/api/v1/bootcamps', bootcamps);

const port = process.env.PORT || 6969;

app.get('/', (req, res) => {
    res.send('Welcome to the Bootcamper');
});

const server = app.listen(
    port,
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${port}`)
);

//Handle Unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log('Error : ', err.message);
    //Close Server and Exit Process
    server.close(() => process.exit(1));
});
