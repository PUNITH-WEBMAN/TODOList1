import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function AddTodo() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createTodo = async () => {
    if (message.trim() === "") {
      toast.error("Message cannot be empty.");
      return;
    }
    if (message.length < 4 || message.length > 20) {
      toast.error("Message must be between 4 and 20 characters.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/todo/add`,
        { message }
      );
      if (response.data.success) {
        toast.success("Todo added successfully!");
        setMessage("");
        window.location.reload();
      }
    } catch (error) {
      toast.error("Failed to add todo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-1/2 flex flex-col pt-6 pb-2 items-center bg-black justify-center">
      <input
        type="text"
        placeholder="Enter task"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-1/2 p-4 border border-yellow-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-black"
      />
      <button
        onClick={createTodo}
        disabled={isLoading}
        className={`mt-4 px-4 py-2 text-white rounded-md ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-yellow-400 hover:bg-yellow-500"
        }`}
      >
        {isLoading ? "Adding..." : "Add"}
      </button>
    </div>
  );
}
