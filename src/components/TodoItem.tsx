type TodoItem = {
  item: string;
};
const TodoItem = ({ item }: TodoItem) => {
  return <li>{item}</li>;
};

export default TodoItem;
