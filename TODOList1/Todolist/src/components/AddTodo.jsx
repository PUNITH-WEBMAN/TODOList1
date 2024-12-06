import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function AddTodo() {
  const [message, setMessage] = useState("");

  const createTodo = async () => {
    if (message === "") {
      toast.error("Cannot addd an empty message");
      return;
    }

    if (message.length < 4 || message.length > 20) {
      toast.error("Message must be between 4 and 20 character");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/todolist', {
        message: message,
      });
      if (response.data.success === "Created") {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      toast.error("somethings is wrong")
    }
  };

  return (
    <div className="contanier">
      <input
        type="text"
        placeholder="Add task here"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={createTodo} className="btn" > ADD</button>
    </div>
  );
}
