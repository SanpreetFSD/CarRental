require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const port = process.env.PORT;
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to mongoDB"));

const UserRouter = require("./routes/UserRouter");
app.use("/auth", UserRouter);

app.listen(port, () => {
  console.log("server started and running");
});

