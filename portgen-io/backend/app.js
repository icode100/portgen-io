const express = require("express");
const connect_portgen = require("./db/connect");
require("dotenv").config();
app = express();

app.use(express.json());

const start = async (req, res) => {
  try {
    await connect_portgen(process.env.MONGO_URI);
  } catch (error) {
    app.listen(process.env.port || 5000,()=>console.log("welcome to PortGen.IO"))
  }
};

start()