import Classes from "./TodoItem.module.css";
type TodoItem = {
  item: string;
  onRemoveTodo: (id: string) => void;
};
const TodoItem = ({ item, onRemoveTodo }: TodoItem) => {
  return (
    <li className={Classes.item} onClick={() => onRemoveTodo(item)}>
      {item}
    </li>
  );
};

export default TodoItem;
