import React from "react";
import Header from "./components/Header"; // Assuming you have this component
import AddTodo from "./components/AddTodo"; // Your add todo component
import Todolist from "./components/TodoList"; // Your list of todos
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div>
      <Header />
      <AddTodo />
      <Todolist />
      <ToastContainer />
    </div>
  );
}
