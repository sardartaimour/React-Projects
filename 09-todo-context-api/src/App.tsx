import { useEffect, useState } from "react";
import { TodoContextProvider } from "./Context";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";

function App() {
  const [todos, setTodos] = useState([] as any);

  const addTodo = (todo: string) => {
    setTodos((oldTodos: any[]) => [
      { id: Date.now(), completed: false, todo },
      ...oldTodos,
    ]);
  };

  const updateTodo = (id: number | string, todo: any) => {
    setTodos((oldTodos: any[]) =>
      oldTodos.map((oldTodo) => (oldTodo.id === id ? todo : oldTodo))
    );
  };

  const deleteTodo = (id: number | string) => {
    setTodos((oldTodos: any[]) =>
      oldTodos.filter((oldTodo) => oldTodo.id !== id)
    );
  };

  const toggleTodo = (id: number | string) => {
    setTodos((oldTodos: any[]) =>
      oldTodos.map((oldTodo) =>
        oldTodo.id === id
          ? { ...oldTodo, completed: !oldTodo.completed }
          : oldTodo
      )
    );
  };

  useEffect(() => {
    const todos: any[] = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];

    if (todos.length) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8 w-[50rem]">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
