const { request } = require("express");
const TodoService = require("../../services/Todo");

const updateTodo = async (req, res) => {
  const { id } = req.params;

  if (id === undefined) {
    return res.json({
      status: "error",
      data: null,
      error: "id is missed",
    });
  }

  const response = await TodoService.update(id, req.body);

  return res.json(response);
};

module.exports = updateTodo;
