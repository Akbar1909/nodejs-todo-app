const TodoService = require("../../services/Todo");

const getTodies = async (req, res) => {
  const data = await TodoService.getAll();

  return res.json(data);
};

module.exports = getTodies;
