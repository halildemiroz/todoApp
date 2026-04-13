import { useState } from "react";
import type { Todo } from "../Interfaces/Todo";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onUpdate: (id: number, newText: string) => void;
  onToggle: (id: number) => void;
}

export default function TodoItem({ todo, onDelete, onUpdate, onToggle }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [isDeleting, setIsDeleting] = useState(false); // Yeni durum

  const handleSave = () => {
    if (editText.trim() === "") return;
    onUpdate(todo.id, editText);
    setIsEditing(false);
  };

  // Animasyonlu silme fonksiyonu
  const animatedDelete = () => {
    setIsDeleting(true); // Animasyonu başlat
    setTimeout(() => {
      onDelete(todo.id); // 400ms sonra (CSS süresi) veriyi sil
    }, 400);
  };

  return (
    <li className={`todo-item ${isDeleting ? 'deleting' : ''}`}>
      {isEditing ? (
        <div className="edit-mode-container">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="todo-input"
            autoFocus
          />
          <button onClick={handleSave} className="btn btn-success">Kaydet</button>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="todo-checkbox"
            />
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
              {todo.text}
            </span>
          </div>
          <div className="action-buttons">
            <button onClick={() => setIsEditing(true)} className="btn btn-warning">Düzenle</button>
            <button onClick={animatedDelete} className="btn btn-danger">Sil</button>
          </div>
        </>
      )}
    </li>
  );
}
