import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      addTodo(newTodo);
      setInputValue("");

      // Store todos in local storage
      const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      const updatedTodos = [...storedTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a todo..."
      />
      <button type="submit" className="add-todo-button">
        Add Todo
      </button>
      <br />
    </form>
  );
};

export default TodoForm;
