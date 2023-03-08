const express = require("express");
const {
  getTodies,
  getTodoById,
  createTodo,
  updateTodo,
  removeTodo,
} = require("../controllers/todo");

const router = express.Router();

router.get("/all", getTodies);
router.get("/:id", getTodoById);
router.post("/create", createTodo);
router.patch("/update/:id", updateTodo);
router.delete("/remove/:id", removeTodo);

module.exports = router;
