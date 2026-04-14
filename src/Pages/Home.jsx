import { useState, useEffect } from "react";
import { TodoInterface } from "../Interfaces/TodoInterface";
import TodoForm from "../Components/TodoForm";
import TodoItem from "../Components/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState(() => TodoInterface.getTodos());

  useEffect(() => {
    TodoInterface.saveTodos(todos);
  }, [todos]);

  const handleAddTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const handleUpdateTodo = (id, newText) => {
    setTodos(todos.map(t => t.id === id ? { ...t, text: newText } : t));
  };

  const handleToggleTodo = (id) => {
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
