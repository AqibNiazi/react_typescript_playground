import { useRef } from "react";
import Classes from "./NewTodo.module.css";
import { useTodosContext } from "../store/todos-context-store";

const NewTodo = () => {
  const { addTodo } = useTodosContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return; // Prevent adding empty todos
    }
    addTodo(enteredText);
    inputRef.current!.value = ""; // Clear the input after adding
  };
  return (
    <form onSubmit={submitHandler} className={Classes.form}>
      <label htmlFor="text">New Todo</label>
      <input type="text" id="text" ref={inputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
