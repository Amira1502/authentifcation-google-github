// require express
const express = require ("express");

// require dotenv
require('dotenv').config()

// require connectDB
const connectDB = require("./config/connectDB")

// instance app 
const app = express();

// connect with DB
connectDB();

// PORT 
const PORT = process.env.PORT;

// create server
app.listen(PORT, (err) => 
err ?
 console.error("server can not running") 
:console.log(`server is running on ${PORT}` )
)