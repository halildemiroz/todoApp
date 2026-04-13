import { useState, useEffect } from "react";
import type { Todo } from "../Interfaces/Todo";
import TodoForm from "../Components/TodoForm";
import TodoItem from "../Components/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("halil-todo-v2");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("halil-todo-v2", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const handleUpdateTodo = (id: number, newText: string) => {
    setTodos(todos.map(t => t.id === id ? { ...t, text: newText } : t));
  };

  const handleToggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <main className="app-container">
      <h1 className="app-title">Yapılacaklar Listesi</h1>
      <TodoForm onAdd={handleAddTodo} />
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onDelete={handleDeleteTodo} 
            onUpdate={handleUpdateTodo} 
            onToggle={handleToggleTodo}
          />
        ))}
      </ul>
      {todos.length === 0 && <div className="empty-state">Henüz bir görev yok.</div>}
    </main>
  );
}
