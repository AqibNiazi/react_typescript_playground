import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import Classes from "./Todos.module.css";
type TodoProps = {
  items: Todo[];
};
const Todos = ({ items }: TodoProps) => {
  return (
    <ul className={Classes.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} item={item.title} />
      ))}
    </ul>
  );
};

export default Todos;
