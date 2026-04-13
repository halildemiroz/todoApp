import { useState, useEffect } from "react";
import type { Todo } from "../Interfaces/Todo";
import TodoForm from "../Components/TodoForm";
import TodoItem from "../Components/TodoItem";

export default function Home() {
  // 1. UYGULAMA AÇILDIĞINDA: Verileri disken (localStorage) okuyarak başlat
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("benim-gorevlerim");
    if (savedTodos) {
      return JSON.parse(savedTodos); // Metni tekrar JavaScript dizisine çevirir
    } else {
      return []; // Hiç kayıt yoksa boş liste ile başla
    }
  });

  // 2. LİSTE DEĞİŞTİĞİNDE: Güncel listeyi diske yaz
  useEffect(() => {
    // Verileri JSON formatında bir metne (string) çevirip kaydetmek zorundayız
    localStorage.setItem("benim-gorevlerim", JSON.stringify(todos));
  }, [todos]); // Bu virgül sonrası dizi: "sadece 'todos' state'i değiştiğinde bu fonksiyonu çalıştır" demek

  const handleAddTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = (id: number, newText: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  return (
    <main className="app-container">
      <h1 className="app-title">Yapılacaklar Listesi</h1>

      <TodoForm onAdd={handleAddTodo} />

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onUpdate={handleUpdateTodo}
          />
        ))}
      </ul>

      {todos.length === 0 && (
        <div className="empty-state">
          Şu an gösterilecek bir görev yok. Yeni bir tane ekleyin!
        </div>
      )}
    </main>
  );
}
