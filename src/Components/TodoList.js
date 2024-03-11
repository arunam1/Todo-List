import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [deletedTodos, setDeletedTodos] = useState([]);
  const [editTodoId, setEditTodoId] = useState(null);
  const [restoredTodoIds, setRestoredTodoIds] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleEditTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    );
    setTodos(updatedTodos);
    setEditTodoId(null);
  };

  const handleDeleteTodo = (id) => {
    const deletedTodo = todos.find((todo) => todo.id === id);
    if (deletedTodo) {
      setDeletedTodos([...deletedTodos, deletedTodo]);
    }
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    if (editTodoId === id) {
      setEditTodoId(null);
    }
  };

  const handleRestoreTodo = (id) => {
    const restoredTodo = deletedTodos.find((todo) => todo.id === id);
    if (restoredTodo) {
      setTodos([...todos, restoredTodo]);
      setDeletedTodos(deletedTodos.filter((todo) => todo.id !== id));
      setRestoredTodoIds([...restoredTodoIds, id]);
    }
  };

  const handleRestoreAll = () => {
    setTodos([...todos, ...deletedTodos]);
    setDeletedTodos([]);
    setRestoredTodoIds(deletedTodos.map((todo) => todo.id));
  };

  const handleEditButtonClick = (id) => {
    setEditTodoId(id);
  };

  const handleCloseClick = () => {
    window.close();
  };

  return (
    <div className="todo-list-container">
      <div className="card">
        <div className="icons">
          <button onClick={handleCloseClick}>Close</button>
        </div>
        <h1>Students Todo List</h1>
        <TodoForm addTodo={handleAddTodo} />
        <div className="todo-items">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onEdit={handleEditTodo}
              onDelete={handleDeleteTodo}
              onEditButtonClick={handleEditButtonClick}
              isEditing={editTodoId === todo.id}
            />
          ))}
        </div>
        <div className="deleted-todos">
          <button onClick={handleRestoreAll}>All Data</button>
          {deletedTodos.map((todo) => (
            <div key={todo.id} className="deleted-todo">
              {!restoredTodoIds.includes(todo.id) && (
                <button onClick={() => handleRestoreTodo(todo.id)}>
                  completed
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
