//@desc     Logs request to console, morgan's alternative

const logger = (req, res, next) => {
    console.log(
        `${req.method} ${req.protocol}://${req.get('host')}${
            req.originalUrl
        }`
    );
    next();
};

module.exports = logger;
