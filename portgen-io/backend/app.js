require('.env').config();
const express = require('express');
const app = express();
const connectDB = require('./db/connect.js');
const port = 5000;


const info = require('./routers/info.js')
const setting = require('./routers/settings.js')


connectDB(process.env.MONGO_URI);
app.listen(port, () =>
    console.log(`Server is listening on port ${port}...`)
);


app.use(express.json())

app.use('/api/v1/info',info)
app.use('/api/v1/settings',setting)