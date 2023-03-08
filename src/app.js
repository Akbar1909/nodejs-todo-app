const express = require("express");
const todoRouters = require("./routes/todo");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const PORT = 5050;

app.use(bodyParser.json());

app.use("/todo", todoRouters);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
