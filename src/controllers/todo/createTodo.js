const TodoService = require("../../services/Todo");

const createTodo = async (req, res) => {
  const data = await TodoService.create(req.body);

  return res.json(data);
};

module.exports = createTodo;
