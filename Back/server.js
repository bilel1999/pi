

const express = require("express");


const app = express();
const mongoose = require("mongoose");
var userRoutes = require("./routes/auth");
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

app.use(cors({credentials: true, origin: "http://localhost:4200" }));
app.use(cookieParser());
app.use(express.json());
// Database Configuration
const database = (module.exports = () => {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    try {
      mongoose.connect(
        "mongodb://127.0.0.1:27017"
      );
      console.log("Database connected succesfully");
    } catch (error) {
      console.log(error);
      console.log("Database connection failed");
    }
  });
  
  database();


  app.use(cors({
    origin: "http://localhost:4200",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
/////////////

app.use("/User", userRoutes);

app.listen(3003);




