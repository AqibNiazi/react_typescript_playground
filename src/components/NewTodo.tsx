import { useRef } from "react";
import Classes from "./NewTodo.module.css";
type NewTodoProps = {
  onAddTodo: (text: string) => void;
};
const NewTodo = ({ onAddTodo }: NewTodoProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return; // Prevent adding empty todos
    }
    onAddTodo(enteredText); // Here you would typically dispatch an action or call a function to add the todo
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
