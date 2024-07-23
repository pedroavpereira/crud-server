const express = require("express");
const app = express();

const fruitRouter = require("./routes/fruitRouter");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/fruits", fruitRouter);

module.exports = app;
