import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodos={removeTodoHandler} />
    </>
  );
}

export default App;
