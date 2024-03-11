// AddTodo.js

import React, { useState } from "react";

function AddTodo() {
  const [todoText, setTodoText] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoEducationDetails, setTodoEducationDetails] = useState("");
  const [todoGraduationYear, setTodoGraduationYear] = useState("");

  const handleAddTodo = () => {
    // Logic to add the todo item
    console.log("Todo added:", {
      text: todoText,
      description: todoDescription,
      educationDetails: todoEducationDetails,
      graduationYear: todoGraduationYear,
    });

    // Reset form fields after adding todo
    setTodoText("");
    setTodoDescription("");
    setTodoEducationDetails("");
    setTodoGraduationYear("");
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleAddTodo}>
        <label>
          Name:
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={todoDescription}
            onChange={(e) => setTodoDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Education Details:
          <input
            type="text"
            value={todoEducationDetails}
            onChange={(e) => setTodoEducationDetails(e.target.value)}
          />
        </label>
        <br />
        <label>
          Graduation Year:
          <input
            type="text"
            value={todoGraduationYear}
            onChange={(e) => setTodoGraduationYear(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
