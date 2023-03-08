const TodoService = require("../../services/Todo");

const getTodoById = async (req, res) => {
  const { id } = req.params;

  if (id === undefined) {
    return res.json({
      status: "error",
      data: null,
      error: "Id is missed",
    });
  }

  const response = await TodoService.getById(id);

  return res.json(response);
};

module.exports = getTodoById;
