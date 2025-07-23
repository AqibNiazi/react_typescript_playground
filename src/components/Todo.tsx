type TodoProps = {
  items: string[];
};
const Todo = ({ items }: TodoProps) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item} className="todo-item">
            {item}
          </li>
        ))}
      </ul>
      {items.length === 0 && (
        <div className="no-items">No items to display</div>
      )}
    </div>
  );
};

export default Todo;
