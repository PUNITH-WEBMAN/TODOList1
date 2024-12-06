
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({ _id: null, message: "" });

  // Fetch all todos
  const getAllToDo = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/todolist/getall`
      );
      setTodos(response.data.data); // Populate the todos state
    } catch (error) {
      console.error("Error fetching todos:", error); // Log the error
    }
  };

  // Initial call to fetch todos
  useEffect(() => {
    getAllToDo(); // Fetch the todos when the component is first mounted
  }, []);

  // Handle deleting a todo
  const handleDelete = async (id) => {
    try {
      const result = await axios.delete(
        `${import.meta.env.VITE_API_URL}/todolist/deleteToDo/${id}`
      );
      if (result.data.success === "deleted") {
        toast.success("Todo deleted successfully!");
        getAllToDo(); // Refresh the todo list after deletion
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
      toast.error("Failed to delete todo.");
    }
  };

  // Handle changes in the edit input field
  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, message: e.target.value });
  };

  // Handle editing a todo
  const handleEdit = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ _id: todo._id, message: todo.message });
  };

  // Handle updating the todo
  const handleUpdate = async () => {
    if (currentTodo.message.length < 4 || currentTodo.message.length > 20) {
      toast.error("Message must be between 4 and 20 characters.");
      return;
    }

    try {
      const result = await axios.put(
        `${import.meta.env.VITE_API_URL}/todolist/updateToDo/${currentTodo._id}`,
        {
          message: currentTodo.message,
        }
      );

      if (result.data.success === "updated") {
        toast.success("Todo updated successfully!");
        getAllToDo(); // Refresh the todo list after updating
        setIsEditing(false);
        setCurrentTodo({ _id: null, message: "" });
      }
    } catch (error) {
      console.error("Error updating todo:", error);
      toast.error("Failed to update todo");
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentTodo({ _id: null, message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6">
      {isEditing ? (
        <div className="bg-gray-700 p-6 rounded-lg">
          <input
            type="text"
            value={currentTodo.message}
            onChange={handleEditInputChange}
            className="w-full p-3 mb-4 bg-gray-600 text-yellow-500 rounded-md placeholder:text-gray-400"
          />
          <button
            onClick={handleUpdate}
            className="w-full p-3 bg-yellow-500 text-black rounded-md hover:bg-yellow-400"
          >
            Update
          </button>
          <button
            onClick={handleCancelEdit}
            className="w-full p-3 bg-gray-600 text-white rounded-md mt-2 hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo._id}
              className="flex justify-between items-center bg-gray-700 p-4 rounded-lg"
            >
              <span className="text-yellow-400">{todo.message}</span>
              <div className="flex space-x-3">
                <AiFillEdit
                  className="text-yellow-500 cursor-pointer hover:text-yellow-300"
                  onClick={() => handleEdit(todo)}
                />
                <MdDelete
                  className="text-red-500 cursor-pointer hover:text-red-300"
                  onClick={() => handleDelete(todo._id)}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
