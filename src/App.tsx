import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const todos = [
    new Todo("Learn React with TypeScript"),
    new Todo("Build a Todo App"),
    new Todo("Understand State Management"),
    new Todo("Explore React Hooks"),
  ];

  return (
    <>
      <Todos items={todos} />
    </>
  );
}

export default App;
