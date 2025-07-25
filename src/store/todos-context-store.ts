import { createContext, useContext } from "react";
import Todo from "../models/todo";

export type TodoContextObject = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodoContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

// Custom hook to use the todos context
export const useTodosContext = () => {
  return useContext(TodosContext);
};
