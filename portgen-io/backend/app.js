
/****** imports ******/
// dotenv
require("dotenv").config();


// express imports
const express = require("express");
app = express();
const connect_portgen = require("./db/connect");
require('express-async-errors');


// middlewares
const errorHandlerMiddleware = require('./middleware/errorHandlerMidware');
const auth_midware = require('./middleware/authMidware');
const notFound = require("./middleware/notFoundMidware");
const cookieParser = require('cookie-parser');

// public routers
const authRouter = require('./routers/authRouter');
const settingsRouter = require('./routers/settingsRouter')
const infoRouter = require('./routers/infoRouter')

// security
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors')
// Example using Express (replace with your framework's syntax):
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace with your frontend's origin
  res.header('Access-Control-Allow-Credentials', 'true'); // Allow cookies
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allowed methods
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-requested-with'); // Allowed headers
  next();
});



app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

/****** body ******/


app.use(express.json());
app.use(cookieParser(process.env.JWT_KEY));
//route middleware
app.use('/portapi/v1/reglog',authRouter)
app.use('/portapi/v1/settings',cors(),auth_midware,settingsRouter)
app.use('/portapi/v1/info',cors(),auth_midware,infoRouter)

// extra midware
app.use(errorHandlerMiddleware);
app.use(notFound);

//security midware
app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
);



// db connect and listen
const port = process.env.port || 5000;
const start = async (req, res) => {
  try {
    await connect_portgen(process.env.MONGO_URI);
    app.listen(port,()=>console.log(`welcome to PortGen.IO on port:${port}`))
  } catch (error) {
    console.log(error);
  }
};

start();