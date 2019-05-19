require("dotenv").config();
const express = require("express");
const connectDB = require("./db");

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("./public"));

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(PORT, () => console.log(`Server is linstening on port ${PORT}`));
  } catch (err) {
    console.error(err);
  }
};

start();
