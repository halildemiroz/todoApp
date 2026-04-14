import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    onAdd(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Yeni bir görev yazın..."
        className="todo-input"
      />
      <button type="submit" className="btn btn-add">Ekle</button>
    </form>
  );
}
