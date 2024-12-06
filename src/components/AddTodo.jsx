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
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/todolist/add`, {
        message: message,
      });
      if (response.data.success === "Created") {
        toast.success("Todo created successfully!");
        setMessage(""); // Clear the input field
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
    <div className="min-h-48 bg-gray-800 flex items-center justify-center">
      <div className="bg-gray-700 p-6 rounded-lg w-full max-w-md">
        <input
          type="text"
          placeholder="Add task here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isLoading} // Disable input while loading
          className="w-full p-3 mb-4 bg-gray-600 text-yellow-500 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          onClick={createTodo}
          className="w-full p-3 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 disabled:bg-gray-600"
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? "Adding..." : "ADD"}
        </button>
      </div>
    </div>
  );
}
