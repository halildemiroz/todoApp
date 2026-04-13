import { useState } from "react";
import type { Todo } from "../Interfaces/Todo";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onUpdate: (id: number, newText: string) => void;
}

export default function TodoItem({ todo, onDelete, onUpdate }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim() === "") return;
    onUpdate(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <div className="edit-mode-container">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="todo-input"
            autoFocus
          />
          <button onClick={handleSave} className="btn btn-success">
            Kaydet
          </button>
        </div>
      ) : (
        <>
          <span className="todo-text">{todo.text}</span>
          <div className="action-buttons">
            <button onClick={() => setIsEditing(true)} className="btn btn-warning">
              Düzenle
            </button>
            <button onClick={() => onDelete(todo.id)} className="btn btn-danger">
              Sil
            </button>
          </div>
        </>
      )}
    </li>
  );
}
