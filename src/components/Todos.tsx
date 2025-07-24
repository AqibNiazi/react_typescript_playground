import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import Classes from "./Todos.module.css";
type TodoProps = {
  items: Todo[];
  onRemoveTodos: (id: string) => void; // Assuming you want to handle removal of todos
};
const Todos = ({ items, onRemoveTodos }: TodoProps) => {
  return (
    <ul className={Classes.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item.title}
          onRemoveTodo={onRemoveTodos.bind(null, item.id)} // Pass the id to the remove handler
        />
      ))}
    </ul>
  );
};

export default Todos;
