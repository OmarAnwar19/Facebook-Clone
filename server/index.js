const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//mongo middleware
const db = require("./utils/db").MongoURI;

//connecting to mongodb
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err));

//middleware
app.use(cors());
app.use(express.json());

//use react build file
app.use(express.static("build"));

//routes
app.use("/posts", require("./routes/posts"));

//connecting to server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`App running on port ${PORT}...`));
