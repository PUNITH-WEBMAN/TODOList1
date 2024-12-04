import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function AddTodo() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to track if the request is in progress

  const createTodo = async () => {
    if (message === "") {
      toast.error("Cannot add an empty message");
      return;
    }

    if (message.length < 4 || message.length > 20) {
      toast.error("Message must be between 4 and 20 characters");
      return;
    }

    setIsLoading(true); // Set loading to true before making the request

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/todolist`, {
        message: message,
      });
      if (response.data.success === "Created") {
        toast.success("Todo created successfully!");
        setMessage(""); // Clear the input field
        // Optionally, refresh the todo list or redirect
        window.location.reload(); // Or use your component's state to add the new todo dynamically
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false); // Set loading to false after request completion
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Add task here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={isLoading} // Disable input while loading
      />
      <button
        onClick={createTodo}
        className="btn"
        disabled={isLoading} // Disable button while loading
      >
        {isLoading ? "Adding..." : "ADD"}
      </button>
    </div>
  );
}
