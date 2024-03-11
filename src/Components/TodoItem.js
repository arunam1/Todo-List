import React, { useState } from "react";
import { FaTrashRestore, FaEdit } from "react-icons/fa";
import "./TodoItem.css";

const TodoItem = ({ todo, onEdit, onDelete, isEditing, onEditButtonClick }) => {
  const [editTodo, setEditTodo] = useState({ ...todo });

  const handleSaveClick = () => {
    onEdit(editTodo.id, editTodo);
  };

  const itemColor = "black";

  return (
    <div className="todo-item-card" style={{ backgroundColor: itemColor }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editTodo.text}
            onChange={(e) => setEditTodo({ ...editTodo, text: e.target.value })}
            placeholder="Name"
          />
          <textarea
            value={editTodo.description}
            onChange={(e) =>
              setEditTodo({ ...editTodo, description: e.target.value })
            }
            placeholder="Description"
          />
          <input
            type="text"
            value={editTodo.educationDetails}
            onChange={(e) =>
              setEditTodo({ ...editTodo, educationDetails: e.target.value })
            }
            placeholder="Education Details"
          />
          <input
            type="number"
            value={editTodo.graduationYear}
            onChange={(e) =>
              setEditTodo({ ...editTodo, graduationYear: e.target.value })
            }
            placeholder="Graduation Year"
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <div>
            <p>
              <strong>Name:</strong> {todo.text}
            </p>
            <p>
              <strong>Description:</strong> {todo.description}
            </p>
            <p>
              <strong>Education Details:</strong> {todo.educationDetails}
            </p>
            <p>
              <strong>Graduation Year:</strong> {todo.graduationYear}
            </p>
          </div>
          <button onClick={() => onEditButtonClick(todo.id)}>
            <FaEdit />
          </button>
        </>
      )}
      <button onClick={() => onDelete(todo.id)}>
        <FaTrashRestore />
      </button>
    </div>
  );
};

export default TodoItem;
