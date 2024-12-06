const Todo = require("../model/todo");

// Controller to create a new todo
const createToDo = async (req, res) => {
  const { message } = req.body;

  // Validation
  if (!message || message.length < 4 || message.length > 20) {
    return res.status(400).json({ errorMessage: "Message must be between 4 and 20 characters." });
  }

  try {
    const addToDo = await Todo.create({ message });
    res.status(201).json({ success: "Created", data: addToDo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller to fetch all todos
const getAllToDo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ success: true, data: todos });
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

// Controller to update a todo
const updateToDo = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;

  if (!message || message.length < 4 || message.length > 20) {
    return res.status(400).json({ errorMessage: "Message must be between 4 and 20 characters." });
  }

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, { message }, { new: true });
    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json({ success: "updated", data: updatedTodo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller to delete a todo
const deleteToDo = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json({ success: "deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createToDo,
  getAllToDo,
  updateToDo,
  deleteToDo,
};
