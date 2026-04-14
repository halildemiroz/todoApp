export const TodoInterface = {
  getTodos: () => {
    const saved = localStorage.getItem("halil-todo-js");
    return saved ? JSON.parse(saved) : [];
  },
  
  saveTodos: (todos) => {
    localStorage.setItem("halil-todo-js", JSON.stringify(todos));
  }
};
