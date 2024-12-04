import { MdDelete } from "react-icons/md"; 
import { AiFillEdit } from "react-icons/ai"; 
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from "react-toastify";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({ _id: null, message: '' });

    // Fetch all todos
    const getAllToDo = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/todolist/getall`);
            setTodos(response.data.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    // Initial call to fetch todos
    useEffect(() => {
        getAllToDo();  // Fetch the todos when the component is first mounted
    }, []);

    // Handle deleting a todo
    const handleDelete = async (id) => {
        try {
            const result = await axios.delete(`${import.meta.env.VITE_API_URL}/todolist/deleteToDo/${id}`);
            if (result.data.success === 'deleted') {
                toast.success('Todo deleted successfully!');
                getAllToDo();  // Refresh the todo list after deletion
            }
        } catch (error) {
            console.error("Error deleting todo:", error);
            toast.error('Failed to delete todo.');
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
            toast.error('Message must be between 4 and 20 characters.');
            return;
        }

        try {
            const result = await axios.put(`${import.meta.env.VITE_API_URL}/todolist/updateToDo/${currentTodo._id}`, {
                message: currentTodo.message
            });

            if (result.data.success === 'updated') {
                toast.success('Todo updated successfully!');
                getAllToDo();  // Refresh the todo list after updating
                setIsEditing(false);
                setCurrentTodo({ _id: null, message: '' });
            }
        } catch (error) {
            console.error("Error updating todo:", error);
            toast.error('Failed to update todo.');
        }
    };

    // Cancel editing
    const handleCancelEdit = () => {
        setIsEditing(false);
        setCurrentTodo({ _id: null, message: '' });
    };

    return (
        <div className="text">
            {isEditing ? (
                <div>
                    <input 
                        type="text" 
                        value={currentTodo.message} 
                        onChange={handleEditInputChange} 
                    />
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                </div>
            ) : (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo._id}>
                            {todo.message}
                            <AiFillEdit className="icon" onClick={() => handleEdit(todo)} />
                            <MdDelete className="icon" onClick={() => handleDelete(todo._id)} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TodoList;
