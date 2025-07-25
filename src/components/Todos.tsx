import TodoItem from "./TodoItem";
import Classes from "./Todos.module.css";
import { useTodosContext } from "../store/todos-context-store";

const Todos = () => {
  const { items, removeTodo } = useTodosContext();
  return (
    <ul className={Classes.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item.title}
          onRemoveTodo={() => removeTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
