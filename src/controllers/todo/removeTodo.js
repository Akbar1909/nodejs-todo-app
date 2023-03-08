const TodoService = require("../../services/Todo");

const removeTodo = async (req, res) => {
  const { id } = req.params;
  if (id === undefined) {
    return {
      status: "error",
      data: null,
      error: "id is empty",
    };
  }

  const response = await TodoService.removeById(id);

  return res.json(response);
};

module.exports = removeTodo;
