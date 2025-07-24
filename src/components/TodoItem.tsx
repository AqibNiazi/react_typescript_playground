import Classes from "./TodoItem.module.css";
type TodoItem = {
  item: string;
};
const TodoItem = ({ item }: TodoItem) => {
  return <li className={Classes.item}>{item}</li>;
};

export default TodoItem;
