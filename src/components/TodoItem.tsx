import Classes from "./TodoItem.module.css";

type TodoItemProps = {
  item: string;
  onRemoveTodo: () => void;
};

const TodoItem = ({ item, onRemoveTodo }: TodoItemProps) => {
  return (
    <li className={Classes.item} onClick={onRemoveTodo}>
      {item}
    </li>
  );
};

export default TodoItem;
