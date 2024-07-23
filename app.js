const express = require("express");
const cors = require("cors");
const app = express();

const fruitRouter = require("./routes/fruitRouter");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/fruits", fruitRouter);

module.exports = app;
