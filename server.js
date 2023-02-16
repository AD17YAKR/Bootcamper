const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const fileupload = require('express-fileupload');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/err');
//Security Enhancer Packages
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');

//Load Env variables
dotenv.config({ path: './config/config.env' });

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Cookie Parser
app.use(cookieParser());

//Route Files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');
const auth = require('./routes/auth');
const users = require('./routes/users');
const reviews = require('./routes/reviews');

//Connect to Database
connectDB();

//Dev logging Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//File upload middleware
app.use(fileupload());

//Sanitize data
app.use(mongoSanitize());

//Set Security Headers
app.use(helmet());

//Prevent XSS attacks
app.use(xss());

//Rate Limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, //10 mins
    max: 100
});
app.use(limiter);

//Prevent Param Pollution
app.use(hpp());

//Enable CORS
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Mounting Bootcamp Routers
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);
app.use('/api/v1/auth', auth);
app.use('/api/v1/auth/users', users);
app.use('/api/v1/reviews', reviews);

app.use(errorHandler);

const port = process.env.PORT || 6969;

app.get('/', (req, res) => {
    res.send('Welcome to the Bootcamper');
});

const server = app.listen(
    port,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on ${port}`
    )
);

//Handle Unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log('Error : ', err.message);
    //Close Server and Exit Process
    server.close(() => process.exit(1));
});
