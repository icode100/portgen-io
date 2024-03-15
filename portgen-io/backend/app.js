
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

// routers
const authRouter = require('./routers/authRouter');
const settingsRouter = require('./routers/settingsRouter')
const infoRouter = require('./routers/infoRouter')

// security
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');





/****** body ******/

app.use(express.json());
app.use(cookieParser('JWT_KEY'));
//route middleware
app.use('/portapi/v1/reglog',authRouter)
app.use('/portapi/v1/settings',auth_midware,settingsRouter)
app.use('/portapi/v1/info',auth_midware,infoRouter)

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
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());


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