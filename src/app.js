const express = require("express");
const todoRouters = require("./routes/todo");
const app = express();

const PORT = 5050;

app.use("/todo", todoRouters);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
