const express = require("express");
const fruits = require("../controllers/fruits");

const fruitRouter = express.Router();

fruitRouter.get("/", fruits.index);

fruitRouter.post("/", fruits.create);

fruitRouter.get("/:name", fruits.show);
fruitRouter.patch("/:name", fruits.update);
fruitRouter.delete("/:name", fruits.destroy);

module.exports = fruitRouter;
